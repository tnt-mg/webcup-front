import { forwardRef } from "react"
import { useTranslation } from "react-i18next"
const Overlay = forwardRef((props: any, ref: any) => {
  const { t } = useTranslation()
  return (
    <div ref={ref} {...props}>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1 className="font-app text-3xl sm:text-7xl !text-info">
            IA Onirix
          </h1>
          <p className="text-xl text-current">{t("onirix")} </p>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1 className="font-app text-3xl sm:text-7xl !text-info">
            {t("institution")}
          </h1>
          <p className="text-2xl text-current">
            {t("institution_description")}
          </p>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1 className="font-app text-3xl sm:text-7xl !text-info">
            Localisation
          </h1>
          <p className="text-xl text-current">{t("localisation")}</p>
        </div>
      </div>
      <div style={{ height: "200vh" }}>
        <div className="dot">
          <h1 className="font-app text-3xl sm:text-7xl !text-info">
            {t("fondator")}
          </h1>
          <p className="text-xl text-current">{t("desc_foundator")}</p>
        </div>
      </div>
    </div>
  )
})

export default Overlay
