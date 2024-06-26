import React from "react"
import { interpolate, useCurrentFrame } from "remotion"
import { FONT_FAMILY } from "../../constants"

const subtitle: React.CSSProperties = {
  fontFamily: FONT_FAMILY,
  fontSize: 26,
  textAlign: "center",
  position: "absolute",
  bottom: 140,
  width: "100%",
}

export const Subtitle: React.FC<{ subtitleText: string }> = ({
  subtitleText,
}) => {
  const frame = useCurrentFrame()
  const opacity = interpolate(frame, [0, 30], [0, 1])
  return <div style={{ ...subtitle, opacity }}>{subtitleText}</div>
}
