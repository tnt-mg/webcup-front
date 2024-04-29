// import  AWS from "aws-sdk"
//
const S3_BUCKET = import.meta.env.VITE_NEXT_PUBLIC_S3_BUCKET_NAME
const REGION = import.meta.env.VITE_NEXT_PUBLIC_S3_REGION
const ACCESS_KEY = import.meta.env.VITE_NEXT_PUBLIC_S3_ACCESS_KEY_ID
const SECRET_ACCESS_KEY = import.meta.env.VITE_NEXT_PUBLIC_S3_SECRET_ACCESS_KEY
const URL = import.meta.env.VITE_NEXT_PUBLIC_S3_URL

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

const s3 = new S3Client({
  region: REGION,
  credentials: {
    secretAccessKey: SECRET_ACCESS_KEY,
    accessKeyId: ACCESS_KEY,
  },
})

export const uploadS3 = async (file: File, filename: string) => {
  const params = {
    ACL: "public-read",
    Body: file,
    Bucket: S3_BUCKET,
    Key: filename,
  }
  const command = new PutObjectCommand(params)
  return await s3.send(command)
  // const s3 = new AWS.S3({region: REGION, params: {Bucket: S3_BUCKET}})
  // return s3.upload(params).promise()
}
