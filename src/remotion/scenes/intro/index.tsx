import React from "react"
import ColorBars from "../ColorsBars"
import {
  Img,
  interpolate,
  Sequence,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { Title } from "./Title"
import { Subtitle } from "./Subtitle"
import { Logo } from "./Logo"
import { centerStyle } from "../../style.utl"
import Dot from "./Dot"
import Moon from "./Moon"

const watermarkStyle: React.CSSProperties = {
  position: "absolute",
  marginLeft: 50,
  marginTop: 200,
}

const dotStyle: React.CSSProperties = {
  position: "absolute",
  marginLeft: 400,
  marginTop: 100,
}
const moonStyle: React.CSSProperties = {
  position: "absolute",
  marginLeft: 400,
  marginTop: 470,
}

export interface IntroProps {
  question: string
  labelName: string
  labelDescription: string
}
const Intro: React.FC<IntroProps> = ({
  question,
  labelName,
  labelDescription,
}) => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  // to remove the intro
  const opacity = interpolate(
    frame,
    [durationInFrames - 760, durationInFrames - 740],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  )
  return (
    <div>
      <div style={{ opacity }}>
        <ColorBars />
        <Sequence from={35}>
          <Title titleText={labelName} titleColor="#f08686" />
        </Sequence>
        <Sequence from={75}>
          <Subtitle subtitleText={labelDescription} />
        </Sequence>
        <Logo />
      </div>

      <Sequence from={130} style={{ ...centerStyle }} durationInFrames={4 * 30}>
        <p className="text">{question}</p>
      </Sequence>

      <Sequence
        from={270}
        style={{ ...watermarkStyle }}
        durationInFrames={630 - 270}
      >
        <Img src={staticFile("/logo-squared.svg")} width={50} height={50} />
      </Sequence>

      <Sequence from={270} style={{ ...dotStyle }} durationInFrames={630 - 270}>
        <Dot />
      </Sequence>
      <Sequence
        from={270}
        style={{ ...moonStyle }}
        durationInFrames={630 - 270}
      >
        <Moon />
      </Sequence>
    </div>
  )
}

export default Intro
