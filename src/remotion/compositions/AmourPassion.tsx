import React from "react"
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion"
import "../scenes/intro/jum.css"
import Intro from "../scenes/intro"
import Reveals from "../scenes/Reveals/Reveals"
import DreamRight from "../scenes/Reveals/DreamRight"
import DreamLeft from "../scenes/Reveals/DreamLeft"
import DreamPortrait from "../scenes/Reveals/DreamPortrait"

const container: React.CSSProperties = {
  backgroundColor: "white",
}
export interface AmourPassionProps {}

export const AMOUR_PASSION_DURATION = 600
const AmourPassion: React.FC<AmourPassionProps> = () => {
  return (
    <AbsoluteFill style={{ ...container }}>
      {/*<Intro question="Quelle est votre situation ? " />*/}

      <Sequence from={0}>
        <DreamRight item={{} as any} watermark="" />
        {/*<DreamPortrait />*/}
      </Sequence>
    </AbsoluteFill>
  )
}

export default AmourPassion
