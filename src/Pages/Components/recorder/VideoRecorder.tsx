import React, { useEffect, useState } from "react"
import videojs from "video.js"
import "video.js/dist/video-js.min.css"
import "videojs-record/dist/css/videojs.record.min.css"
import "videojs-record/dist/videojs.record.js"

export enum RecorderModeEnum {
  VIDEO,
  SCREEN,
}
interface VideoRecorderProps {
  mode: RecorderModeEnum
  id: string
}
const VideoRecorder: React.FC<VideoRecorderProps> = ({ id, mode }) => {
  const recorderOptions = {
    // video.js options
    controls: true,
    bigPlayButton: false,
    loop: false,
    fluid: false,
    width: 500,
    height: 240,
    controlBar: {
      fullscreenToggle: false,
    },
    plugins: {
      // videojs-record plugin options
      record: {
        image: false,
        audio: true,
        video: mode == RecorderModeEnum.VIDEO,
        screen: mode == RecorderModeEnum.SCREEN,
        pip: true,
        maxLength: 3600,
        displayMilliseconds: false,
        // videoMimeType: 'video/webm;codecs=H264',
        debug: true,
      },
    },
  }
  let player: any = {}

  useEffect(() => {
    initPlayerAndEvent()
  }, [recorderOptions])

  const initPlayerAndEvent = () => {
    player = videojs(id, recorderOptions, function () {
      // print version information at startup
      const msg =
        "Using video.js " +
        videojs.VERSION +
        " with videojs-record " +
        videojs.getPluginVersion("record")
      videojs.log(msg)

      console.log("videojs-record is ready!")
    })

    // error handling
    player.on("deviceError", () => {
      console.log("device error:", player.deviceErrorCode)
    })

    player.on("error", function (element: any, error: any) {
      console.error(error)
    })

    // user clicked the record button and started recording
    player.on("startRecord", function () {
      console.log("started recording!")
    })

    // user completed recording and stream is available
    player.on("finishRecord", () => {
      // the blob object contains the recorded data that
      // can be downloaded by the user, stored on server etc.
      console.log("finished recording: ", player.recordedData)

      player.record().stopDevice()
      //TODO  show notifcation here
    })
  }

  return (
    <div className="flex justify-center">
      <video
        id={id}
        playsInline
        className="video-js vjs-default-skin rounded-lg w-[400px] md:w-[620px] lg:w-[920px] h-[300px] md:h-[400px] lg:h-[520px]"
      />
    </div>
  )
}

export default VideoRecorder
