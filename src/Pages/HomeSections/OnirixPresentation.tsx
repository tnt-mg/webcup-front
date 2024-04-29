import { Canvas } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import { Suspense, useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import Model from "../../assets/3D/Model"
import "../../assets/Css/idk.css"
import Overlay from "./Overlay"

function OnirixPresentation() {
  const { t } = useTranslation()
  const overlay = useRef<any>()
  const modelRef = useRef<any>()
  const { scrollYProgress } = useScroll({
    target: overlay,
    offset: ["-70vh", "end end"],
  })
  useEffect(() => {
    if (!scrollYProgress) return
    scrollYProgress.on("renderRequest", () => {
      const value = scrollYProgress.get()
      modelRef.current?.setProgress(value)
    })
  }, [scrollYProgress])
  return (
    <div>
      <div className="flex justify-center sm:justify-end sm:sticky top-[15%]">
        <h1 className="text-3xl sm:text-6xl font-app text-center sm:text-right text-primary w-full sm:w-1/2">
          {t("Here is the presentation of Onirix")}
        </h1>
      </div>
      <div className="relative">
        <div className="sticky top-0 left-0 h-[85vh] w-full">
          <Canvas>
            <ambientLight intensity={1} />
            <Suspense fallback={null}>
              <Model ref={modelRef} />
            </Suspense>
          </Canvas>
        </div>
        <Overlay className="-mt-[85vh]" ref={overlay} />
      </div>
    </div>
  )
}

export default OnirixPresentation
