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

export const sources = [
  { value: 0, label: "Boulot" },
  { value: 1, label: "Argent eparpillé par terre" },
  { value: 2, label: "Business" },
  { value: 3, label: "Emprunt" },
  { value: 4, label: "Cadeau" },
]

export const places = [
  { label: "A la plage", value: 0 },
  { label: "Sur la route", value: 1 },
  { label: "A la maison", value: 2 },
  { label: "Dans la jungle", value: 3 },
  { label: "Dans les nuages", value: 4 },
]

//TODO allow download when status is done
const FinanceTemplate: React.FC<TrailerTemplateProps> = ({
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
    const { description, time, source, place, times, dette } = values

    const travels = dreamData.filter((d) => d.topic == "Finance")

    let responses: DreamType[] = []
    let year = 2024
    const note = Number(place) + Number(source)
    let idRender = 7
    if (dette == "true") {
      responses.push({ year, ...travels.filter((t) => t.index == 1)[0] })
      responses.push({
        year: year + 1,
        ...travels.filter((t) => t.index == 2)[0],
      })
      responses.push({
        year: year + 2,
        ...travels.filter((t) => t.index == 3)[0],
      })
      responses.push({
        year: year + 3,
        ...travels.filter((t) => t.index == 4)[0],
      })
    } else {
      if (source == 1 || source == 4) {
        responses.push({ year, ...travels.filter((t) => t.index == 3)[0] })
        responses.push({
          year: year + 1,
          ...travels.filter((t) => t.index == 3)[0],
        })
        responses.push({
          year: year + 2,
          ...travels.filter((t) => t.index == 2)[0],
        })
        responses.push({
          year: year + 3,
          ...travels.filter((t) => t.index == 2)[0],
        })
        idRender = 8
      } else {
        responses.push({ year, ...travels.filter((t) => t.index == 2)[0] })
        responses.push({
          year: year + 2,
          ...travels.filter((t) => t.index == 2)[0],
        })
        responses.push({
          year: year + 3,
          ...travels.filter((t) => t.index == 2)[0],
        })
        responses.push({
          year: year + 4,
          ...travels.filter((t) => t.index == 2)[0],
        })

        idRender = 9
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
            projectName: "Finance",
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
              source: "",
              place: "",
              times: "",
              dette: false,
            }}
            onSubmit={submitForm}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="!space-y-5">
                  <div>
                    <Input.LongText
                      name="description"
                      label="Raconter votre dernier rêve sur la finance"
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
                      options={sources}
                      name="source"
                      label="Selectionner le source de l'argent ?"
                    />
                  </div>
                  <div>
                    <Input.Select
                      options={places}
                      name="place"
                      label="Un endroit en particulier ?"
                    />
                  </div>
                  <div>
                    <Input.ShortText
                      label="A combien estimer la somme d'argent"
                      name="times"
                    />
                  </div>
                  <div>
                    <Input.Bool
                      name="dette"
                      label="Etes-vous endettés actuellement ? "
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="btn btn-primary"
                      ref={formRef}
                      type="submit"
                      hidden
                    >
                      test
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </VideoCreateConfigurationLayout>
      </div>
    </div>
  )
}

export default FinanceTemplate
