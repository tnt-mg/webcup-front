import { Webcup } from "./compositions/Webcup"
import { Composition } from "remotion"
import {
  Trailer,
  TRAILER_DURATION,
  trailerDefaultProps,
} from "./compositions/Trailer"

import { WEBCUP_DURATION } from "./compositions/Webcup"
import DreamTemplate, {
  DREAM_TEMPLATE_DURATION,
} from "./compositions/DreamTemplate"

const Root = () => {
  return (
    <>
      <Composition
        id="Webcup"
        component={Webcup}
        fps={30}
        width={1920}
        height={1080}
        durationInFrames={WEBCUP_DURATION}
      />
      <Composition
        width={760}
        height={600}
        component={DreamTemplate}
        id="DreamTemplate"
        fps={30}
        durationInFrames={DREAM_TEMPLATE_DURATION}
      />
      {/*<Composition*/}
      {/*  id="Trailer"*/}
      {/*  component={Trailer}*/}
      {/*  fps={30}*/}
      {/*  width={1920}*/}
      {/*  height={1080}*/}
      {/*  durationInFrames={TRAILER_DURATION}*/}
      {/*  defaultProps={trailerDefaultProps}*/}
      {/*/>*/}
    </>
  )
}

export default Root
