import React from "react"
import ColorBars from "../ColorsBars"
import {
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import { Title } from "../intro/Title"
import { Subtitle } from "../intro/Subtitle"
import { Logo } from "../intro/Logo"
import { centerStyle } from "../../style.utl"

const Outro = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()

  return (
    <div>
      <div>
        {/*<ColorBars />*/}
        <Sequence from={760}>
          <Title titleText="Onyrix" titleColor="#f08686" />
        </Sequence>
        <Sequence from={790}>
          <Subtitle subtitleText="Votre décodeur de rêve international" />
        </Sequence>
        <Logo />
      </div>
    </div>
  )
}

export default Outro
