import React, { useEffect, useState } from "react"
import { VideoType } from "./Video.type"
import { UploadIcon } from "../../Components/Icons/UploadIcon"
import { DropBoxUploader } from "../../Components/upload/DropBoxUploader"
import { MusicIcon } from "../../Components/Icons/MusicIcon"
import introJs from "intro.js"
import { tutoStudioVideo } from "../../../utils/tuto"
interface VideoConfigurationProps {
  children: React.ReactNode
  onWatermarkAdded: (file: File) => void
  onMusicAdded: (file: File) => void
  onExport: () => void
}
const VideoCreateConfigurationLayout: React.FC<VideoConfigurationProps> = ({
  children,
  onMusicAdded,
  onWatermarkAdded,
  onExport,
}) => {
  const [music, setMusic] = useState<String>("")
  const [watermark, setWatermark] = useState("")
  const handleMusicChange = (file: File) => {
    onMusicAdded(file)
    setMusic(file.name)
  }
  const handleWatermarkChange = (file: File) => {
    onWatermarkAdded(file)
    setWatermark(file.name)
  }
  const handleExport = async () => {
    onExport()
  }

  useEffect(() => {
    introJs().setOptions({
      nextLabel: " Suivant ",
      prevLabel: " Précédent ",
      doneLabel: " Terminer ",
      dontShowAgain: true, // TODO MILA ACTIVENA AMINY FARANY
      showBullets: false,
      steps: [
        {
          title: "Bienvenue sur Studio",
          intro:
            "Laissez-nous vous faire explorer notre Studio par ses fonctionnalités et surtout sa prise en main très facile 👋",
        },
        {
          title: "Template",
          intro:
            "Nous avons préparé des templates près à utiliser, il y un large choix selon votre convenance",
          element: document.querySelector(".templateList"),
        },
        {
          title: "Choix d'un template",
          intro:
            "Sélectionner le template qui vous semble convenir à votre vidéo finale.",
          element: document.querySelector(".template"),
        },
        {
          title: "Configuration",
          intro:
            "Le template est configurable avec plusieurs options sur cette rubrique. Vous pouvez entre autre: " +
            "<ul>" +
            "<li> ajouter un watermark </li>" +
            "<li> ajouter une musique de fond </li>" +
            "<li> changer des textes sur la vidéo </li>" +
            "<li> et encore beaucoup d'autres options que proposent le template en question </li>" +
            "</ul>",
          element: document.querySelector(".templateConfiguration"),
        },
        {
          title: "Prévisualisation",
          intro: "Vous pouvez suivre en temps réel toutes vos configurations",
          element: document.querySelector(".templatePlayer"),
        },
        {
          title: "Export",
          intro:
            "Etes-vous satisfaits de votre travail, il est temps d'exporter votre video et de le partager à vos proches",
          element: document.querySelector(".templateExport"),
        },
      ],
    })
    // .start() //TODO Tsy adino miactive azy
  }, [])
  return (
    <div className="space-y-3 mt-5 templateConfiguration">
      <div className="flex justify-center items-center templateExport">
        <button className="btn btn-primary btn-sm" onClick={handleExport}>
          Exporter{" "}
        </button>
      </div>
      {/*TODO hicreer Tabs (Configuration / Bibliotheques)*/}
      <h1 className="mb-5">Configuration / Bibliothèque</h1>
      <div>
        <div className="flex items-center justify-center w-full">
          <DropBoxUploader
            accept="image/*"
            label="Ajouter un watermark"
            icon={<UploadIcon />}
            onDrop={handleWatermarkChange}
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full">
        <DropBoxUploader
          accept="audio/*"
          label="Ajouter une musique de fond"
          icon={<MusicIcon />}
          onDrop={handleMusicChange}
        />
      </div>

      <hr className="mt-3" />

      <div className="pb-5">
        <div className="text-center">Autres</div>
        {children}
      </div>
    </div>
  )
}

export default VideoCreateConfigurationLayout
