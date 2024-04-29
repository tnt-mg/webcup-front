import { config, useSpring, animated } from "@react-spring/web"
import { useRef, useState } from "react"
import useMediaQuery from "../../utils/mediaquery/useMediaQuery"

const AboutCompany = () => {
  const aboutRef = useRef<HTMLDivElement>(null!)
  const card_one_ref = useRef<HTMLDivElement>(null!)
  const card_two_ref = useRef<HTMLDivElement>(null!)
  const card_three_ref = useRef<HTMLDivElement>(null!)

  // * is mobile
  const isMobile = useMediaQuery("(max-width: 600px)")

  // * cards effect
  const [cardScale, setCardScale] = useState(1) as any
  const { cardScale_s } = useSpring({
    cardScale_s: cardScale,
    config: config.wobbly,
  })

  const handleCardHover = (
    cardRef: any,
    addClasses: any,
    removeClasses: any
  ) => {
    const classList = cardRef.current.classList
    classList.add(...addClasses)
    classList.remove(...removeClasses)
  }

  const hoverCardThree = () => {
    handleCardHover(
      card_three_ref,
      ["!-translate-x-[25%]"],
      ["!translate-x-[65%]", "!scale-75", "!rotate-[10deg]"]
    )
    handleCardHover(card_one_ref, ["!translate-x-[65%]", "!scale-75"], [])
    handleCardHover(
      card_two_ref,
      ["!translate-x-[65%]", "!scale-75", "rotate-[10deg]"],
      ["-rotate-[10deg]"]
    )
  }

  const hoverCardTwo = () => {
    handleCardHover(
      card_two_ref,
      ["-rotate-[10deg]", "!-translate-x-[25%]"],
      ["rotate-[10deg]", "!translate-x-[65%]", "!scale-75"]
    )
    handleCardHover(
      card_three_ref,
      ["!rotate-[10deg]", "!scale-75", "!translate-x-[65%]"],
      []
    )
    handleCardHover(card_one_ref, ["!translate-x-[65%]", "!scale-75"], [])
  }

  const hoverCardOne = () => {
    handleCardHover(card_one_ref, [], ["!translate-x-[65%]", "!scale-75"])
    handleCardHover(
      card_two_ref,
      ["rotate-[10deg]"],
      [
        "!scale-75",
        "!translate-x-[65%]",
        "!-translate-x-[25%]",
        "-rotate-[10deg]",
      ]
    )
    handleCardHover(
      card_three_ref,
      ["-rotate-[10deg]"],
      [
        "!scale-75",
        "!translate-x-[65%]",
        "!-translate-x-[25%]",
        "!rotate-[10deg]",
      ]
    )
  }
  return (
    <div ref={aboutRef} className="space-y-10 my-32">
      <div>
        <h1 className="text-4xl 2xl:text-5xl first-letter:text-6xl 2xl:first-letter:text-7xl font-bold text-center sm:text-start">
          About our company
        </h1>
      </div>
      <div className="grid sm:flex sm:h-80 gap-10">
        <div className="relative group shadow-lg sm:w-1/4 sm:h-2/3 rounded-2xl space-y-3 p-6 bg-base-100 hover:bg-primary duration-200 hover:text-primary-content cursor-default">
          <div className="2xl:space-y-2">
            <h2 className="2x:text-xl">Founder</h2>
            <h1 className="2xl:text-2xl font-extrabold">RAKOTOBE Kely</h1>
          </div>
          <p className="text-sm 2xl:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum numquam aspernatur consequatur animi consectetur eveniet
            quos fuga eaque
          </p>
          <svg
            className="w-32 group-hover:w-36 group-hover:fill-secondary group-hover:opacity-20 duration-100 absolute fill-current opacity-10 bottom-10 rotate-[20deg] right-0"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 16.75c4.28 0 7.75-3.47 7.75-7.75s-3.47-7.75-7.75-7.75c-4.28 0-7.75 3.47-7.75 7.75v0c0.005 4.278 3.472 7.745 7.75 7.75h0zM16 2.75c3.452 0 6.25 2.798 6.25 6.25s-2.798 6.25-6.25 6.25c-3.452 0-6.25-2.798-6.25-6.25v0c0.004-3.45 2.8-6.246 6.25-6.25h0zM30.41 29.84c-1.503-6.677-7.383-11.59-14.41-11.59s-12.907 4.913-14.391 11.491l-0.019 0.099c-0.011 0.048-0.017 0.103-0.017 0.16 0 0.414 0.336 0.75 0.75 0.75 0.357 0 0.656-0.25 0.731-0.585l0.001-0.005c1.351-5.998 6.633-10.41 12.945-10.41s11.594 4.413 12.929 10.322l0.017 0.089c0.076 0.34 0.374 0.59 0.732 0.59 0 0 0.001 0 0.001 0h-0c0.057-0 0.112-0.007 0.165-0.019l-0.005 0.001c0.34-0.076 0.59-0.375 0.59-0.733 0-0.057-0.006-0.112-0.018-0.165l0.001 0.005z"></path>
          </svg>
        </div>
        <div className="cursor-default relative group shadow-lg sm:w-1/4 sm:h-2/3 rounded-2xl space-y-3 p-6 bg-base-100 hover:bg-secondary duration-200 hover:text-secondary-content sm:translate-y-14">
          <div className="2xl:space-y-2">
            <h2 className="2xl:text-xl">Localisation</h2>
            <h1 className="2xl:text-2xl font-extrabold">
              Madagascar, Rue Tsy Hita 404
            </h1>
          </div>
          <p className="text-sm 2xl:text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            voluptatum numquam aspernatur consequatur animi consectetur eveniet
            quos fuga eaque
          </p>
          <svg
            className="w-32 group-hover:w-36 group-hover:fill-primary group-hover:opacity-20 duration-100 absolute fill-current opacity-10 bottom-10 rotate-[20deg] right-0"
            viewBox="0 0 1800 1800"
          >
            <path
              d="M899.993,1556.267l441.512-441.511c8.202-7.819,26.127-26.384,26.893-27.184l0.36-0.383
			c110.946-118.997,172.046-274.141,172.046-436.851c0-353.342-287.463-640.805-640.803-640.805
			c-353.342,0-640.805,287.463-640.805,640.805c0,162.714,61.1,317.857,172.038,436.851L899.993,1556.267z M900.001,71.159
			c319.355,0,579.179,259.818,579.179,579.18c0,146.968-55.159,287.114-155.315,394.639c-5.202,5.387-19.292,19.873-25.095,25.383
			L900.006,1469.1l-424.049-424.315C375.902,937.286,320.82,797.229,320.82,650.339C320.82,330.977,580.634,71.159,900.001,71.159z"
            />
            <path
              d="M998.745,225.279c110.577,0,325.781,120.91,325.781,342.553c0,17.018,13.789,30.812,30.812,30.812
			c17.014,0,30.812-13.794,30.812-30.812c0-115.37-50.989-222.331-143.563-301.184c-73.464-62.566-169.175-102.994-243.842-102.994
			c-17.014,0-30.812,13.794-30.812,30.813S981.731,225.279,998.745,225.279z"
            />
            <path
              d="M1286.716,1361.056c-24.003-9.809-49.854-18.548-77.134-26.264l-50.474,50.478
			c148.765,35.502,240.488,98.79,240.488,157.599c0,87.962-205.171,185.974-499.596,185.974
			c-294.417,0-499.597-98.012-499.597-185.974c0-58.805,91.723-122.097,240.488-157.599l-50.478-50.478
			c-27.271,7.716-53.126,16.455-77.121,26.264c-112.537,45.995-174.513,110.563-174.513,181.813s61.977,135.817,174.513,181.813
			c103.793,42.422,241.128,65.785,386.708,65.785c145.582,0,282.921-23.363,386.715-65.785
			c112.536-45.995,174.504-110.563,174.504-181.813S1399.252,1407.051,1286.716,1361.056z"
            />
            <path
              d="M901.771,945.221c-171.172,0-310.434-139.256-310.434-310.425S730.599,324.37,901.771,324.37
			c171.172,0,310.434,139.256,310.434,310.425S1072.943,945.221,901.771,945.221z M901.771,385.995
			c-137.193,0-248.809,111.612-248.809,248.801s111.616,248.801,248.809,248.801c137.192,0,248.809-111.612,248.809-248.801
			S1038.964,385.995,901.771,385.995z"
            />
          </svg>
        </div>
        <animated.div
          onMouseEnter={() => !isMobile && setCardScale(1.2)}
          onMouseLeave={() => !isMobile && setCardScale(1)}
          style={{ scale: cardScale_s }}
          className="w-full h-[150px] sm:h-full sm:w-1/2 p-2 flex justify-center items-center relative"
        >
          <div
            onClick={hoverCardOne}
            ref={card_one_ref}
            data-aos="zoom-in"
            className="bg-blue-500 w-1/2 h-full rounded-2xl p-4 z-30 duration-300"
          >
            card 1
          </div>
          <div
            onClick={hoverCardTwo}
            ref={card_two_ref}
            className="bg-green-500 w-1/2 h-full rounded-2xl p-4 absolute z-20 rotate-[10deg] translate-x-10 duration-300"
          >
            card 2
          </div>
          <div
            onClick={hoverCardThree}
            ref={card_three_ref}
            className="bg-orange-500 w-1/2 h-full rounded-2xl p-4 absolute z-20 -rotate-[10deg] -translate-x-10 duration-300"
          >
            card 3
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default AboutCompany
