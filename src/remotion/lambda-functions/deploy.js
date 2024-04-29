import * as path from "path"
import { deploySite } from "@remotion/lambda"
import * as dotenv from "dotenv"
dotenv.config()
const bucketName = "remotionlambda-webcup"
const { serveUrl } = await deploySite({
  bucketName,
  entryPoint: path.resolve(process.cwd(), "src/remotion/index.tsx"),
  region: "us-east-1",
  siteName: "WebcupVideo",
})

console.log("server url is", serveUrl)
