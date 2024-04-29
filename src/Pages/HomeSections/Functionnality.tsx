import { Canvas } from "@react-three/fiber"
import { Brain } from "../../assets/3D/Brain"
import { useState } from "react"
import {
  ContactShadows,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei"
import { useRef } from "react"
import useMediaQuery from "../../utils/mediaquery/useMediaQuery"
import { useTranslation } from "react-i18next"

function Functionnality() {
  const { t } = useTranslation()

  // * is mobile
  const isMobile = useMediaQuery("(max-width: 600px)")

  const brain_ref = useRef() as any

  const [isVisible, setIsVisible] = useState({
    video: false,
    city: false,
    white: false,
  })

  const showVideo = () => {
    brain_ref.current.showVideo()
    setIsVisible((isVisible) => ({ ...isVisible, video: true }))
    setIsVisible((isVisible) => ({ ...isVisible, city: false }))
    setIsVisible((isVisible) => ({ ...isVisible, white: false }))
  }
  const showWhite = () => {
    brain_ref.current.showWhite()
    setIsVisible((isVisible) => ({ ...isVisible, white: true }))
    setIsVisible((isVisible) => ({ ...isVisible, city: false }))
    setIsVisible((isVisible) => ({ ...isVisible, video: false }))
  }
  const showCity = () => {
    brain_ref.current.showCity()
    setIsVisible((isVisible) => ({ ...isVisible, city: true }))
    setIsVisible((isVisible) => ({ ...isVisible, white: false }))
    setIsVisible((isVisible) => ({ ...isVisible, video: false }))
  }
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-7 h-auto sm:h-[80vh] my-[5%]">
      <div className="col-span-5">
        <Canvas
          camera={{
            fov: isMobile ? 20 : 30,
            aspect: window.innerWidth / window.innerHeight,
            near: 0.1,
            far: 1000,
          }}
        >
          <PerspectiveCamera position={[0, 0, 10]} />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[1, 6, 1.5]}
            angle={0.2}
            penumbra={1}
            intensity={0.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
          />
          <Brain
            ref={brain_ref}
            scale={1}
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI / 30, 0]}
          />
          {/* <Environment preset="city" /> */}
          <ContactShadows
            frames={1}
            scale={5}
            position={[0, -1, 0]}
            far={1}
            blur={5}
            opacity={1}
            color="#000"
          />
        </Canvas>
      </div>
      <div className="flex items-center justify-end col-span-2">
        <div className="text-center sm:text-right space-y-8">
          <h1 className="text-5xl sm:text-7xl font-app text-primary">
            <span className="text-secondary">{t("our")}</span>{" "}
            {t("functionnality")}
          </h1>
          <p className="text-xl font-app">
            {t("font")}
            <br />
            <span className="text-xs italic opacity-50">{t("help1")}</span>
          </p>
          {isVisible.video && <div className="text-lg">{t("dreamvid")}</div>}
          {isVisible.city && (
            <div className="text-lg">
              <span className="">
                {t("Citydreams")}{" "}
                <span className="font-bold">{t("funct3D")}</span>{" "}
              </span>
            </div>
          )}
          {isVisible.white && <div className="text-lg">{t("boarddreams")}</div>}
          <div className="flex gap-2 justify-center sm:justify-end">
            <button onClick={showVideo} className="btn btn-secondary">
              {t("video")}
            </button>
            <button onClick={showWhite} className="btn btn-secondary">
              Dreamboard
            </button>
            <button onClick={showCity} className="btn btn-secondary">
              {t("build")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Functionnality
