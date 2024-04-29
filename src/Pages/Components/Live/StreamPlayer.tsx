import React, { useEffect, useState } from "react"
import "./player.css"
import StreamControl, { ControlEnum, IControls } from "./StreamControl"

interface PlayerProps {
  stream: any
  playerId: string
  onLeave: () => void
}

const StreamPlayer: React.FC<PlayerProps> = ({ stream, playerId, onLeave }) => {
  const [controls, setControls] = useState<IControls>({
    enableAudio: true,
    enableVideo: true,
  })

  const handleSwitchController = (type: ControlEnum) => {
    switch (type) {
      case ControlEnum.AUDIO:
        setControls((prevState) => ({
          ...prevState,
          enableAudio: !prevState.enableAudio,
        }))
        !controls.enableAudio ? stream.unmuteAudio() : stream.muteAudio()
        break
      case ControlEnum.VIDEO:
        setControls((prevState) => ({
          ...prevState,
          enableVideo: !prevState.enableVideo,
        }))
        !controls.enableVideo ? stream.unmuteVideo() : stream.muteVideo()
        break
      case ControlEnum.LEAVE:
        onLeave()
        break
      default:
        null
        break
    }
  }
  useEffect(() => {
    console.log("reveice stream", stream, playerId)
    if (stream && playerId && !stream.isPlaying()) {
      stream.play(`${playerId}`, { fit: "cover" }, (err: any) => {
        console.log("after play", playerId)
        if (err && err.status !== "aborted") {
          console.warn("trigger autoplay policy")
        }
      })
    }
  }, [])
  return (
    <>
      {playerId && (
        <>
          <div className="agora-video-player relative" id={playerId}>
            <StreamControl
              toogleControl={handleSwitchController}
              controls={controls}
            />
            <h3 className="badge badge-success absolute mr-1 mt-1 right-0 top-15 z-50">
              Live
            </h3>
          </div>
        </>
      )}
    </>
  )
}

export default StreamPlayer
