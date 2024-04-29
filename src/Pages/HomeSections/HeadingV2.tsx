import { useState, useEffect, useRef } from "react"
import Wordz from "../Components/Wordz"
import DreamSVG from "../Components/svg/DreamSVG"
import Atropos from "atropos/react"
import "atropos/css"

export const HeadingV2 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute top-0 left-0">
        <img className="w-full sm:opacity-40" src="/Sprinkle.svg" alt="" />
      </div>
      <div className="h-[35vh] sm:h-[65vh] w-full bg-primary absolute -z-50 top-0"></div>
      <Atropos
        activeOffset={40}
        shadowScale={0.5}
        highlight={false}
        className="perspective-container sm:w-[85%] sm:h-[95vh]"
      >
        <div className="skewed-rectangle rounded-[3rem] bg-current px-[5%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 py-5 sm:py-0 sm:gap-10 h-full text-base-100">
            <div className="flex items-center">
              <div>
                <div className="space-y-10 sm:space-y-16">
                  <p
                    data-atropos-offset="20"
                    className="text-4xl 2xl:text-6xl first-letter:text-6xl 2xl:first-letter:text-8xl text-center sm:text-start sm:font-bold"
                  >
                    Lorem ipsum, dolor sit amet consectetur{" "}
                    <span className="text-secondary">adipisicing</span> elit
                    Earum incidunt
                  </p>
                  <div>
                    <Wordz />
                  </div>
                  <div className="flex justify-center sm:justify-start">
                    <button
                      className="btn btn-primary rounded-2xl"
                      data-atropos-offset="20"
                    >
                      Let's rock it
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div
                className="absolute sm:block top-0 opacity-10 sm:opacity-100"
                data-atropos-offset="-20"
              >
                <DreamSVG />
              </div>
            </div>
          </div>
        </div>
      </Atropos>
    </div>
  )
}
