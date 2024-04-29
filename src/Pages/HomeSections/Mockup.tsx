import { Canvas } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import { Suspense, useEffect, useRef } from "react"
import { MockupModel } from "../../assets/3D/MockupModel"
import Loading3D from "../Components/Loading3D"
import { useTranslation } from "react-i18next"

const ACTIVE_RANGE = [0, 1]
function Mockup() {
  const { t } = useTranslation()
  const mockRef = useRef() as any
  const scrollContainerRef = useRef() as any
  const currentActive = useRef("all")
  // * handle display text
  const all_ref = useRef() as any
  const phone_ref = useRef() as any
  const tablet_ref = useRef() as any
  const desktop_ref = useRef() as any

  const switchTo = (type: any) => {
    currentActive.current = type
    all_ref.current.classList.toggle("opacity-0", type !== "all")
    phone_ref.current.classList.toggle("opacity-0", type !== "phone")
    tablet_ref.current.classList.toggle("opacity-0", type !== "tablet")
    desktop_ref.current.classList.toggle("opacity-0", type !== "desktop")
  }
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["-70vh", "end end"],
  })

  useEffect(() => {
    if (!scrollYProgress) return
    scrollYProgress.on("renderRequest", () => {
      const value = scrollYProgress.get()
      mockRef.current?.setProgress(value)
      const decalage = (ACTIVE_RANGE[1] - ACTIVE_RANGE[0]) / 4
      let type: string = "all"
      if (value >= ACTIVE_RANGE[0] && value < ACTIVE_RANGE[0] + decalage) {
        //ALL
        type = "all"
      } else if (
        value >= ACTIVE_RANGE[0] + decalage &&
        value < ACTIVE_RANGE[0] + 2 * decalage
      ) {
        //PHONE
        type = "phone"
      } else if (
        value >= ACTIVE_RANGE[0] + 2 * decalage &&
        value < ACTIVE_RANGE[0] + 3 * decalage
      ) {
        //DESK
        type = "desktop"
      } else if (value >= ACTIVE_RANGE[0] + 3 * decalage) {
        //TABLET
        type = "tablet"
      }
      if (currentActive.current !== type) {
        switchTo(type)
      }
    })
  }, [scrollYProgress])
  return (
    <div
      ref={scrollContainerRef}
      className="scrollContainer h-[500vh] sm:h-[800vh] relative"
    >
      <div className="grid gap-0 sm:gap-10 grid-cols-1 sm:grid-cols-5 sticky top-[90px]">
        <div className="col-span-2 h-[30vh] sm:h-[80vh] order-2 sm:order-1 relative">
          {/* all */}
          <div ref={all_ref} className="mock-text text-center sm:text-left">
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("alldevices")}
            </div>
            <p className="font-thin sm:text-3xl">{t("alldevicesdesc")}</p>
          </div>
          {/* phone */}
          <div
            ref={phone_ref}
            className="mock-text text-center sm:text-left opacity-0"
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              {t("phone")}
            </div>
            <p className="font-thin sm:text-3xl">{t("phonedesc")}</p>
          </div>
          {/* tablet */}
          <div
            ref={tablet_ref}
            className="mock-text text-center sm:text-left opacity-0"
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Tablet
            </div>
            <p className="font-thin sm:text-3xl">
              Découvrez notre site web sur votre tablette ! Conçu pour s'adapter
              automatiquement à la taille de votre écran
            </p>
          </div>
          {/* desktop */}
          <div
            ref={desktop_ref}
            className="mock-text text-center sm:text-left opacity-0"
          >
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Desktop
            </div>
            <p className="font-thin sm:text-3xl">
              Avec une mise en page et des fonctionnalités optimisées pour les
              grands écrans, vous pourrez profiter pleinement de notre contenu
            </p>
          </div>
        </div>
        <div className="col-span-3 h-[50vh] sm:h-[80vh] order-1 sm:order-2">
          <Suspense fallback={<Loading3D />}>
            <Canvas camera={{ fov: 50, position: [0, 0, 1] }}>
              <group position={[0, -0.2, 0]}>
                <MockupModel ref={mockRef} />
              </group>
            </Canvas>
          </Suspense>
        </div>
      </div>

      <div className="absolute top-0 right-0 -translate-y-24 z-10">
        <img
          src="/images/sideDesign.svg"
          width="600px"
          height="600px"
          alt="milatsaka"
        />
      </div>
    </div>
  )
}

export default Mockup
