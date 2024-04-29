import React from "react"
import VideoCreatorLayout from "../Admin/VideoCreator/VideoCreatorLayout"
import { useTranslation } from "react-i18next"

const MyDiapo = () => {
  const { t } = useTranslation()
  return (
    <div className="px-[5%]">
      <div>
        <h1 className="font-app text-3xl sm:text-5xl text-primary text-center sm:text-left">
          {t("predi")} <span className="text-secondary">{t("avenir")}</span>{" "}
          {t("studi")}
        </h1>
      </div>
      <div>
        <VideoCreatorLayout />
      </div>
    </div>
  )
}

export default MyDiapo
