import { Audio } from "remotion"

export const SlideInRight: React.FC<{ backgroundColor: string }> = ({
  backgroundColor,
}) => {
  const { width, height } = useVideoConfig()
  const frame = useCurrentFrame()
  const leftInterpolation = interpolate(frame, [0, 40], [width, -width], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  })
  return (
    <>
      <div
        className="absolute top-0"
        style={{
          width,
          height,
          backgroundColor,
          position: "absolute",
          left: leftInterpolation,
        }}
      />
      {/*<Audio />*/}
    </>
  )
}
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion"

import React from "react"
