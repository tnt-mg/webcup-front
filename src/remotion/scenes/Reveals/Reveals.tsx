import React from "react"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

const Reveals = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const appear = spring({ fps, frame, config: { mass: 10, damping: 50 } })
  const scale = interpolate(appear, [0, 1], [0, 1])
  const flip = spring({
    fps,
    frame: frame - 70,
    config: { mass: 10, damping: 50 },
  })

  const flipValue = interpolate(flip, [0, 0.5, 1], [-1, 0, 1])
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        backgroundColor: "green",
        // Background blur filter
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",

        padding: "20px",
        perspective: "100px",
        transform: `scale(${scale}) rotateY(${
          90 - Math.abs(flipValue) * 90
        }deg)`,
      }}
    >
      test BE
    </div>
  )
}

export default Reveals
