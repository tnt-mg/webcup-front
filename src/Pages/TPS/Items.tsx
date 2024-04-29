import { Html, useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useContext, useRef, useState } from "react"
import { Vector3 } from "three"
import { Controls, ModalContext } from "./Tps"

export const Items = (props: any) => {
  const actionPressed = useKeyboardControls<Controls>((state) => state.action)
  const colliderItemsRef = useRef<{ [key: string]: { c: Vector3; r: number } }>(
    {
      sand: {
        c: new Vector3(-3.99, 0.875, -28.325),
        r: 0.5,
      },
      snow: {
        c: new Vector3(30.24, 0.98, 11.365),
        r: 0.5,
      },
      grass: {
        c: new Vector3(-30.485, 0.91, 9.895),
        r: 0.5,
      },
    }
  )
  const currentActive = useRef<string>(null!)
  const hasBeenCalled = useRef<boolean>(false)
  const divContainerRef = useRef<HTMLDivElement>(null!)
  const progressCircleRef = useRef<SVGCircleElement>(null!)

  const { setModalActive } = useContext(ModalContext)

  useFrame((state, delta) => {
    let isActive = false
    Object.entries(colliderItemsRef.current).forEach(([name, item]) => {
      const distance = props.persoRef.current
        .getPersoPosition()
        .distanceTo(item.c)
      if (distance < 2.5) {
        isActive = true
        if (divContainerRef.current && currentActive.current != name) {
          currentActive.current = name
          divContainerRef.current.classList.remove("hidden")
        }
        const oldValue = Number(
          progressCircleRef.current.style.strokeDashoffset.replace("px", "")
        )
        if (actionPressed) {
          let newValue = oldValue - delta * 150
          if (newValue < 360) {
            newValue = 360
            if (!hasBeenCalled.current) {
              setModalActive(currentActive.current)
              hasBeenCalled.current = true
            }
          }
          progressCircleRef.current.style.strokeDashoffset = newValue.toString()
        } else {
          let newValue = oldValue + delta * 250
          if (newValue > 500) {
            newValue = 500
            hasBeenCalled.current = false
          }
          progressCircleRef.current.style.strokeDashoffset = newValue.toString()
        }
      }
    })
    if (!isActive) {
      currentActive.current = ""
      if (
        divContainerRef.current &&
        !divContainerRef.current.classList.contains("hidden")
      ) {
        divContainerRef.current.classList.add("hidden")
      }
    }
  })
  return (
    <Html>
      <div
        className="h-[75px] w-[75px] ml-[75px] -mt-[75px] p-0 relative bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-full"
        ref={divContainerRef}
      >
        <svg viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="21"
            style={{ stroke: "rgba(0, 0, 0, .1)" }}
            className="fill-transparent stroke-[7px]"
          ></circle>
          <circle
            ref={progressCircleRef}
            cx="25"
            cy="25"
            r="21"
            style={{
              strokeDashoffset: 500,
              strokeDasharray: 500,
              stroke: "rgba(0,0,0,.5)",
            }}
            className="fill-transparent stroke-[7px]"
          ></circle>
        </svg>
        <div
          style={{ color: "rgba(0,0,0,.7)" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-2xl"
        >
          F
        </div>
      </div>
    </Html>
  )
}
