import React, { useEffect, useState } from "react"
import AgoraUIKit, { RtcPropsInterface } from "agora-react-uikit"
import { RtcClientAudience } from "../../../utils/Agora/RtcClientAudience"
import { rtcProps } from "./rtcProps"
import StreamPlayer from "../../Components/Live/StreamPlayer"

const LiveJoin = () => {
  const [remoteStream, setRemoteStream] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  let rtc = new RtcClientAudience()
  const joinLive = async () => {
    setIsLoading(true)
    await rtc.joinChannel(rtcProps)

    rtc.getClient().on("stream-subscribed", (evt: any) => {
      console.log("remote stream subscribed")
      const { stream } = evt
      setRemoteStream(stream)

      setIsLoading(false)
    })
  }

  const quitLive = () => {
    rtc.leaveChannel().then(() => {
      setRemoteStream(null)
    })
  }

  return (
    <div className="h-screen ">
      <div className="grid grid-cols-1">
        <div> Live 1</div>
        <div> Live 2</div>
        <div> Live 3</div>
      </div>
      <button className="btn btn-sm sm:btn-md btn-warning" onClick={joinLive}>
        Rejoindre maintenant
      </button>

      <div className="w-full">
        {isLoading && <p>En cours...</p>}
        {remoteStream && (
          <StreamPlayer
            playerId={remoteStream.getId()}
            stream={remoteStream}
            onLeave={quitLive}
          />
        )}
      </div>
    </div>
  )
}

export default LiveJoin
