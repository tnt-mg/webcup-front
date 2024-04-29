import { renderMediaOnLambda, getRenderProgress } from "@remotion/lambda"
import * as dotenv from "dotenv"
dotenv.config()

const functionName = "remotion-render-3-3-83-mem2048mb-disk2048mb-120sec"
const url =
  "https://remotionlambda-webcup.s3.us-east-1.amazonaws.com/sites/WebcupVideo/index.html"

// const { renderId, bucketName } = await renderMediaOnLambda({
//   region: "us-east-1",
//   functionName,
//   serveUrl: url,
//   composition: "DreamTemplate",
//   inputProps: {
//     name: "hernaval",
//     music:
//       "https://remotionlambda-webcup.s3.amazonaws.com/79fff880-eda0-4186-9fdb-b1ca5db3ade2.mp3",
//     responses: [
//       {
//         year: 2024,
//         image: "",
//         index: 3,
//         topic: "Voyage",
//         value: "Canada",
//       },
//       {
//         year: 2025,
//         image: "",
//         index: 1,
//         topic: "Voyage",
//         value: "Pas de voyage prevu",
//       },
//       {
//         year: 2026,
//         image: "",
//         index: 5,
//         topic: "Voyage",
//         value: "Dubai",
//       },
//       {
//         year: 2027,
//         image: "",
//         index: 4,
//         topic: "Voyage",
//         value: "Maurice",
//       },
//     ],
//     watermark: "https://",
//   },
//   codec: "h264",
//   imageFormat: "jpeg",
//   maxRetries: 1,
//   framesPerLambda: 20,
//   privacy: "public",
//   outName: "trailer.mp4",
// })
//
// console.log(`render id ${renderId} in bucket ${bucketName}`)

while (true) {
  await new Promise((resolve) => setTimeout(resolve, 5000)) // very important to limit call to lambda function 1 per 5 seconds
  const progress = await getRenderProgress({
    renderId: "t9w66xkfce",
    bucketName: "remotionlambda-webcup",
    functionName,
    region: "us-east-1",
  })
  console.log(progress)
  if (progress.done) {
    console.log("Render finished!", progress.outputFile)
    process.exit(0)
  }
  if (progress.fatalErrorEncountered) {
    console.error("Error enountered", progress.errors)
    process.exit(1)
  }
}
