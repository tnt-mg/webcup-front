import { config, useSpring, animated } from "@react-spring/web"
import { useEffect, useRef, useState } from "react"
import useMediaQuery from "../../utils/mediaquery/useMediaQuery"

const PayementMeths = () => {
  const slowWoobly = { tension: 120, friction: 20 }
  const [cardOneW, setCardOneW] = useState("6rem")
  const { cardOneWValue } = useSpring({
    cardOneWValue: cardOneW,
    config: slowWoobly,
  })
  const [cardOneH, setCardOneH] = useState("6rem")
  const { cardOneHValue } = useSpring({
    cardOneHValue: cardOneH,
    config: slowWoobly,
  })

  const [cardTwoW, setCardTwoW] = useState("6rem")
  const { cardTwoWValue } = useSpring({
    cardTwoWValue: cardTwoW,
    config: slowWoobly,
  })
  const [cardTwoH, setCardTwoH] = useState("6rem")
  const { cardTwoHValue } = useSpring({
    cardTwoHValue: cardTwoH,
    config: slowWoobly,
  })

  const [cardThreeW, setCardThreeW] = useState("6rem")
  const { cardThreeWValue } = useSpring({
    cardThreeWValue: cardThreeW,
    config: slowWoobly,
  })
  const [cardThreeH, setCardThreeH] = useState("6rem")
  const { cardThreeHValue } = useSpring({
    cardThreeHValue: cardThreeH,
    config: slowWoobly,
  })

  const [cardFourW, setCardFourW] = useState("6rem")
  const { cardFourWValue } = useSpring({
    cardFourWValue: cardFourW,
    config: slowWoobly,
  })
  const [cardFourH, setCardFourH] = useState("6rem")
  const { cardFourHValue } = useSpring({
    cardFourHValue: cardFourH,
    config: slowWoobly,
  })

  // * active bouton
  const one_ref = useRef<HTMLDivElement>(null!)
  const two_ref = useRef<HTMLDivElement>(null!)
  const three_ref = useRef<HTMLDivElement>(null!)
  const four_ref = useRef<HTMLDivElement>(null!)

  const [activeCard, setActiveCard] = useState<String>("one")

  // * is mobile
  const isMobile = useMediaQuery("(max-width: 600px)")

  const handleCardOne = () => {
    setCardOneW("20rem")
    isMobile ? setCardOneH("15rem") : setCardOneH("20rem")
    setCardTwoW("6rem")
    setCardTwoH("6rem")
    setCardThreeW("6rem")
    setCardThreeH("6rem")
    setCardFourW("6rem")
    setCardFourH("6rem")
    // active
    one_ref.current.classList.add("bg-secondary", "text-secondary-content")
    two_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    three_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    four_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    setActiveCard("one")
  }

  const handleCardTwo = () => {
    setCardTwoW("20rem")
    isMobile ? setCardTwoH("15rem") : setCardTwoH("20rem")
    setCardOneW("6rem")
    setCardOneH("6rem")
    setCardThreeW("6rem")
    setCardThreeH("6rem")
    setCardFourW("6rem")
    setCardFourH("6rem")
    two_ref.current.classList.add("bg-secondary", "text-secondary-content")
    one_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    three_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    four_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    setActiveCard("two")
  }

  const handleCardThree = () => {
    setCardThreeW("20rem")
    isMobile ? setCardThreeH("15rem") : setCardThreeH("20rem")
    setCardOneW("6rem")
    setCardOneH("6rem")
    setCardTwoW("6rem")
    setCardTwoH("6rem")
    setCardFourW("6rem")
    setCardFourH("6rem")
    three_ref.current.classList.add("bg-secondary", "text-secondary-content")
    two_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    one_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    four_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    setActiveCard("three")
  }

  const handleCardFour = () => {
    setCardFourW("20rem")
    isMobile ? setCardFourH("15rem") : setCardFourH("20rem")
    setCardThreeW("6rem")
    setCardThreeH("6rem")
    setCardOneW("6rem")
    setCardOneH("6rem")
    setCardTwoW("6rem")
    setCardTwoH("6rem")
    four_ref.current.classList.add("bg-secondary", "text-secondary-content")
    three_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    two_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    one_ref.current.classList.remove("bg-secondary", "text-secondary-content")
    setActiveCard("four")
  }

  useEffect(() => {
    if (activeCard === "one") {
      handleCardOne()
    }
  }, [activeCard])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 sm:h-[60vh]">
      <div className="col-span-3 flex justify-center items-center order-2 sm:order-1">
        <div data-aos="zoom-out" className="grid grid-cols-2 gap-2">
          <div className="flex justify-end items-end">
            <animated.div
              onMouseEnter={handleCardOne}
              style={{ width: cardOneWValue, height: cardOneHValue }}
              className="relative shadow-2xl rounded-lg"
            >
              {/* active */}
              {activeCard === "one" ? (
                <div className="h-full bg-primary text-primary-content p-4 rounded-lg">
                  <div className="grid grid-cols-2 h-1/3">
                    <div className="flex justify-center items-center">
                      <svg className="w-1/2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                      </svg>
                    </div>
                    <div className="text-right flex flex-col justify-center">
                      <label className="text-xl sm:text-3xl font-bold font-app">
                        Cash
                      </label>
                      <div className="text-[5pt] sm:text-sm font-semibold">
                        14 000 ar - 140 000 ar
                      </div>
                    </div>
                  </div>
                  <div className="h-1/2 flex items-center">
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Incidunt laborum cupiditate
                    </p>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <button className="btn btn-sm sm:btn-md">Voir</button>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex justify-center items-center">
                  <span className="text-black">Cash</span>
                </div>
              )}
            </animated.div>
          </div>
          <div className="flex items-end">
            <animated.div
              onMouseEnter={handleCardTwo}
              style={{ width: cardTwoWValue, height: cardTwoHValue }}
              className="relative shadow-2xl rounded-lg"
            >
              {activeCard === "two" ? (
                <div className="h-full bg-primary text-primary-content p-4 rounded-lg">
                  <div className="grid grid-cols-2 h-1/3">
                    <div className="flex justify-center items-center">
                      <svg className="w-1/2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                      </svg>
                    </div>
                    <div className="text-right flex flex-col justify-center">
                      <label className="text-xl sm:text-3xl font-bold font-app">
                        Credit
                      </label>
                      <div className="text-[5pt] sm:text-sm font-semibold">
                        14 000 ar - 140 000 ar
                      </div>
                    </div>
                  </div>
                  <div className="h-1/2 flex items-center">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Incidunt laborum cupiditate
                    </p>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <button className="btn btn-sm sm:btn-md">Voir</button>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex justify-center items-center">
                  <span className="text-black">Credit</span>
                </div>
              )}
            </animated.div>
          </div>
          <div className="flex justify-end">
            <animated.div
              onMouseEnter={handleCardThree}
              style={{ width: cardThreeWValue, height: cardThreeHValue }}
              className="relative shadow-2xl rounded-lg"
            >
              {activeCard === "three" ? (
                <div className="h-full bg-primary text-primary-content p-4 rounded-lg">
                  <div className="grid grid-cols-2 h-1/3">
                    <div className="flex justify-center items-center">
                      <svg className="w-1/2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                      </svg>
                    </div>
                    <div className="text-right flex flex-col justify-center">
                      <label className="text-xl sm:text-3xl font-bold font-app">
                        Os
                      </label>
                      <div className="text-[5pt] sm:text-sm font-semibold">
                        14 g - 140 000 g
                      </div>
                    </div>
                  </div>
                  <div className="h-1/2 flex items-center">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Incidunt laborum cupiditate
                    </p>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <button className="btn btn-sm sm:btn-md">Voir</button>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex justify-center items-center">
                  <span className="text-black">Os</span>
                </div>
              )}
            </animated.div>
          </div>
          <div className="flex">
            <animated.div
              onMouseEnter={handleCardFour}
              style={{ width: cardFourWValue, height: cardFourHValue }}
              className="relative shadow-2xl rounded-lg"
            >
              {activeCard === "four" ? (
                <div className="h-full bg-primary text-primary-content p-4 rounded-lg">
                  <div className="grid grid-cols-2 h-1/3">
                    <div className="flex justify-center items-center">
                      <svg className="w-1/2 fill-current" viewBox="0 0 24 24">
                        <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                      </svg>
                    </div>
                    <div className="text-right flex flex-col justify-center">
                      <label className="text-xl sm:text-3xl font-bold font-app">
                        Blood
                      </label>
                      <div className="text-[5pt] sm:text-sm font-semibold">
                        14 L - 140 000 L
                      </div>
                    </div>
                  </div>
                  <div className="h-1/2 flex items-center">
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Incidunt laborum cupiditate
                    </p>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <button className="btn btn-sm sm:btn-md">Voir</button>
                  </div>
                </div>
              ) : (
                <div className="h-full w-full flex justify-center items-center">
                  <span className="text-black">Blood</span>
                </div>
              )}
            </animated.div>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center order-1 sm:order-1">
        <div className="text-center">
          <h1 className="text-4xl 2xl:text-5xl first-letter:text-6xl 2xl:first-letter:text-7xl font-bold">
            All methods
          </h1>
          <div className="flex justify-center">
            <p className="my-3 w-2/3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              necessitatibus vel ratione molestias excepturi nisi? Commodi
              maxime ea velit pariatur quidem culpa.
            </p>
          </div>
          <div className="my-10 flex justify-center gap-3">
            <div
              ref={one_ref}
              onMouseEnter={handleCardOne}
              className="cursor-pointer flex flex-col px-4 py-2 shadow-md rounded-2xl  duration-150"
            >
              <span className="flex justify-center mb-1">
                <svg className="w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                </svg>
              </span>
              <label className="text-center text-xs">Cash</label>
            </div>
            <div
              ref={two_ref}
              onMouseEnter={handleCardTwo}
              className="flex flex-col px-4 py-2 shadow-md rounded-2xl  duration-150"
            >
              <span className="flex justify-center mb-1">
                <svg className="w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                </svg>
              </span>
              <label className="text-center text-xs">Credit</label>
            </div>
            <div
              ref={three_ref}
              onMouseEnter={handleCardThree}
              className="flex flex-col px-4 py-2 shadow-md rounded-2xl  duration-150"
            >
              <span className="flex justify-center mb-1">
                <svg className="w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                </svg>
              </span>
              <label className="text-center text-xs">Os</label>
            </div>
            <div
              ref={four_ref}
              onMouseEnter={handleCardFour}
              className="flex flex-col px-4 py-2 shadow-md rounded-2xl  duration-150"
            >
              <span className="flex justify-center mb-1">
                <svg className="w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626" />
                </svg>
              </span>
              <label className="text-center text-xs">Blood</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PayementMeths
