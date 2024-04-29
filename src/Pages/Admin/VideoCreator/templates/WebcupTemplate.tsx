import React, { useState } from "react"
import { WEBCUP_DURATION } from "../../../../remotion/compositions/Webcup"
import { Webcup } from "../../../../remotion/compositions/Webcup"
import VideoCreatorPlayer from "../VideoCreatorPlayer"
import VideoCreateConfigurationLayout from "../VideoCreateConfigurationLayout"
const WebcupTemplate = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 space-5">
      <div className="col-span-1 lg:col-span-3 flex justify-center items-center">
        <VideoCreatorPlayer
          durationInFrames={WEBCUP_DURATION}
          component={Webcup}
          inputProps={{ title: "Salut" }}
          exportProps={{} as any}
        />
      </div>
      <div className="gap-3 col-span-1 mr-2">
        <VideoCreateConfigurationLayout
          onExport={() => {}}
          onWatermarkAdded={() => {}}
          onMusicAdded={() => {}}
        >
          <div className="relative z-0 group my-2">
            <input
              type="text"
              id="text2"
              className="input-floating border-current/50 focus:border-current !text-current peer"
              placeholder=" "
            />
            <label
              htmlFor="text2"
              className="label-floating text-current peer-focus:text-current"
            >
              Titre
            </label>
          </div>
        </VideoCreateConfigurationLayout>
      </div>
    </div>
  )
}

export default WebcupTemplate
