import React from "react"
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { centerStyle } from "../../style.utl"

export const Logo = () => {
  // Animate from 0 to 1 after 25 frames
  const frame = useCurrentFrame()
  const { fps, durationInFrames } = useVideoConfig()

  // Fade out the animation at the end

  const logoTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  })

  // Move the logo up by 150 pixels once the transition starts
  const logoTranslation = interpolate(logoTranslationProgress, [0, 1], [0, -90])
  return (
    <AbsoluteFill style={{ ...centerStyle }}>
      <div style={{ transform: `translateY(${logoTranslation}px)` }}>
        <Img
          src={staticFile("/remotion/watermark.png")}
          width={500}
          height={200}
        />
      </div>
    </AbsoluteFill>
  )
}
