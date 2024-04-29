import AgoraRTC from "agora-rtc-sdk"
import { RtcClient } from "./RtcClient"

export class RtcClientHost extends RtcClient {
  constructor() {
    super()
  }

  publishStream() {
    return new Promise((resolve, reject) => {
      // Create a local stream
      this.stream = AgoraRTC.createStream({
        streamID: this.agoraOption!!.uid,
        audio: true,
        video: true,
        screen: false,
      })

      // this.stream.setVideoProfile()
      // Initialize the local stream
      this.stream.init(
        () => {
          console.log("init local stream success")
          resolve(this.stream)
          // Publish the local stream
          this.client.publish(this.stream)
        },
        (err: any) => {
          reject(err)
          console.error("init local stream failed ", err)
        }
      )
    })
  }

  getRole(): string {
    return "host"
  }

  handleEventPeerLeave(event: any): void {}

  handleEventPeerOnline(event: any): void {}

  handleEventStreamAdded(event: any): void {
    const { stream } = event
    this.client.subscribe(stream)
  }

  handleEventStreamRemoved(event: any): void {}

  handleEventStreamSubscribed(event: any): void {}

  leaveChannel(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.unpublish(this.stream, (err: any) => {
        console.log(err)
      })
      this.client.leave(
        () => {
          // Stop playing the local stream
          if (this.stream.isPlaying()) {
            this.stream.stop()
          }
          // Close the local stream
          this.stream.close()
          this.client = null
          resolve()
          console.log("client leaves channel success")
        },
        (err: any) => {
          reject(err)
          console.log("channel leave failed")
          console.error(err)
        }
      )
    })
  }
}
