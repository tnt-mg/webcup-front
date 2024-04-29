import { useEffect, useState } from "react"
import { PaletteIcon } from "./Icons/PaletteIcon"
import { useTranslation } from "react-i18next"
import useSound from "use-sound"
import lightSong from "/sounds/light.mp3"
import darkSong from "/sounds/dark.mp3"
import { confetti } from "tsparticles-confetti"

function ThemeChanger({ isAdmin, isHome }: any) {
  // * sounds
  const [playSoundLight] = useSound(lightSong)
  const [playSoundDark] = useSound(darkSong)

  // * confetti
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  }

  const lightConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 3,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["☀️", "🔥", "🌈", "🌞", "🌟", "⭐️"],
        },
      },
    })
  }

  const darkConfetti = () => {
    confetti({
      ...defaults,
      particleCount: 30,
      scalar: 3,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["🌃", "🌙", "🌠", "⚡️", "🌑", "🌘"],
        },
      },
    })
  }
  const lightShoot = () => {
    setTimeout(lightConfetti, 0)
    setTimeout(lightConfetti, 100)
    setTimeout(lightConfetti, 200)
  }

  const darkShoot = () => {
    setTimeout(darkConfetti, 0)
    setTimeout(darkConfetti, 100)
    setTimeout(darkConfetti, 200)
  }

  const { t } = useTranslation()
  const [theme_value, setThemeCurrent] = useState(localStorage.getItem("theme"))

  useEffect(() => {
    if (localStorage.getItem("theme") != null) {
      document
        .getElementById("app")!
        .setAttribute("data-theme", localStorage.getItem("theme") as any)
      window.dispatchEvent(new Event("themeChanged"))
    } else {
      localStorage.setItem("theme", "light")
      document.getElementById("app")!.setAttribute("data-theme", "light")
      window.dispatchEvent(new Event("themeChanged"))
    }
  }, [])

  function HandleTheme(theme: any) {
    // * handle sound
    switch (theme) {
      case "light":
        playSoundLight()
        lightShoot()
        break
      case "night":
        playSoundDark()
        darkShoot()
        break

      default:
        break
    }

    // * theme changer
    document.getElementById("app")!.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
    setThemeCurrent(theme)
    window.dispatchEvent(new Event("themeChanged"))
  }

  useEffect(() => {
    function onThemeChanged() {
      setThemeCurrent(localStorage.getItem("theme"))
    }
    window.addEventListener("themeChanged", onThemeChanged)
    return () => window.removeEventListener("themeChanged", onThemeChanged)
  }, [])

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
              <PaletteIcon />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 pb-6 shadow bg-base-100 rounded-box w-52"
            >
              <div className="font-asap-bold absolute bottom-2 right-5 text-[11px] opacity-70">
                {t("Theme")}
              </div>
              <li onClick={() => HandleTheme("light")}>
                <a className="flex justify-between">
                  <span
                    className={theme_value === "light" ? "text-secondary" : ""}
                  >
                    Let the light be
                  </span>
                  {theme_value === "light" && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 text-secondary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    </span>
                  )}
                </a>
              </li>
              <li onClick={() => HandleTheme("night")}>
                <a className="flex justify-between">
                  <span
                    className={theme_value === "night" ? "text-secondary" : ""}
                  >
                    Night fall
                  </span>
                  {theme_value === "night" && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 text-secondary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    </span>
                  )}
                </a>
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
            <label tabIndex={0} className="">
              <svg
                className={
                  isHome != null ? "w-6 stroke-base-100" : "w-6 stroke-current"
                }
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M10 4.5V18C10 19.08 9.55999 20.07 8.85999 20.79L8.82001 20.83C8.73001 20.92 8.63001 21.01 8.54001 21.08C8.24001 21.34 7.89999 21.54 7.54999 21.68C7.43999 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46001 21.97 5.20001 21.92C5.07001 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.50001 21.72 4.35001 21.65C4.35001 21.64 4.35 21.64 4.34 21.65C4.06 21.51 3.79001 21.35 3.54001 21.16L3.53 21.15C3.4 21.05 3.28001 20.95 3.17001 20.83C3.06001 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49001 19.94 2.35001 19.66C2.36001 19.65 2.36001 19.65 2.35001 19.65C2.35001 19.65 2.35 19.64 2.34 19.63C2.28 19.49 2.22999 19.34 2.17999 19.19C2.13999 19.06 2.10999 18.93 2.07999 18.8C2.02999 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.81 21.8199C4.21 21.6399 3.64001 21.3099 3.17001 20.8299C2.69001 20.3599 2.35999 19.7899 2.17999 19.1899C2.56999 20.4399 3.56 21.4299 4.81 21.8199Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.37 11.2899L15.66 14L8.85999 20.7899C9.55999 20.0699 10 19.08 10 18V8.33995L12.71 5.62996C13.77 4.56996 15.19 4.56996 16.25 5.62996L18.37 7.74996C19.43 8.80996 19.43 10.2299 18.37 11.2899Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content p-3 space-y-3 shadow bg-base-100 rounded-box w-32"
            >
              <div className="text-center text-xs">{t("Theme")}</div>
              <hr className="" />
              <li onClick={() => HandleTheme("light")}>
                <a className="flex items-center justify-between text-xs">
                  <span
                    className={
                      localStorage.getItem("theme") === "light"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    Let the light be
                  </span>
                  {localStorage.getItem("theme") === "light" && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 text-secondary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                      </svg>
                    </span>
                  )}
                </a>
              </li>
              <li onClick={() => HandleTheme("night")}>
                <a className="flex items-center justify-between text-xs">
                  <span
                    className={
                      localStorage.getItem("theme") === "night"
                        ? "text-secondary"
                        : ""
                    }
                  >
                    Night fall
                  </span>
                  {localStorage.getItem("theme") === "night" && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 text-secondary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                      </svg>
                    </span>
                  )}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeChanger
