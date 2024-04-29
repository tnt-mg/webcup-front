import React from "react"
import { AbsoluteFill, Sequence } from "remotion"
import Rain from "../scenes/Rain/Rain"
import { SlideInRight } from "../Transitions/SlideInRight"

export interface WebcupProp {
  title: string
}
export const WEBCUP_DURATION = 170
export const Webcup: React.FC<WebcupProp> = ({ title }) => {
  return (
    <AbsoluteFill className="w-full" style={{ backgroundColor: "white" }}>
      <Sequence>
        <Rain />
      </Sequence>
      <Sequence>
        <h1>Salut</h1>
      </Sequence>

      {/*<Sequence name="Title">*/}
      {/*  <div*/}
      {/*    style={{*/}
      {/*      fontSize: 156,*/}
      {/*      fontWeight: 800,*/}
      {/*      textAlign: "center",*/}
      {/*      position: "absolute",*/}
      {/*      top: 280,*/}
      {/*      width: "100%",*/}
      {/*      color: "#cd6262",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {title}*/}
      {/*  </div>*/}
      {/*</Sequence>*/}

      <SlideInRight backgroundColor={"red"} />
    </AbsoluteFill>
  )
}
