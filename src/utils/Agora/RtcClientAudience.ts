import { RtcClient } from "./RtcClient"

export class RtcClientAudience extends RtcClient {
  getRole(): string {
    return "audience"
  }

  leaveChannel(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.leave()
      resolve()
    })
  }

  handleEventPeerLeave(event: any): void {}

  handleEventPeerOnline(event: any): void {}

  handleEventStreamAdded(event: any): void {
    const { stream } = event
    this.client.subscribe(stream)
  }

  handleEventStreamRemoved(event: any): void {}

  handleEventStreamSubscribed(event: any): void {
    // alert("anyone is subscribing")
    // const {stream} = event
    // console.log("subs", stream)
    // this.stream = stream
  }
}
