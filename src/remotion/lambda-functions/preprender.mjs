import { bundle } from "@remotion/bundler"
import { getCompositions, renderMedia } from "@remotion/renderer"
import path from "path"
import * as data from "./sample-data.js"

const start = async (idRender, responses) => {
  // The composition you want to render
  const compositionId = "DreamTemplate"

  // You only have to do this once, you can reuse the bundle.
  const entry = "./src/remotion/index.ts"
  console.log("Creating a Webpack bundle of the video")
  const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
    // If you have a Webpack override, make sure to add it here
    webpackOverride: (config) => config,
  })

  const start = async (idRender, responses) => {
    // The composition you want to render
    const compositionId = "DreamTemplate"

    // You only have to do this once, you can reuse the bundle.
    const entry = "./src/remotion/index.ts"
    console.log("Creating a Webpack bundle of the video")
    const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
      // If you have a Webpack override, make sure to add it here
      webpackOverride: (config) => config,
    })

    // Parametrize the video by passing arbitrary props to your component.

    // Extract all the compositions you have defined in your project
    // from the webpack bundle.
    const comps = await getCompositions(bundleLocation, {
      // You can pass custom input props that you can retrieve using getInputProps()
      // in the composition list. Use this if you want to dynamically set the duration or
      // dimensions of the video.
      inputProps: {
        responses,
      },
    })

    // Select the composition you want to render.
    const composition = comps.find((c) => c.id === compositionId)

    // Ensure the composition exists
    if (!composition) {
      throw new Error(`No composition with the ID ${compositionId} found.
  Review "${entry}" for the correct ID.`)
    }

    const outputLocation = `out/${idRender}.mp4`
    console.log("Attempting to render:", outputLocation)
    await renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: "h264",
      outputLocation,
      inputProps: {
        responses,
      },
    })
    console.log("Render done!")
  }

  // work
  start(1, data.workData)

  // love
  start(2, data.loveData)

  // travel
  start(3, data.travelData_3)
  start(4, data.travelData_4)
  start(5, data.travelData_5)
  start(6, data.travelData_6)

  // finance
  start(7, data.financeData_7)
  start(8, data.financeData_8)
  start(9, data.financeData_9)
}
