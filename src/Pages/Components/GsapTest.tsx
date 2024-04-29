import "./gsap.css"
import React, { useEffect } from "react"
import { gsap } from "gsap"
import { MorphSVGPlugin } from "../../gsap/MorphSVGPlugin"
import { Physics2DPlugin } from "../../gsap/Physics2DPlugin"
//@ts-nocheck

export const GsapTest = () => {
  useEffect(() => {
    const { to, registerPlugin, set, timeline } = gsap

    gsap.registerPlugin(MorphSVGPlugin, Physics2DPlugin)

    //gsap.globalTimeline.timeScale(.1);

    document.querySelectorAll(".add-to-cart").forEach((button) => {
      let background = button.querySelector(".background path")
      button.addEventListener("pointerdown", (e) => {
        if (button.classList.contains("active")) {
          return
        }
        to(button, {
          "--background-s": 0.97,
          duration: 0.1,
        })
      })
      button.addEventListener("click", (e) => {
        e.preventDefault()
        if (button.classList.contains("active")) {
          return
        }
        button.classList.add("active")
        to(button, {
          keyframes: [
            {
              "--background-s": 0.97,
              duration: 0.1,
            },
            {
              "--background-s": 1,
              delay: 0.1,
              duration: 0.8,
              ease: "elastic.out(1, .6)",
            },
          ],
        })
        to(button, {
          "--text-x": "16px",
          "--text-o": 0,
          duration: 0.2,
        })
        to(button, {
          keyframes: [
            {
              "--cart-x": "-12px",
              "--cart-s": 1,
              duration: 0.25,
            },
            {
              "--bottle-s": 1,
              "--bottle-o": 1,
              duration: 0.15,
              onStart() {
                to(button, {
                  duration: 0.4,
                  keyframes: [
                    {
                      "--bottle-r": "-8deg",
                    },
                    {
                      "--bottle-r": "8deg",
                    },
                    {
                      "--bottle-r": "0deg",
                    },
                  ],
                })
              },
            },
            {
              "--bottle-y": "0px",
              duration: 0.3,
              delay: 0.15,
              onStart() {
                to(background, {
                  keyframes: [
                    {
                      morphSVG:
                        "M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 12 72.5547 12C82.6251 12 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z",
                      duration: 0.1,
                      delay: 0.18,
                    },
                    {
                      morphSVG:
                        "M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 4 72.5547 4C82.6251 4 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z",
                      duration: 0.8,
                      ease: "elastic.out(1, .6)",
                    },
                  ],
                })
                to(button, {
                  "--bottle-s": 0.5,
                  duration: 0.15,
                })
              },
            },
            {
              "--cart-y": "3px",
              duration: 0.1,
              onStart() {
                to(button, {
                  keyframes: [
                    {
                      "--check-y": "24px",
                      "--check-s": 1,
                      duration: 0.25,
                    },
                    {
                      "--check-offset": "0px",
                      duration: 0.25,
                    },
                  ],
                })
              },
            },
            {
              "--cart-y": "0px",
              duration: 0.2,
            },
            {
              "--cart-x": "-6px",
              "--bottle-r": "12deg",
              "--bottle-x": "-25%",
              duration: 0.15,
            },
            {
              "--cart-x": "-16px",
              "--bottle-r": "-12deg",
              "--bottle-x": "-50%",
              duration: 0.2,
            },
            {
              "--cart-x": "92px",
              "--cart-r": "-20deg",
              duration: 0.4,
              onStart() {
                button.classList.add("clipped")
              },
              onComplete() {
                set(button, {
                  "--cart-x": "-120px",
                  "--cart-s": 0.8,
                  "--cart-y": "-2px",
                  "--bottle-o": 0,
                  "--text-x": "2px",
                })
              },
            },
            {
              "--cart-x": "-57px",
              "--cart-r": "0deg",
              "--check-s": 0,
              duration: 0.3,
              delay: 0.1,
              clearProps: true,
              onStart() {
                to(button, {
                  "--text-x": "10px",
                  "--text-o": 1,
                  duration: 0.2,
                  delay: 0.1,
                })
              },
              onComplete() {
                button.classList.remove("active", "clipped")
              },
            },
          ],
        })
      })
    })
  }, [])
  return (
    <>
      <div>
        <button className="add-to-cart">
          <div className="cart">
            <svg viewBox="0 0 24 19">
              <path
                d="M11.25 17C11.25 17.6904 10.6904 18.25 10 18.25C9.30964 18.25 8.75 17.6904 8.75 17C8.75 16.3096 9.30964 15.75 10 15.75C10.6904 15.75 11.25 16.3096 11.25 17Z"
                strokeWidth="1.5 "
              />
              <path
                d="M19.25 17C19.25 17.6904 18.6904 18.25 18 18.25C17.3096 18.25 16.75 17.6904 16.75 17C16.75 16.3096 17.3096 15.75 18 15.75C18.6904 15.75 19.25 16.3096 19.25 17Z"
                strokeWidth="1.5 "
              />
              <path
                d="M1 1H5L5.91304 4M5.91304 4L8.06853 11.0823C8.32483 11.9245 9.10161 12.5 9.98188 12.5H18.585C19.4329 12.5 20.1887 11.9653 20.471 11.1656L23 4H5.91304Z"
                strokeWidth={2}
              />
            </svg>
            <img srcSet="https://assets.codepen.io/165585/alge.png 1x, https://assets.codepen.io/165585/alge@2x.png 2x" />
          </div>
          <span>Add to cart</span>
          <div className="check">
            <svg viewBox="0 0 10 10">
              <path d="M2 5L4 7L8 3" />
            </svg>
          </div>
          <svg className="background" viewBox="0 0 142 46">
            <path d="M0 19C0 10.7157 6.71573 4 15 4H41.4599C53.6032 4 62.4844 4 72.5547 4C82.6251 4 91.5063 4 103.65 4H137C139.761 4 142 6.23858 142 9V31C142 39.2843 135.284 46 127 46H5C2.23858 46 0 43.7614 0 41V19Z" />
          </svg>
        </button>
      </div>
    </>
  )
}
