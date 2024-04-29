import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  Trailer,
  TRAILER_DURATION,
  trailerDefaultProps,
} from "../../../../remotion/compositions/Trailer"
import VideoCreatorPlayer from "../VideoCreatorPlayer"
import VideoCreateConfigurationLayout from "../VideoCreateConfigurationLayout"
import { FileExportType, VideoType } from "../Video.type"
import { BASE_URL, strapiService } from "../../../../api/strapiService"
import { Form, Formik, useFormikContext } from "formik"
import Input from "../../../Components/Forms/inputs"
import { DreamType } from "../../../../remotion/compositions/DreamType"
import { dreamData } from "../../../../remotion/compositions/dreamData"
import DreamTemplate, {
  DREAM_TEMPLATE_DURATION,
  dreamTemplateDefaultProps,
} from "../../../../remotion/compositions/DreamTemplate"
interface TrailerTemplateProps {
  onExport: (video: Partial<VideoType>) => void
  // video: VideoType
  videoStatus: String
  onExportDone: () => void
  downUrl: string | null
  watermark: string | null
}

export const weathers = [
  { value: 0, label: "Pas de ressenti" },
  { value: 1, label: "Neigeux" },
  { value: 2, label: "Pluvieux" },
  { value: 3, label: "Nuageux" },
  { value: 4, label: "Ensoleillé" },
]

export const tastes = [
  { label: "Bière", value: 0 },
  { label: "Vin", value: 1 },
  { label: "Boisson alcoolique", value: 2 },
  { label: "Jus gazeuse", value: 3 },
  { label: "Eau minérale", value: 4 },
]

//TODO allow download when status is done
const TravelTemplate: React.FC<TrailerTemplateProps> = ({
  onExport,
  // video,
  videoStatus,
  onExportDone,
  downUrl,
  watermark,
}) => {
  const [musicUrl, setMusicUrl] = useState(dreamTemplateDefaultProps.music)
  // const [watermark, setWatermark] = useState(trailerDefaultProps.watermark)
  const [files, setFiles] = useState<FileExportType>({
    audio: null,
    video: null,
    watermark: null,
  })
  const [progression, setProgression] = useState<number>(0) // To track export progression
  const [downloadUrl, setDownloadUrl] = useState<string | null>("")
  const handleMusicUpload = (file: File) => {
    setMusicUrl(URL.createObjectURL(file))
    setFiles((prevState) => ({ ...prevState, audio: file }))
  }
  const handleWatermarkUpload = (file: File) => {
    // setWatermark(URL.createObjectURL(file))
    setFiles((prevState) => ({ ...prevState, watermark: file }))
  }

  const formRef = useRef(null)
  const exportTemplate = () => {
    //@ts-ignore
    formRef.current.click()
  }

  const submitForm = (values: any) => {
    const { description, time, weather, taste, times, passport } = values

    const travels = dreamData.filter((d) => d.topic == "Voyage")

    let responses: DreamType[] = []
    let year = 2024
    const note = Number(weather) + Number(taste)

    let idRender = 3

    if (passport == "false") {
      responses.push({ year, ...travels.filter((t) => t.index == 1)[0] })
      responses.push({
        year: year + 1,
        ...travels.filter((t) => t.index == 2)[0],
      })

      if (note >= 6) {
        responses.push({
          year: year + 2,
          ...travels.filter((t) => t.index == 4)[0],
        })
        responses.push({
          year: year + 3,
          ...travels.filter((t) => t.index == 5)[0],
        })
      } else {
        responses.push({
          year: year + 2,
          ...travels.filter((t) => t.index == 3)[0],
        })
        responses.push({
          year: year + 3,
          ...travels.filter((t) => t.index == 4)[0],
        })
        idRender = 4
      }
    } else {
      responses.push({ year, ...travels.filter((t) => t.index == 3)[0] })
      responses.push({
        year: year + 1,
        ...travels.filter((t) => t.index == 1)[0],
      })

      if (note <= 5) {
        responses.push({
          year: year + 2,
          ...travels.filter((t) => t.index == 5)[0],
        })
        responses.push({
          year: year + 3,
          ...travels.filter((t) => t.index == 4)[0],
        })
        idRender = 5
      } else {
        responses.push({
          year: year + 2,
          ...travels.filter((t) => t.index == 3)[0],
        })
        responses.push({
          year: year + 3,
          ...travels.filter((t) => t.index == 4)[0],
        })
        idRender = 6
      }
    }

    console.log(responses)
    onExport({
      // ...video,
      inputProps: {
        idRender,
        responses,
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
      // getRenderProgression()
    }
  }, [videoStatus, downloadUrl])
  const getRenderProgression = async () => {
    let interval = setInterval(async () => {
      await fetch(`${BASE_URL}/remotion/export/1/progress`, {
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
            downloadUrl: downUrl,
            projectName: "Voyage",
          }}
          durationInFrames={DREAM_TEMPLATE_DURATION}
          component={DreamTemplate}
          inputProps={{
            // responses,
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
          <Formik
            initialValues={{
              description: "",
              time: "",
              weather: "",
              taste: "",
              times: "",
              passport: false,
            }}
            onSubmit={submitForm}
          >
            {({ isSubmitting }) => (
              <Form>
                <div>
                  <Input.LongText
                    name="description"
                    label="Raconter votre dernier rêve sur le voyage"
                  />
                </div>
                <div>
                  <Input.Datetime
                    name="time"
                    label="A quelle date/heure à peu près avez-vous eu ce rêve"
                  />
                </div>
                <div>
                  <Input.Select
                    options={weathers}
                    name="weather"
                    label="Comment était le temps pendant ce rêve ?"
                  />
                </div>
                <div>
                  <Input.Select
                    options={tastes}
                    name="taste"
                    label="Une boisson que vous avez bue ?"
                  />
                </div>
                <div>
                  <Input.Number label="Nombre pareil du rêve" name="times" />
                </div>
                <div>
                  <Input.Bool
                    name="passport"
                    label="Disposez-vous d'un passport ? "
                  />
                </div>

                <button ref={formRef} type="submit" hidden>
                  test
                </button>
              </Form>
            )}
          </Formik>
        </VideoCreateConfigurationLayout>
      </div>
    </div>
  )
}

export default TravelTemplate
