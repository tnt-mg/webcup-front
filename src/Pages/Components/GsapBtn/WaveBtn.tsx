/**
 *
 * CODE PICKED HERE : https://codepen.io/aaroniker/full/gOvaGVg
 * AND CONVERTED TO REACTJS
 *
 */

import { Linear, gsap } from "gsap"
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react"
import { MorphSVGPlugin } from "../../../gsap/MorphSVGPlugin"
import "/src/assets/Css/waveBtn.scss"

const WaveBtn: React.FC<{
  successText: string
  failureText: string
  text: string
  onClick: () => Promise<void>
}> = ({
  successText = "success",
  failureText = "fail",
  text = "button",
  onClick = () => new Promise((resolve, reject) => setTimeout(reject, 3000)),
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null!)
  const successRef = useRef<HTMLDivElement>(null!)
  const failureRef = useRef<HTMLDivElement>(null!)
  const activeRef = useRef<boolean>(false)
  const [classSvg, setClassSvg] = useState(
    "fill-primary group-hover:fill-primary-focus duration-100"
  )

  useEffect(() => {
    const { context } = gsap
    const currentContext = context(() => {
      gsap.registerPlugin(MorphSVGPlugin)
    })
    return () => currentContext.revert()
  }, [])

  const handleButtonClick = useCallback(
    (event: MouseEvent) => {
      if (activeRef.current) {
        return
      }
      const button = buttonRef.current
      const defaultLetters = button.querySelectorAll(".default span")
      const successLetters = button.querySelectorAll(".success span")
      const failureLetters = button.querySelectorAll(".failure span")
      // const successTick = button.querySelector(".success svg")
      const dots = button.querySelectorAll(".dots span")
      const path = button.querySelector(":scope > svg path")

      activeRef.current = true

      const { to, timeline } = gsap

      const resetSuccessTimeline = timeline({ paused: true })
      resetSuccessTimeline
        .to(successLetters, {
          stagger: 0.075,
          scale: 0.25,
          opacity: 0,
          duration: 0.15,
        })
        .to(defaultLetters, {
          stagger: 0.075,
          scale: 1,
          opacity: 1,
          duration: 0.15,
          onComplete: () => {
            activeRef.current = false
          },
        })
      const resetFailureTimeline = timeline({ paused: true })
      resetFailureTimeline
        .to(failureLetters, {
          stagger: 0.075,
          scale: 0.25,
          opacity: 0,
          duration: 0.15,
        })
        .to(defaultLetters, {
          stagger: 0.075,
          scale: 1,
          opacity: 1,
          duration: 0.15,
          onComplete: () => {
            activeRef.current = false
          },
        })

      const loopTimeline = timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 0,
        defaults: { ease: Linear.easeInOut },
      })
      loopTimeline
        .to(dots, {
          stagger: 0.075,
          keyframes: [
            {
              y: -5,
              // scale: 1,
              duration: 0.25,
            },
            {
              y: 5,
              duration: 0.25,
            },
            {
              y: -5,
              // scale: 1,
              duration: 0.25,
            },
            {
              y: 5,
              duration: 0.25,
            },
            {
              y: -5,
              // scale: 1,
              duration: 0.25,
            },
            {
              y: 5,
              duration: 0.25,
            },
          ],
        })
        .to(
          path,
          {
            keyframes: [
              {
                duration: 0.25,
                morphSVG:
                  "M2 11C2 7.13405 5.13401 5.00004 9 4.00004C12.866 3.00004 39.7401 -1.99996 66 4.00004C92.2599 10 119.134 5.00004 123 4.00004C126.866 3.00004 130 7.13405 130 11V41C130 44.866 126.866 47 123 48C119.134 49 92.2599 54 66 48C39.7401 42 12.866 47 9 48C5.13401 49 2 44.866 2 41V11Z",
              },
              {
                duration: 0.25,
                morphSVG:
                  "M2 11C2 7.13405 5.13401 3.00004 9 4.00004C12.866 5.00004 39.7401 10 66 4.00004C92.2599 -1.99996 119.134 3.00004 123 4.00004C126.866 5.00004 130 7.13405 130 11V41C130 44.866 126.866 49 123 48C119.134 47 92.2599 42 66 48C39.7401 54 12.866 49 9 48C5.13401 47 2 44.866 2 41V11Z",
              },
              {
                duration: 0.25,
                morphSVG:
                  "M2 11C2 7.13405 5.13401 5.00004 9 4.00004C12.866 3.00004 39.7401 -1.99996 66 4.00004C92.2599 10 119.134 5.00004 123 4.00004C126.866 3.00004 130 7.13405 130 11V41C130 44.866 126.866 47 123 48C119.134 49 92.2599 54 66 48C39.7401 42 12.866 47 9 48C5.13401 49 2 44.866 2 41V11Z",
              },
              {
                duration: 0.25,
                morphSVG:
                  "M2 11C2 7.13405 5.13401 3.00004 9 4.00004C12.866 5.00004 39.7401 10 66 4.00004C92.2599 -1.99996 119.134 3.00004 123 4.00004C126.866 5.00004 130 7.13405 130 11V41C130 44.866 126.866 49 123 48C119.134 47 92.2599 42 66 48C39.7401 54 12.866 49 9 48C5.13401 47 2 44.866 2 41V11Z",
              },
              {
                duration: 0.25,
                morphSVG:
                  "M2 11C2 7.13405 5.13401 5.00004 9 4.00004C12.866 3.00004 39.7401 -1.99996 66 4.00004C92.2599 10 119.134 5.00004 123 4.00004C126.866 3.00004 130 7.13405 130 11V41C130 44.866 126.866 47 123 48C119.134 49 92.2599 54 66 48C39.7401 42 12.866 47 9 48C5.13401 49 2 44.866 2 41V11Z",
              },
              {
                duration: 0.25,
                morphSVG:
                  "M2 11C2 7.13401 5.13401 4 9 4C12.866 4 39.7401 4 66 4C92.2599 4 119.134 4 123 4C126.866 4 130 7.13401 130 11V41C130 44.866 126.866 48 123 48C119.134 48 92.2599 48 66 48C39.7401 48 12.866 48 9 48C5.13401 48 2 44.866 2 41V11Z",
              },
            ],
          },
          "<"
        )

      const stopLoop = async () => {
        return new Promise((resolve) => {
          loopTimeline.repeat(0).then(() => {
            to(dots, {
              stagger: 0.075,
              scale: 0,
              duration: 0.25,
            }).then(() => {
              resolve(null)
            })
          })
        })
      }
      const showSuccess = () => {
        successRef.current.classList.remove("hidden")
        failureRef.current.classList.add("hidden")
      }
      const showFailure = () => {
        successRef.current.classList.add("hidden")
        failureRef.current.classList.remove("hidden")
      }

      const firstTimeline = timeline()
      const successTimeline = timeline({ paused: true })
      const failureTimeline = timeline({ paused: true })
      firstTimeline.to([...defaultLetters].reverse(), {
        stagger: 0.075,
        keyframes: [
          {
            scale: 1.075,
            duration: 0.15,
          },
          {
            scale: 0.2,
            opacity: 0,
            duration: 0.2,
          },
        ],
        onComplete() {
          to(dots, {
            stagger: 0.075,
            scale: 1,
            y: -5,
            duration: 0.25,
          })
          loopTimeline.play()
          onClick()
            .then(() => {
              showSuccess()
              stopLoop().then(() => {
                successTimeline.play()
              })
            })
            .catch(() => {
              showFailure()
              stopLoop().then(() => {
                failureTimeline.play()
              })
            })
        },
      })

      successTimeline
        .to(successLetters, {
          stagger: 0.075,
          keyframes: [
            {
              scale: 1.1,
              opacity: 1,
              duration: 0.15,
            },
            {
              scale: 1,
              duration: 0.15,
            },
          ],
        })
        .to(button, {
          keyframes: [
            {
              scale: 1.05,
              duration: 0.15,
            },
            {
              scale: 1,
              duration: 0.1,
              clearProps: true,
            },
          ],
          onComplete: () => {
            setTimeout(() => resetSuccessTimeline.play(), 2000)
          },
        })
      failureTimeline
        .to(failureLetters, {
          stagger: 0.075,
          keyframes: [
            {
              scale: 1.1,
              opacity: 1,
              duration: 0.15,
            },
            {
              scale: 1,
              duration: 0.15,
            },
          ],
        })
        .to(button, {
          keyframes: [
            {
              scale: 1.05,
              duration: 0.15,
            },
            {
              scale: 1,
              duration: 0.1,
              clearProps: true,
            },
          ],
          onComplete: () => {
            setTimeout(() => resetFailureTimeline.play(), 2000)
          },
        })
    },
    [onClick]
  )

  return (
    <div className="group">
      <button
        ref={buttonRef}
        onClick={handleButtonClick}
        className="upload-button font-asap-bold bg-none border-none outline-none cursor-pointer p-0 m-0 text-center relative"
      >
        <div className="default">
          <div>
            {text
              .trim()
              .split("")
              .map((letter: any, index: any) => (
                <span key={index}>{letter}</span>
              ))}
          </div>
        </div>
        <div ref={successRef} className="success flex justify-between px-2">
          <div>
            {successText
              .trim()
              .split("")
              .map((letter: any, index: any) => (
                <span style={{ opacity: 0 }} key={index}>
                  {letter}
                </span>
              ))}
          </div>
        </div>
        <div
          ref={failureRef}
          className="failure flex justify-between px-2 hidden"
        >
          <div>
            {failureText
              .trim()
              .split("")
              .map((letter: any, index: any) => (
                <span style={{ opacity: 0 }} key={index}>
                  {letter}
                </span>
              ))}
          </div>
        </div>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <svg className={classSvg} viewBox="0 0 132 52">
          <path d="M2 11C2 7.13401 5.13401 4 9 4C12.866 4 39.7401 4 66 4C92.2599 4 119.134 4 123 4C126.866 4 130 7.13401 130 11V41C130 44.866 126.866 48 123 48C119.134 48 92.2599 48 66 48C39.7401 48 12.866 48 9 48C5.13401 48 2 44.866 2 41V11Z" />
        </svg>
      </button>
    </div>
  )
}

export default WaveBtn
