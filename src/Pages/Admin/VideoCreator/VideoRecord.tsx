import React, { lazy, useCallback, useEffect, useState } from "react"
import VideoRecorder, {
  RecorderModeEnum,
} from "../../Components/recorder/VideoRecorder"
import "animate.css/animate.css"

// const VideoRecorder = lazy(() => import("../Components/recorder/VideoRecorder"))
import { Store } from "react-notifications-component"
import { ReactNotifications } from "react-notifications-component"
const notify = () => {
  Store.addNotification({
    title: "Enregistrement",
    message: "Rêve traduit enregistré",
    type: "success",
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__bounceIn"],
    animationOut: ["animate__animated", "animate__bounceOut"],
    dismiss: {
      duration: 2000,
      onScreen: true,
    },
  })
}
const VideoRecord = () => {
  // tab
  //   const [activeTab, setActiveTab] = useState(1)

  //   const handleTabClick = (tabIndex: number) => {
  //     setActiveTab(tabIndex)
  //   }

  useEffect(() => {
    console.log("render")
  }, [])

  return (
    <div className="grid grid-flow-row p-5 space-y-5">
      <div className="flex justify-center text-2xl font-app">
        Ici sera enregistré votre rêve si vous le racontez dans cette
        enregistrement vidéo
      </div>

      <div className="w-full colspan-3 flex justify-center">
        {/* <div className="flex justify-center mb-5">
          <button
            className={`py-2 px-4 border-b-2 ${
              activeTab === 1
                ? "border-primary text-primary/100"
                : "border-secondary text-secondary/40"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Screen
          </button>
          <button
            className={`py-2 px-4 border-b-2  ${
              activeTab === 2
                ? "border-primary text-primary/100"
                : "border-secondary text-secondary/40"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Video
          </button>
        </div> */}
        {/* <div className=""> */}
        {/* <div
            className={`absolute inset-0 transition-all ease-in-out duration-500 ${
              activeTab === 1 ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <VideoRecorder id="myScreen" mode={RecorderModeEnum.SCREEN} />
          </div> */}
        <div className="w-full h-full">
          {/* <h2 className="text-lg text-center font-extrabold mb-4">Video Live</h2> */}
          <VideoRecorder id="myVideo" mode={RecorderModeEnum.VIDEO} />
        </div>
        {/* </div> */}
        <ReactNotifications />
      </div>

      <div className="flex justify-center">
        <button className="btn btn-primary" onClick={notify}>
          Enregistrer
        </button>
      </div>
    </div>
  )
}
export default VideoRecord
