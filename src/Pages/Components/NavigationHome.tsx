import { Link, useLocation, useMatch } from "react-router-dom"
import UserIcon from "./Icons/UserIcon"
import LangChanger from "./LangChanger"
import ThemeChanger from "./ThemeChanger"
import { useTranslation } from "react-i18next"
import LogoSVG from "./svg/LogoSVG"
import { useEffect, useState } from "react"
import ThemeChangerV2 from "./ThemeChangerV2"

function ActiveNavigation({ to, children }: any) {
  const match = useMatch(to)
  return (
    <Link
      to={to}
      className={
        match
          ? "space-y-1 duration-75 font-bold text-black stroke-black fill-black"
          : "space-y-1 text-white stroke-white fill-white hover:text-black hover:stroke-black hover:fill-black duration-75"
      }
    >
      {children}
    </Link>
  )
}

function NavDesktop() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [labelWorld, setLabelWorld] = useState("Wolrd")
  const location = useLocation()

  useEffect(() => {
    const updateScrollPosition = () => {
      const totalScrollHeight = document.documentElement.scrollHeight
      const currentScrollY = window.scrollY
      // ! à voir (methode de calcul)
      const percentage =
        (currentScrollY /
          (totalScrollHeight - (30 * totalScrollHeight) / 100)) *
        100
      setScrollPercentage(percentage)
      const nav = document.getElementById("nav") as any
      const navLogo = document.getElementById("nav-logo") as any
      const navMenu = document.getElementById("nav-menu") as any
      const navOption = document.getElementById("nav-option") as any
      if (currentScrollY > 100) {
        nav.classList.add("bg-primary", "shadow-lg", "px-[5%]")
        navLogo.classList.add("scale-75")
        navMenu.classList.add("scale-[80%]")
        navOption.classList.add("scale-[80%]")
        nav.classList.remove("p-4")
      } else {
        nav.classList.add("p-4")
        location.pathname === "/"
          ? nav.classList.remove("bg-primary", "shadow-lg", "px-[5%]")
          : nav.classList.remove("shadow-lg", "px-[5%]")
        navLogo.classList.remove("scale-75")
        navMenu.classList.remove("scale-[80%]")
        navOption.classList.remove("scale-[80%]")
      }
    }
    switch (location.pathname) {
      case "/world/tps":
        setLabelWorld("Arcade")
        break
      case "/world/visit360":
        setLabelWorld("360")
        break
      default:
        setLabelWorld("World")
        break
    }
    window.addEventListener("scroll", updateScrollPosition)
    if (location.pathname === "/") {
      document.getElementById("nav")?.classList.remove("bg-primary")
    } else {
      document.getElementById("nav")?.classList.add("bg-primary")
    }
    return () => {
      window.removeEventListener("scroll", updateScrollPosition)
    }
  }, [location])

  const { t } = useTranslation()

  return (
    <div id="nav" className="grid grid-cols-3 p-4 duration-500">
      <div className="flex items-center mt-5">
        <div id="nav-logo" className="duration-150">
          <LogoSVG />
        </div>
      </div>
      <div
        id="nav-menu"
        className="flex items-center justify-between duration-500"
      >
        <ActiveNavigation to="/">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="text-center">{t("Home")}</div>
        </ActiveNavigation>
        <ActiveNavigation to="/whiteboard">
          <div className="flex justify-center">
            <svg className="w-8" viewBox="0 0 512 512">
              <path
                d="M489.4,64.386V24.145h-24.145h-185.11V0h-48.29v24.145H46.745H22.6v40.241h24.145v249.496H22.6v40.241h24.145
		h418.51H489.4v-40.241h-24.145V64.386H489.4z M78.938,313.882V64.386h354.124v249.496H78.938z"
              />
              <path
                d="M333.802,459.686c-0.77,0-1.501,0.165-2.256,0.228l-58.429-61.234l-0.503-0.008l0.503-0.692h-1.021v-35.808
		h-32.193v37.223l-59.882,60.472c-0.614-0.039-1.203-0.181-1.824-0.181c-14.446,0-26.157,11.711-26.157,26.157
		c0,14.446,11.711,26.157,26.157,26.157c14.446,0,26.157-11.71,26.157-26.157c0-4.102-1.029-7.93-2.711-11.38l55.009-53.736
		l53.509,54.09c-1.572,3.364-2.515,7.074-2.515,11.027c0,14.446,11.711,26.157,26.157,26.157c14.446,0,26.157-11.71,26.157-26.157
		C359.959,471.397,348.248,459.686,333.802,459.686z"
              />
            </svg>
          </div>
          <div className="text-center">Dreamboard</div>
        </ActiveNavigation>
        <ActiveNavigation to="/city">
          <div className="flex justify-center">
            <svg className="w-8" viewBox="0 0 50 50">
              <path d="M15 5 A 1.0001 1.0001 0 0 0 14 6L14 25L7 25 A 1.0001 1.0001 0 0 0 6 26L6 29.716797L0.048828125 43.605469 A 1.0001 1.0001 0 0 0 0.96679688 45L49.140625 45 A 1.0001 1.0001 0 0 0 50.046875 43.576172L44 30.621094L44 22 A 1.0001 1.0001 0 0 0 43 21L37 21L37 14 A 1.0001 1.0001 0 0 0 36 13L29 13L29 6 A 1.0001 1.0001 0 0 0 28 5L15 5 z M 16 7L27 7L27 13L23 13 A 1.0001 1.0001 0 0 0 22 14L22 25L16 25L16 7 z M 18 9L18 11L20 11L20 9L18 9 z M 23 9L23 11L25 11L25 9L23 9 z M 18 13L18 15L20 15L20 13L18 13 z M 24 15L35 15L35 21L31 21 A 1.0001 1.0001 0 0 0 30 22L30 39L24 39L24 26L24 15 z M 18 17L18 19L20 19L20 17L18 17 z M 26 17L26 19L28 19L28 17L26 17 z M 31 17L31 19L33 19L33 17L31 17 z M 18 21L18 23L20 23L20 21L18 21 z M 26 21L26 23L28 23L28 21L26 21 z M 32 23L42 23L42 39L34 39L32 39L32 23 z M 26 25L26 27L28 27L28 25L26 25 z M 34 25L34 27L36 27L36 25L34 25 z M 38 25L38 27L40 27L40 25L38 25 z M 8 27L22 27L22 39L8 39L8 27 z M 10 29L10 31L12 31L12 29L10 29 z M 14 29L14 31L16 31L16 29L14 29 z M 18 29L18 31L20 31L20 29L18 29 z M 26 29L26 31L28 31L28 29L26 29 z M 34 29L34 31L36 31L36 29L34 29 z M 38 29L38 31L40 31L40 29L38 29 z M 10 33L10 35L12 35L12 33L10 33 z M 14 33L14 35L16 35L16 33L14 33 z M 18 33L18 35L20 35L20 33L18 33 z M 26 33L26 35L28 35L28 33L26 33 z M 34 33L34 35L36 35L36 33L34 33 z M 38 33L38 35L40 35L40 33L38 33 z M 6 34.796875L6 40 A 1.0001 1.0001 0 0 0 7 41L23 41L34 41L43 41 A 1.0001 1.0001 0 0 0 44 40L44 35.349609L47.570312 43L2.484375 43L6 34.796875 z" />
            </svg>
          </div>
          <div className="text-center">{t("city")}</div>
        </ActiveNavigation>
        <ActiveNavigation to="/world">
          <div className="flex justify-center">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.7}
              stroke="currentColor"
              className={
                location.pathname === "/world/tps" ||
                location.pathname === "/world/visit360"
                  ? "text-black w-8"
                  : "w-8 "
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
          </div>
          <div
            className={
              location.pathname === "/world/tps" ||
              location.pathname === "/world/visit360"
                ? "text-black text-center font-bold"
                : "text-center"
            }
          >
            {labelWorld}
          </div>
        </ActiveNavigation>
        <ActiveNavigation to="/mydiapo">
          <div className="flex justify-center">
            <svg className="w-8" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-center">DreamStudio</div>
        </ActiveNavigation>
      </div>
      <div id="nav-option" className="duration-500 flex justify-end">
        <div className="flex items-center gap-4 bg-current px-8 rounded-full">
          <div className="flex items-center gap-2">
            <LangChanger />
            <ThemeChanger />
          </div>
          <Link to="/login">
            <UserIcon />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-40 w-full">
        <div className="w-full h-1">
          <div
            className="absolute left-0 top-0 h-[100%] bg-secondary"
            style={{ width: `${scrollPercentage.toFixed(2)}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}

function NavMobile() {
  const { t } = useTranslation()

  return (
    <div className="bg-primary py-5 px-3 space-y-5">
      {/* heading */}
      <div className="flex items-center justify-between">
        {/* app name */}
        <div className="flex justify-center translate-y-2">
          <LogoSVG />
        </div>
        {/* settings */}
        <div className="flex gap-2 items-center bg-current px-4 py-2 rounded-full">
          <div>
            <LangChanger isHome="true" />
          </div>
          <div>
            <ThemeChanger isHome="true" />
          </div>
          <div>
            <Link to="/login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 text-base-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-2/3" />
      </div>
      {/* navs */}
      <div className="flex justify-between items-center gap-3 px-5">
        <ActiveNavigation to="/">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div className="text-sm text-center">{t("Home")}</div>
        </ActiveNavigation>
        <ActiveNavigation to="/whiteboard">
          <div className="flex justify-center">
            <svg className="w-6" viewBox="0 0 512 512">
              <path
                d="M489.4,64.386V24.145h-24.145h-185.11V0h-48.29v24.145H46.745H22.6v40.241h24.145v249.496H22.6v40.241h24.145
		h418.51H489.4v-40.241h-24.145V64.386H489.4z M78.938,313.882V64.386h354.124v249.496H78.938z"
              />
              <path
                d="M333.802,459.686c-0.77,0-1.501,0.165-2.256,0.228l-58.429-61.234l-0.503-0.008l0.503-0.692h-1.021v-35.808
		h-32.193v37.223l-59.882,60.472c-0.614-0.039-1.203-0.181-1.824-0.181c-14.446,0-26.157,11.711-26.157,26.157
		c0,14.446,11.711,26.157,26.157,26.157c14.446,0,26.157-11.71,26.157-26.157c0-4.102-1.029-7.93-2.711-11.38l55.009-53.736
		l53.509,54.09c-1.572,3.364-2.515,7.074-2.515,11.027c0,14.446,11.711,26.157,26.157,26.157c14.446,0,26.157-11.71,26.157-26.157
		C359.959,471.397,348.248,459.686,333.802,459.686z"
              />
            </svg>
          </div>
          <div className="text-sm text-center">Dreamboard</div>
        </ActiveNavigation>
        <ActiveNavigation to="/city">
          <div className="flex justify-center">
            <svg className="w-6" viewBox="0 0 50 50">
              <path d="M15 5 A 1.0001 1.0001 0 0 0 14 6L14 25L7 25 A 1.0001 1.0001 0 0 0 6 26L6 29.716797L0.048828125 43.605469 A 1.0001 1.0001 0 0 0 0.96679688 45L49.140625 45 A 1.0001 1.0001 0 0 0 50.046875 43.576172L44 30.621094L44 22 A 1.0001 1.0001 0 0 0 43 21L37 21L37 14 A 1.0001 1.0001 0 0 0 36 13L29 13L29 6 A 1.0001 1.0001 0 0 0 28 5L15 5 z M 16 7L27 7L27 13L23 13 A 1.0001 1.0001 0 0 0 22 14L22 25L16 25L16 7 z M 18 9L18 11L20 11L20 9L18 9 z M 23 9L23 11L25 11L25 9L23 9 z M 18 13L18 15L20 15L20 13L18 13 z M 24 15L35 15L35 21L31 21 A 1.0001 1.0001 0 0 0 30 22L30 39L24 39L24 26L24 15 z M 18 17L18 19L20 19L20 17L18 17 z M 26 17L26 19L28 19L28 17L26 17 z M 31 17L31 19L33 19L33 17L31 17 z M 18 21L18 23L20 23L20 21L18 21 z M 26 21L26 23L28 23L28 21L26 21 z M 32 23L42 23L42 39L34 39L32 39L32 23 z M 26 25L26 27L28 27L28 25L26 25 z M 34 25L34 27L36 27L36 25L34 25 z M 38 25L38 27L40 27L40 25L38 25 z M 8 27L22 27L22 39L8 39L8 27 z M 10 29L10 31L12 31L12 29L10 29 z M 14 29L14 31L16 31L16 29L14 29 z M 18 29L18 31L20 31L20 29L18 29 z M 26 29L26 31L28 31L28 29L26 29 z M 34 29L34 31L36 31L36 29L34 29 z M 38 29L38 31L40 31L40 29L38 29 z M 10 33L10 35L12 35L12 33L10 33 z M 14 33L14 35L16 35L16 33L14 33 z M 18 33L18 35L20 35L20 33L18 33 z M 26 33L26 35L28 35L28 33L26 33 z M 34 33L34 35L36 35L36 33L34 33 z M 38 33L38 35L40 35L40 33L38 33 z M 6 34.796875L6 40 A 1.0001 1.0001 0 0 0 7 41L23 41L34 41L43 41 A 1.0001 1.0001 0 0 0 44 40L44 35.349609L47.570312 43L2.484375 43L6 34.796875 z" />
            </svg>
          </div>
          <div className="text-sm text-center">{t("city")}</div>
        </ActiveNavigation>
        <ActiveNavigation to="/tps">
          <div className="flex justify-center">
            <svg className="w-6" viewBox="0 0 24 24">
              <path d="M22.75,13v7.81a2,2,0,0,1-2,2H14.93l-1.41-2.12A1.82,1.82,0,0,0,12,19.82h0a1.82,1.82,0,0,0-1.52.81L9.07,22.75H3.21a2,2,0,0,1-2-2V13a2,2,0,0,1,2-2H20.79A2,2,0,0,1,22.75,13Z" />
              <path d="M12,1.25h0A9.77,9.77,0,0,1,21.77,11v0a0,0,0,0,1,0,0H2.23a0,0,0,0,1,0,0v0A9.77,9.77,0,0,1,12,1.25Z" />
              <line x1="12" y1="2.23" x2="12" y2="11.02" />
              <circle cx="6.14" cy="16.89" r="0.98" />
              <circle cx="17.86" cy="16.89" r="0.98" />
            </svg>
          </div>
          <div className="text-sm text-center">{t("tps")}</div>
        </ActiveNavigation>
        <ActiveNavigation to="/mydiapo">
          <div className="flex justify-center">
            <svg className="w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-sm text-center">DreamStudio</div>
        </ActiveNavigation>
      </div>
    </div>
  )
}

function NavigationHome() {
  return (
    <div>
      {/* for desktop */}
      <div className="hidden lg:block">
        <NavDesktop />
      </div>
      {/* for mobile */}
      <div className="sm:hidden md:block lg:hidden">
        <NavMobile />
      </div>
    </div>
  )
}

export default NavigationHome
