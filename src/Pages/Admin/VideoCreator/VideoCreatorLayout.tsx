import React, { useEffect, useState } from "react"
import * as templateData from "./TemplateData"
import { Template } from "./TemplateData"
import { TemplateItem } from "./TemplateItem"
import { VideoType } from "./Video.type"
import { useParams } from "react-router-dom"
import { strapiService } from "../../../api/strapiService"
import { renderData } from "./RenderData"

// TODO add a big remotra mampatahotra animation before display page
const VideoCreatorLayout = () => {
  const { id } = useParams()
  const [video, setVideo] = useState<VideoType | null>(null)
  const [isStudioLoading, setIsStudioLoading] = useState<boolean>(false)
  const [name, setName] = useState("Projet sans nom 3")
  const [videoStatus, setVideoStatus] = useState<String>("")
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(
    templateData.data[0]
  )
  const [downUrl, setDownUrl] = useState<string | null>(null)
  useEffect(() => {}, [selectedTemplate])

  useEffect(() => {
    const fetchVideo = async () => {
      setIsStudioLoading(true)
      const { data } = await strapiService.findOne<VideoType>(
        "videos",
        Number(id)
      )
      setVideo(data)
      setVideoStatus(data.status)
      // await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsStudioLoading(false)
    }

    // fetchVideo()
  }, [])

  const switchTemplate = (item: Template) => {
    // add timeout to show loading
    setSelectedTemplate(item)
  }

  /**
   *  [x] check if there is  files so we have to upload first
   *  [x] if upload, change video status to UPLOADING
   *  [x] if UPLOADING, we should wait before re-exporting
   *  [x] after UPLOADING, send the export the video API call
   * @param video
   */
  const exportTemplate = async (videoType: VideoType) => {
    // const keys = Object.keys(videoType.files as Object)

    // for (let key of keys) {
    //   //@ts-ignore
    //   if (videoType.files[key] === null) {
    //     continue
    //   }
    //   setVideoStatus("UPLOADING")
    //   console.log("UPLOAD STARTING.........")
    //   //@ts-ignore
    //   const newFileName = `${uuid()}.${{ audio: "mp3", video: "mp4" }[key]}`
    //   //@ts-ignore
    //   await uploadS3(videoType.files[key], newFileName)
    //   // let metaKey = key === "audio" ? "music" : "video"
    //   const Location = `https://remotionlambda-webcup.s3.amazonaws.com/${newFileName}`
    //   let metaKey = key
    //   if (metaKey === "audio") metaKey = "music"
    //   console.log(`uploaded ${metaKey} ${Location} `)
    //   videoType.inputProps = {
    //     ...videoType.inputProps,
    //     [metaKey]: Location,
    //   }
    // }
    console.log("EXPORT STARTING.........", videoType.inputProps.idRender)
    // await fetch(`${BASE_URL}/remotion/export`, {
    //   method: "POST",
    //   body: JSON.stringify(videoType),
    // })
    //   .then((res) => {
    //     // EVEN THIS PROMISE IS RESOLVED, THE EXPORT IS NOT FINISHED YET
    //     setVideoStatus("EXPORTING")
    //   })
    //   .catch((e) => {
    //     console.log("misy err", e)
    //   })
    setVideoStatus("EXPORTING")
    const idRender = videoType.inputProps.idRender
    const finaleVideo = renderData.find((r) => r.id === idRender)
    setTimeout(() => {
      setVideoStatus("DONE")
      setDownUrl(finaleVideo!!.video)
    }, 5000)

    console.log("my finale video", finaleVideo)
  }

  const handleExportDone = () => {
    setVideoStatus("DONE")
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-6 gap-4 mt-5">
      {isStudioLoading && (
        <div
          style={{
            backgroundColor: "red",
            width: "100%",
            height: "100vh",
            position: "absolute",
            top: 0,
            zIndex: 999,
            overflow: "hidden",
          }}
        >
          <p>
            Preparation du studio | Chargement des asssets (tokony atao anle
            otrany soratra miovaova reny)
          </p>
          <p>Misy loading</p>
        </div>
      )}

      <div className="col-span-1 space-y-3">
        {/*<div>*/}
        {/*  <div className="font-extrabold leading-none tracking-wide sm:text-xl text-2xl text-primary">*/}
        {/*    Nom de votre projet{" "}*/}
        {/*  </div>*/}
        {/*  <input*/}
        {/*    className="input-floating border-current/50 focus:border-current !text-current peer "*/}
        {/*    value={video?.name}*/}
        {/*    onChange={({ target: { value } }) => setName(value)}*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="text-2xl font-app text-secondary text-center sm:text-left mb-10">
          Choisir un type de rêve
        </div>
        <div className="space-y-3 templateList">
          {templateData.data.map((template: Template) => (
            <TemplateItem
              key={template.title}
              item={template}
              onSelect={() => switchTemplate(template)}
              isActive={selectedTemplate.title === template.title}
            />
          ))}
        </div>
      </div>
      <div className="col-span-1 lg:col-span-5 space-y-3">
        {selectedTemplate.template({
          onExport: exportTemplate,
          video: video,
          videoStatus: videoStatus,
          onExportDone: handleExportDone,
          downUrl: downUrl,
          watermark: selectedTemplate.image,
        })}
      </div>
    </div>
  )
}

export default VideoCreatorLayout
