import { useSpring, animated, config } from "@react-spring/web"
import { useScroll } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import "../../assets/Css/mockup.css"
import Phone from "../../assets/mockup/Phone"
import Tablet from "../../assets/mockup/Tablet"
import Desktop from "../../assets/mockup/Desktop"

const ACTIVE_RANGE = [0, 1]
const MockupV2 = () => {
  const mockRef = useRef() as any
  const scrollContainerRef = useRef<HTMLDivElement>(null!)
  const currentActive = useRef("all")

  // * handle display text
  const all_ref = useRef<HTMLDivElement>(null!)
  const phone_ref = useRef<HTMLDivElement>(null!)
  const tablet_ref = useRef<HTMLDivElement>(null!)
  const desktop_ref = useRef<HTMLDivElement>(null!)

  const [phone_scale, setPhoneScale] = useState(1)
  const { phone_scale_s } = useSpring({
    phone_scale_s: phone_scale,
    config: config.wobbly,
  })
  const [phone_x, setPhoneX] = useState("0%") as any
  const { phone_x_s } = useSpring({
    phone_x_s: phone_x,
    config: config.wobbly,
  })

  const [desk_scale, setDeskScale] = useState(1)
  const { desk_scale_s } = useSpring({
    desk_scale_s: desk_scale,
    config: config.wobbly,
  })
  const [desk_x, setDeskX] = useState("0%") as any
  const { desk_x_s } = useSpring({
    desk_x_s: desk_x,
    config: config.wobbly,
  })

  const [tablet_scale, setTabletScale] = useState(1)
  const { tablet_scale_s } = useSpring({
    tablet_scale_s: tablet_scale,
    config: config.wobbly,
  })
  const [tablet_x, setTabletX] = useState("0%") as any
  const { tablet_x_s } = useSpring({
    tablet_x_s: tablet_x,
    config: config.wobbly,
  })

  const phoneSettings = (scale: number, x: String) => {
    setPhoneScale(scale)
    setPhoneX(x)
  }

  const deskSettings = (scale: number, x: String) => {
    setDeskScale(scale)
    setDeskX(x)
  }

  const tabletSettings = (scale: number, x: String) => {
    setTabletScale(scale)
    setTabletX(x)
  }

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
        type = "all"
        phoneSettings(1, "0%")
        deskSettings(1, "0%")
        tabletSettings(1, "0%")
      } else if (
        value >= ACTIVE_RANGE[0] + decalage &&
        value < ACTIVE_RANGE[0] + 2 * decalage
      ) {
        type = "phone"
        phoneSettings(2.5, "75%")
        deskSettings(0.5, "75%")
        tabletSettings(0.5, "-75%")
      } else if (
        value >= ACTIVE_RANGE[0] + 2 * decalage &&
        value < ACTIVE_RANGE[0] + 3 * decalage
      ) {
        type = "desktop"
        phoneSettings(1, "0%")
        deskSettings(1.5, "0%")
        tabletSettings(1, "0%")
      } else if (value >= ACTIVE_RANGE[0] + 3 * decalage) {
        type = "tablet"
        phoneSettings(1, "0%")
        deskSettings(1, "0%")
        tabletSettings(1.5, "-75%")
      }
      if (currentActive.current !== type) {
        switchTo(type)
      }
    })
  }, [scrollYProgress])

  return (
    <div
      ref={scrollContainerRef}
      className="scrollContainer h-[500vh] sm:h-[500vh] relative"
    >
      <div className="grid gap-0 sm:gap-10 grid-cols-1 sm:grid-cols-5 sticky top-[90px]">
        {/* mock */}
        <div className="col-span-3 h-[50vh] sm:h-[80vh] flex items-center justify-center relative">
          <div className="flex items-end justify-center gap-2">
            <animated.div
              style={{ scale: phone_scale_s, translateX: phone_x_s }}
            >
              <div className="flex items-center justify-center w-[50px] sm:w-[80px] h-[78px] sm:h-[128px]">
                <Phone />
              </div>
            </animated.div>
            <animated.div style={{ scale: desk_scale_s, translateX: desk_x_s }}>
              <div className="flex items-center justify-center w-[175px] sm:w-[400px] h-[109px] sm:h-[250px] -translate-y-10">
                <Desktop />
              </div>
            </animated.div>
            <animated.div
              style={{ scale: tablet_scale_s, translateX: tablet_x_s }}
            >
              <div className="flex items-center justify-center w-[100px] sm:w-[250px] h-[63px] sm:h-[156px]">
                <Tablet />
              </div>
            </animated.div>
          </div>
        </div>
        {/* text */}
        <div className="col-span-2 h-[30vh] sm:h-[80vh] relative">
          {/* all */}
          <div ref={all_ref} className="mock-text text-center sm:text-left">
            <div className="text-primary">All devices</div>
            <p className="font-thin sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus maxime consequatur eius quo atque. Facilis
              necessitatibus ut rerum, natus
            </p>
          </div>
          {/* phone */}
          <div
            ref={phone_ref}
            className="mock-text text-center sm:text-left opacity-0"
          >
            <div className="text-primary">Mobile</div>
            <p className="font-thin sm:text-3xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus maxime consequatur eius quo atque. Facilis
              necessitatibus ut rerum, natus
            </p>
          </div>
          {/* tablet */}
          <div
            ref={tablet_ref}
            className="mock-text text-center sm:text-left opacity-0"
          >
            <div className="text-primary">Tablet</div>
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
            <div className="text-primary">Desktop</div>
            <p className="font-thin sm:text-3xl">
              Avec une mise en page et des fonctionnalités optimisées pour les
              grands écrans, vous pourrez profiter pleinement de notre contenu
            </p>
          </div>
        </div>
        {/* instruction */}
        <div className="absolute bottom-0 w-full text-center sm:text-right">
          <span className="text-sm font-bold">Scroll down</span>
        </div>
      </div>
    </div>
  )
}

export default MockupV2
