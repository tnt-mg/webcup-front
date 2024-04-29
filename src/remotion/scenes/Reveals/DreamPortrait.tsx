import React from "react"
import {
  AbsoluteFill,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { centerStyle } from "../../style.utl"
import { DreamTypeProps } from "../../compositions/DreamType"

const stackedStyle: React.CSSProperties = {
  // position: 'relative',
  // top: 0,
  // left: 0,
}

const imageOne: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  // left: 320,
  // boxShadow: ' 24px 18px 34px -2px rgba(199,136,136,0.6)'
}

const imageTwo: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  top: 50,
  left: -100,
  border: "1px solid blue",
  boxShadow: " 24px 18px 34px -2px rgba(199,136,136,0.6)",
}

const resultStyle: React.CSSProperties = {
  position: "absolute",
  alignSelf: "center",
  left: 390,
  top: 250,
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
}

const yearTextStyle: React.CSSProperties = {
  fontSize: 50,
  fontWeight: "bold",
  margin: "0 important",
  textDecoration: "underline",
  letterSpacing: 10,
  color: "#9d060a",
}

const resultTextStyle: React.CSSProperties = {
  fontSize: 14,
  color: "#0f18ad",
}
const DreamPortrait: React.FC<DreamTypeProps> = ({
  item: { year, value, topic, image },
  watermark,
}) => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  const scale =
    frame <= durationInFrames * 0.2
      ? interpolate(frame, [0, durationInFrames * 0.1], [2, 1.1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })
      : interpolate(
          frame,
          [durationInFrames * 0.2, durationInFrames],
          [1.1, 0.8],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }
        )
  return (
    <AbsoluteFill
      style={{
        ...stackedStyle,
        ...centerStyle,
        alignItems: "start",
        flexDirection: "row",
        marginTop: 100,
        marginLeft: 70,
        width: "100%",
        transform: `scale(${scale})`,
      }}
    >
      <div style={{ ...imageOne }}>
        <Img
          src={staticFile(`/remotion/${watermark}`)}
          width={300}
          height={400}
        />
      </div>
      <Img
        src={staticFile(`/remotion/${image}`)}
        style={{ ...imageTwo }}
        width={300}
        height={200}
      />
      <div style={{ ...resultStyle }}>
        <div style={{ ...yearTextStyle }}>{year}</div>
        <div style={{ ...resultTextStyle }}>Tu sera, {value}</div>
      </div>
    </AbsoluteFill>
  )
}

export default DreamPortrait
