import { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom"
import FooterHome from "./Pages/Components/FooterHome"
import Loading from "./Pages/Components/Loading"
import NavigationHome from "./Pages/Components/NavigationHome"
import Weather from "./Pages/Components/Weather"
import ReactTypingEffect from "react-typing-effect"
import { useTranslation } from "react-i18next"
import ModalDialog from "./Pages/Components/GsapBtn/ModalDialog"
import AOS from "aos"
import "aos/dist/aos.css"

function Layout() {
  useEffect(() => {
    AOS.init()
  }, [])
  const { t } = useTranslation()
  return (
    <div className="space-y-8">
      <div className="relative">
        {/* top bar */}
        <div className="sticky top-0 z-50">
          <NavigationHome />
        </div>
        {/* main content */}
        <div className="z-10">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      {/* Footer */}
      <div>
        <FooterHome />
      </div>
      {/* astuce */}
      <div className="fixed bottom-[40%]">
        <div className="mx-2 opacity-90 flex flex-col gap-2 justify-center">
          <ReactTypingEffect
            speed={200}
            typingDelay={500}
            eraseDelay={350}
            className="text-astuces text-[10px] font-asap-bold first-letter:text-[15px]"
            text={[t("turning"), t("exp")]}
          />
          <span className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current stroke-2 w-[1.1rem] z-50 animate-[double-spin_2s_ease-in-out_infinite_alternate]"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm0-144a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0,72.08,72.08,0,0,1,72-72,8,8,0,0,1,0,16Zm72,56a72.08,72.08,0,0,1-72,72,8,8,0,0,1,0-16,56.06,56.06,0,0,0,56-56,8,8,0,0,1,16,0Zm-40,0a32,32,0,1,0-32,32A32,32,0,0,0,160,128Zm-48,0a16,16,0,1,1,16,16A16,16,0,0,1,112,128Z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Layout
