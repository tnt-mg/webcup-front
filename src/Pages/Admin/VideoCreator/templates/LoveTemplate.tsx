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
  { value: 0, label: "Célibataire" },
  { value: 1, label: "Engagé" },
  { value: 2, label: "Marié" },
  { value: 3, label: "Veuf" },
  { value: 4, label: "En couple" },
]

export const places = [
  { label: "Filles", value: 0 },
  { label: "Garcons", value: 1 },
  { label: "Garçons et Filles", value: 2 },
  { label: "Jumeaux", value: 3 },
  { label: "Jumelles du Nord", value: 4 },
  { label: "Aucun", value: 4 },
]

//TODO allow download when status is done
const LoveTemplate: React.FC<TrailerTemplateProps> = ({
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

    const travels = dreamData.filter((d) => d.topic == "Amour")

    let responses: DreamType[] = []
    let year = 2024
    const note = Number(place) + Number(source)

    responses.push({ year, ...travels.filter((t) => t.index == 2)[0] })
    responses.push({
      year: year + 1,
      ...travels.filter((t) => t.index == 1)[0],
    })
    responses.push({
      year: year + 2,
      ...travels.filter((t) => t.index == 3)[0],
    })
    responses.push({
      year: year + 3,
      ...travels.filter((t) => t.index == 2)[0],
    })

    console.log(responses)
    onExport({
      // ...video,
      inputProps: {
        idRender: 2,
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
            projectName: "Amour",
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

      <div className="gap-3 col-span-1 mr-2 px-5">
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
                <div>
                  <Input.LongText
                    name="description"
                    label="Raconter votre dernier rêve sur le métier"
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
                    label="Votre situation matrimoniale ?"
                  />
                </div>
                <div>
                  <Input.Select
                    options={places}
                    name="place"
                    label="Avez-vous eu d'enfants pendant ce rêve"
                  />
                </div>
                <div>
                  <Input.ShortText
                    label="Combien de personnes fois avez-vous eu ce genre de rêve"
                    name="times"
                  />
                </div>
                <div>
                  <Input.Bool
                    name="dette"
                    label="Etiez-vous heureux pendant le rêve? "
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

export default LoveTemplate
