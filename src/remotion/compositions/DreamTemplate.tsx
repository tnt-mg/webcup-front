import React from "react"
import { AbsoluteFill, Audio, Img, Sequence, staticFile } from "remotion"
import "../scenes/intro/jum.css"
import Intro, { IntroProps } from "../scenes/intro"
import DreamRight from "../scenes/Reveals/DreamRight"
import DreamLeft from "../scenes/Reveals/DreamLeft"
import DreamPortrait from "../scenes/Reveals/DreamPortrait"
import Outro from "../scenes/outro"
import Rain from "../scenes/Rain/Rain"
import { globalFontStyle } from "../style.utl"
import { DreamType } from "./DreamType"
import { SlideInRight } from "../Transitions/SlideInRight"
import Labels from "../scenes/labels"

const container: React.CSSProperties = {
  backgroundColor: "white",
}

export enum LabelPositionEnum {
  TOP_RIGHT,
  TOP_LEFT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
}

export interface LabelsProps {
  image: string
  position: LabelPositionEnum
}

export interface DreamTemplateProps {
  name: string
  responses: DreamType[]
  music: string
  watermark: string
  labels: LabelsProps
  intros: IntroProps
}

export const dreamTemplateDefaultProps: DreamTemplateProps = {
  /*music:
    "https://remotionlambda-webcup.s3.amazonaws.com/79fff880-eda0-4186-9fdb-b1ca5db3ade2.mp3",*/
  music: staticFile("brothers.mp3"),
  name: "Hernaval",
  responses: [
    { year: 2023, topic: "Voyage", value: "Passport", image: "passport.jpg" },
    { year: 2024, topic: "Voyage", value: "Maurice", image: "maurice.jpg" },
    { year: 2025, topic: "Voyage", value: "Canada ", image: "canada.jpg" },
    { year: 2026, topic: "Voyage", value: "Dubai", image: "dubai.jpg" },
  ],
  watermark: staticFile("/travel.jpg"),
  labels: {
    image: staticFile("/logo.svg"),
    position: LabelPositionEnum.BOTTOM_RIGHT,
  },
  intros: {
    question: "Maintenant, regarder si votre rêve se réalisera",
    labelName: "Onyrix",
    labelDescription: "Votre décodeur de rêve universel",
  },
}

export const DREAM_TEMPLATE_DURATION = 860
const DreamTemplate: React.FC<DreamTemplateProps> = ({
  music,
  name,
  responses,
  watermark,
  labels,
  intros,
}) => {
  return (
    <AbsoluteFill style={{ ...container, ...globalFontStyle }}>
      <Intro
        question={intros.question}
        labelName={intros.labelName}
        labelDescription={intros.labelDescription}
      />
      <Sequence from={240} name="labels">
        <Labels image={labels.image} position={labels.position} />
      </Sequence>
      <Sequence from={240}>
        <SlideInRight backgroundColor="red" />
      </Sequence>
      <Sequence from={270} durationInFrames={4 * 30}>
        <DreamRight item={{ ...responses[0] }} watermark={watermark} />
      </Sequence>
      <Sequence from={270 + 120} durationInFrames={4 * 30}>
        <DreamLeft item={{ ...responses[1] }} watermark={watermark} />
      </Sequence>
      <Sequence from={270 + 120 + 120} durationInFrames={4 * 30}>
        <DreamPortrait item={{ ...responses[2] }} watermark={watermark} />
      </Sequence>
      <Sequence from={270 + 120 + 120 + 120} durationInFrames={4 * 30}>
        <DreamLeft item={{ ...responses[3] }} watermark={watermark} />
      </Sequence>
      <Sequence from={270 + 120 + 120 + 120}>
        <Rain />
      </Sequence>
      <Sequence from={270 + 120 + 120 + 120 + 120}>
        <Outro />
      </Sequence>
      <Audio src={music} volume={0.8} />
    </AbsoluteFill>
  )
}
DreamTemplate.defaultProps = dreamTemplateDefaultProps

export default DreamTemplate
