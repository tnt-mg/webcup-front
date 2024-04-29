import React, { useCallback, useEffect, useState } from "react"
import {
  Trailer,
  TRAILER_DURATION,
  trailerDefaultProps,
} from "../../../../remotion/compositions/Trailer"
import VideoCreatorPlayer from "../VideoCreatorPlayer"
import VideoCreateConfigurationLayout from "../VideoCreateConfigurationLayout"
import { FileExportType, VideoType } from "../Video.type"
import { BASE_URL, strapiService } from "../../../../api/strapiService"

interface TrailerTemplateProps {
  onExport: (video: VideoType) => void
  video: VideoType
  videoStatus: String
  onExportDone: () => void
}
//TODO allow download when status is done
const TrailerTemplate: React.FC<TrailerTemplateProps> = ({
  onExport,
  video,
  videoStatus,
  onExportDone,
}) => {
  const [presenterLabel, setPresenterLabel] = useState(
    video?.inputProps?.presenterLabel ?? trailerDefaultProps.presenterLabel
  )
  const [textOne, setTextOne] = useState(
    video?.inputProps?.textOne ?? trailerDefaultProps.textOne
  )
  const [textTwo, setTextTwo] = useState(
    video?.inputProps?.textTwo ?? trailerDefaultProps.textTwo
  )
  const [textThree, setTextThree] = useState(
    video?.inputProps?.textThree ?? trailerDefaultProps.textThree
  )
  const [hackathonName, setHackathonName] = useState(
    video?.inputProps?.hackathonName ?? trailerDefaultProps.hackathonName
  )
  const [musicUrl, setMusicUrl] = useState(
    video?.inputProps?.music ?? trailerDefaultProps.music
  )
  const [watermark, setWatermark] = useState(
    video?.inputProps?.watermark ?? trailerDefaultProps.watermark
  )
  const [files, setFiles] = useState<FileExportType>({
    audio: null,
    video: null,
    watermark: null,
  })
  const [progression, setProgression] = useState<number>(0) // To track export progression
  const [downloadUrl, setDownloadUrl] = useState<string | null>(video.url ?? "")
  const handleMusicUpload = (file: File) => {
    setMusicUrl(URL.createObjectURL(file))
    setFiles((prevState) => ({ ...prevState, audio: file }))
  }
  const handleWatermarkUpload = (file: File) => {
    setWatermark(URL.createObjectURL(file))
    setFiles((prevState) => ({ ...prevState, watermark: file }))
  }
  const exportTemplate = () => {
    onExport({
      ...video,
      inputProps: {
        presenterLabel,
        textOne,
        textTwo,
        textThree,
        hackathonName,
        music: musicUrl,
        watermark,
      },
      files,
    })
  }

  useEffect(() => {
    if (
      videoStatus === "EXPORTING" ||
      (videoStatus === "DONE" && downloadUrl == null)
    ) {
      getRenderProgression()
    }
  }, [videoStatus, downloadUrl])
  const getRenderProgression = async () => {
    let interval = setInterval(async () => {
      await fetch(`${BASE_URL}/remotion/export/${video.id}/progress`, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProgression(data.framesRendered)
          if (
            TRAILER_DURATION === Number(data.framesRendered) &&
            data.outputFile
          ) {
            console.log("DONE", data)
            setDownloadUrl(data.outputFile)
            onExportDone()
            clearInterval(interval)
          }
        })
        .catch((e) => clearInterval(interval))
    }, 3500)
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 space-5">
      <div className="col-span-1 xl:col-span-3 flex justify-center templatePlayer">
        <VideoCreatorPlayer
          exportProps={{
            status: videoStatus,
            progression,
            downloadUrl,
            projectName: video.name,
          }}
          durationInFrames={TRAILER_DURATION}
          component={Trailer}
          inputProps={{
            presenterLabel,
            textOne,
            textTwo,
            textThree,
            hackathonName,
            music: musicUrl,
            watermark,
          }}
        />
      </div>

      <div className="gap-3 col-span-1 mr-2 px-1 pt-0">
        <VideoCreateConfigurationLayout
          onMusicAdded={(file: File) => handleMusicUpload(file)}
          onWatermarkAdded={(file: File) => handleWatermarkUpload(file)}
          onExport={exportTemplate}
        >
          <div className="relative z-0 group">
            <input
              type="text"
              id="org"
              className="input-floating border-current/50 focus:border-current !text-current peer"
              placeholder=" "
              value={presenterLabel}
              onChange={({ target: { value } }) => setPresenterLabel(value)}
            />
            <label
              htmlFor="org"
              className="label-floating text-current peer-focus:text-current"
            >
              Organisateur
            </label>
          </div>
          <div className="relative z-0 group my-2">
            <input
              type="text"
              id="text1"
              className="input-floating border-current/50 focus:border-current !text-current peer"
              placeholder=" "
              value={textOne}
              onChange={({ target: { value } }) => setTextOne(value)}
            />
            <label
              htmlFor="text1"
              className="label-floating text-current peer-focus:text-current"
            >
              1er Texte
            </label>
          </div>
          <div className="relative z-0 group my-2">
            <input
              type="text"
              id="text2"
              className="input-floating border-current/50 focus:border-current !text-current peer"
              placeholder=" "
              value={textTwo}
              onChange={({ target: { value } }) => setTextTwo(value)}
            />
            <label
              htmlFor="text2"
              className="label-floating text-current peer-focus:text-current"
            >
              2ème Texte
            </label>
          </div>
          <div className="relative z-0 group my-2">
            <input
              type="text"
              id="text2"
              className="input-floating border-current/50 focus:border-current !text-current peer"
              placeholder=" "
              value={textThree}
              onChange={({ target: { value } }) => setTextThree(value)}
            />
            <label
              htmlFor="text2"
              className="label-floating text-current peer-focus:text-current"
            >
              3ème Texte
            </label>
          </div>
          <div className="relative z-0 group my-2">
            <textarea
              id="hackname"
              className="input-floating border-current/50 focus:border-current !text-current peer"
              placeholder=" "
              value={hackathonName}
              onChange={({ target: { value } }) => setHackathonName(value)}
            />
            <label
              htmlFor="hackname"
              className="label-floating text-current peer-focus:text-current"
            >
              Nom du Hackathon
            </label>
          </div>
        </VideoCreateConfigurationLayout>
      </div>
    </div>
  )
}

export default TrailerTemplate
