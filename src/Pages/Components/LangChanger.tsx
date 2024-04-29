import LangIcon from "./Icons/LangIcon"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

function LangChanger({ isAdmin, isHome }: any) {
  const [trad, setTrad] = useState(localStorage.getItem("trad"))
  const { t, i18n } = useTranslation()
  useEffect(() => {
    if (localStorage.getItem("trad") === null) {
      localStorage.setItem("trad", "fr")
    } else {
      localStorage.setItem("trad", localStorage.getItem("trad") as any)
    }
  }, [])

  useEffect(() => {
    if (trad) {
      i18n.changeLanguage(trad)
    }
  }, [trad])

  function handleLang(lang: any) {
    localStorage.setItem("trad", lang)
    setTrad(lang)
  }
  return (
    <div>
      {/* For desktop */}
      <div className="hidden sm:block">
        <div className="flex items-center">
          <div
            className={
              isAdmin != null
                ? "dropdown dropdown-right dropdown-bottom"
                : "dropdown dropdown-end"
            }
          >
            <label
              tabIndex={0}
              className="flex items-center cursor-pointer hover:scale-125 duration-100"
            >
              <LangIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 pb-6 shadow bg-base-100 rounded-box w-52"
            >
              <div className="font-asap-bold absolute bottom-2 right-5 text-[11px] opacity-70">
                {t("Lang")}
              </div>

              <li onClick={() => handleLang("en")}>
                <div className="flex justify-between">
                  <span
                    className={
                      localStorage.getItem("trad") === "en"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    {t("en")}
                  </span>
                  <div className="w-full flex justify-end">
                    <img
                      className={
                        localStorage.getItem("trad") === "en"
                          ? "w-5 grayscale-0 duration-200"
                          : "w-5 grayscale duration-200"
                      }
                      src="https://img.icons8.com/color/48/null/great-britain.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li onClick={() => handleLang("fr")}>
                <div className="flex justify-between">
                  <span
                    className={
                      localStorage.getItem("trad") === "fr"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    {t("fr")}
                  </span>
                  <div className="w-full flex justify-end">
                    <img
                      className={
                        localStorage.getItem("trad") === "fr"
                          ? "w-5 grayscale-0 duration-200"
                          : "w-5 grayscale duration-200"
                      }
                      src="https://img.icons8.com/color/48/null/france.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li onClick={() => handleLang("mg")}>
                <div className="flex justify-between">
                  <span
                    className={
                      localStorage.getItem("trad") === "mg"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    {t("mg")}
                  </span>
                  <div className="w-full flex justify-end">
                    <img
                      className={
                        localStorage.getItem("trad") === "mg"
                          ? "w-5 grayscale-0 duration-200"
                          : "w-5 grayscale duration-200"
                      }
                      src="https://img.icons8.com/color/48/null/madagascar.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* For mobile */}
      <div className="sm:hidden block">
        <div className="flex items-center">
          <div
            className={
              isHome != null
                ? "dropdown dropdown-bottom dropdown-end"
                : "dropdown dropdown-top dropdown-end"
            }
          >
            <label
              tabIndex={0}
              className="flex items-center cursor-pointer hover:scale-125 duration-100"
            >
              <LangIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
            >
              <div className="text-center text-xs mb-2">{t("Lang")}</div>
              <hr className="pb-1" />
              <li onClick={() => setTrad("en")}>
                <div className="flex justify-between text-xs">
                  <span
                    className={
                      localStorage.getItem("trad") === "en"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    {t("en")}
                  </span>
                  <div className="w-full flex justify-end">
                    <img
                      className="w-5"
                      src="https://img.icons8.com/color/48/null/great-britain.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li onClick={() => setTrad("fr")}>
                <div className="flex justify-between text-xs">
                  <span
                    className={
                      localStorage.getItem("trad") === "fr"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    {t("fr")}
                  </span>
                  <div className="w-full flex justify-end">
                    <img
                      className="w-5"
                      src="https://img.icons8.com/color/48/null/france.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
              <li onClick={() => setTrad("mg")}>
                <div className="flex justify-between text-xs">
                  <span
                    className={
                      localStorage.getItem("trad") === "mg"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    {t("mg")}
                  </span>
                  <div className="w-full flex justify-end">
                    <img
                      className="w-5"
                      src="https://img.icons8.com/color/48/null/madagascar.png"
                      alt=""
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LangChanger
