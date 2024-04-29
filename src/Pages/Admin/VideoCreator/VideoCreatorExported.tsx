import { useNavigate } from "react-router-dom"
import { useEffect, useState, Suspense, useCallback } from "react"
import { strapiService } from "../../../api/strapiService"
import { VideoType } from "./Video.type"
import { VideoItem } from "./VideoItem"
import * as templateData from "./TemplateData"
import { useTranslation } from "react-i18next"

//TODO add animation before going to studio
const VideoCreatorExported = () => {
  const { t } = useTranslation()
  const [videos, setVideos] = useState<Array<VideoType>>([])
  const navigate = useNavigate()

  const fetchVideos = useCallback(async () => {
    const { data } = await strapiService.find<Array<VideoType>>("videos")
    setVideos(data)
  }, [])
  useEffect(() => {
    fetchVideos()
  }, [])

  // TODO add little animation before changing page
  const createProjetAndGoTo = async () => {
    const n = videos.length + 2
    const video: VideoType = {
      name: `Projet Sans Titre (${n})`,
      templateName: templateData.data[0].title,
      status: "CREATED",
      metadata: {},
    }
    navigate(`/admin/record`)
  }
  return (
    <div className="space-y-5 py-20 sm:py-0" data-intro="salutttt">
      <div className="space-y-10">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-app">{t("listall")}</h1>
          </div>
          <div>
            <button onClick={createProjetAndGoTo} className="btn btn-primary">
              Enregistrer votre rêve à partir d'une vidéo
            </button>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap">
          <Suspense fallback="loading ...">
            {videos.map((video) => (
              <VideoItem item={video} key={video.id} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default VideoCreatorExported
