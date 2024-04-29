import { AbsoluteFill, Audio, Series } from "remotion"
import React from "react"

export interface TrailerProps {
  presenterLabel: string
  textOne: string
  textTwo: string
  textThree: string
  hackathonName: string
  music: any
  watermark: any
}

export const trailerDefaultProps: TrailerProps = {
  presenterLabel: "Association webcup",
  textOne: "Enjana be",
  textTwo: "Midev be loatra",
  textThree: "Tsy matory",
  hackathonName: "24H by webcup",
  music:
    "https://remotionlambda-webcup.s3.amazonaws.com/d9ba107f-fb63-45da-864e-65c44769016e.mp3", // always use staticFile to use assets from public
  watermark: "https://",
}

export const TRAILER_DURATION = 600

export const Trailer: React.FC<TrailerProps> = ({
  presenterLabel,
  hackathonName,
  textTwo,
  textThree,
  textOne,
  music,
}) => {
  // const frame = useCurrentFrame()
  // const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: "black" }}>
      <div>
        <Series>
          <Series.Sequence durationInFrames={90}>
            <div style={{ color: "white" }}>
              <h1>{presenterLabel}</h1>
              <h3>presents</h3>
            </div>
          </Series.Sequence>
          {/*<Transition durationInFrames={10} transitionComponent={(props) => <FadeThroughColor {...props} color="#000" /> } />*/}
          <Series.Sequence durationInFrames={70}>
            <h1 style={{ color: "white" }}>{textOne}</h1>
          </Series.Sequence>
          {/*<Transition durationInFrames={10} transitionComponent={(props) => <FadeThroughColor {...props} color="#000" /> } />*/}
          <Series.Sequence durationInFrames={80}>
            <h1 style={{ color: "white" }}>{textTwo}</h1>
          </Series.Sequence>
          {/*<Transition durationInFrames={10} transitionComponent={(props) => <FadeThroughColor {...props} color="#000" /> } />*/}
          <Series.Sequence durationInFrames={90}>
            <h1 style={{ color: "white" }}>{textThree}</h1>
          </Series.Sequence>
          {/*<Transition durationInFrames={10} transitionComponent={(props) => <FadeThroughColor {...props} color="#000" /> } />*/}
          <Series.Sequence durationInFrames={1500}>
            <h1 style={{ color: "white" }}>{hackathonName}</h1>
          </Series.Sequence>
        </Series>
      </div>

      <Audio src={music} volume={0.8} />

      {/*<Series.Sequence durationInFrames={300}>*/}
      {/*	<Chryon  text="Lorem ipsum dolor sit amet, consectetu ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />*/}
      {/*</Series.Sequence>*/}
      {/*<Series.Sequence durationInFrames={300}>*/}
      {/*	<Reveals />*/}
      {/*</Series.Sequence>*/}
    </AbsoluteFill>
  )
}
