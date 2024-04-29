import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import { Island } from "../../assets/3D/Island"
import useMediaQuery from "../../utils/mediaquery/useMediaQuery"
import { useTranslation } from "react-i18next"
import Loading3D from "../Components/Loading3D"
import { useProgress } from "@react-three/drei"

export const Welcoming = () => {
  const { t } = useTranslation()
  const { loaded, total } = useProgress()
  // * is mobile
  const isMobile = useMediaQuery("(max-width: 600px)")

  const island_ref = useRef() as any

  const invokeIsland = () => {
    island_ref.current?.invoke()
  }

  const beatIsland = () => {
    island_ref.current.beat()
  }

  useEffect(() => {
    if (loaded === total) {
      invokeIsland()
    }
  }, [island_ref.current, loaded, total])

  return (
    <div className="h-screen sm:h-[85vh] relative" onMouseEnter={invokeIsland}>
      <div className="grid grid-cols-1 sm:grid-cols-5 absolute z-10 w-full h-full">
        <div className="col-span-3 sm:mt-[15%]">
          <div className="space-y-5">
            <div className="text-center sm:text-start">
              <h1 className="font-app text-primary text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl">
                {t("Welcome")}
              </h1>
              <h1 className="text-2xl md:text-4xl lg:text-7xl 2xl:text-8xl font-app text-primary">
                <label className="text-transparent bg-clip-text bg-gradient-to-r to-primary from-secondary">
                  Dream
                </label>{" "}
                land
              </h1>
            </div>
            <div className="text-center sm:text-start">
              <p className="mt-[2%] sm:w-1/2 font-semibold lg:text-xl 2xl:text-3xl opacity-80">
                " {t("querstion")} "
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 flex justify-center sm:justify-end mt-[10%]">
          <div className="text-center sm:text-right space-y-5">
            <div className="text-2xl md:text-4xl lg:text-5xl 2xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r to-primary/50 from-secondary font-app">
              {t("sleep")}
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-app text-transparent bg-clip-text bg-gradient-to-r to-secondary-focus from-secondary">
              {t("destiny")}
            </div>
            <p className="text-sm sm:text-xl font-semibold text-primary">
              {t("moresurprise")}
            </p>
          </div>
        </div>
      </div>

      <div className="h-full z-0">
        <Suspense fallback={<Loading3D />}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={{ position: [0, 0, 1.1], fov: 45 }}
          >
            <ambientLight intensity={0.5} />
            <spotLight
              position={[1, 6, 1.5]}
              angle={0.2}
              penumbra={1}
              intensity={2.5}
              castShadow
              shadow-mapSize={[2048, 2048]}
            />
            <Island
              scale={isMobile ? 0.5 : 1}
              ref={island_ref}
              position={isMobile ? [0, 0, 0] : [0.1, 0, 0]}
            />
          </Canvas>
        </Suspense>
      </div>
    </div>
  )
}

export default Welcoming
