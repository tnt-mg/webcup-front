import { AgoraOption } from "./AgoraOption"
import AgoraRTC from "agora-rtc-sdk"

export abstract class RtcClient {
  protected client: any
  protected stream: any
  protected agoraOption: AgoraOption | null
  constructor() {
    this.client = null
    this.agoraOption = null
    this.stream = null
  }
  abstract leaveChannel(event: any): Promise<void>
  abstract handleEventStreamAdded(event: any): void
  abstract handleEventStreamSubscribed(event: any): void
  abstract handleEventStreamRemoved(event: any): void
  abstract handleEventPeerLeave(event: any): void
  abstract handleEventPeerOnline(event: any): void
  abstract getRole(): string
  joinChannel(option: AgoraOption) {
    return new Promise((resolve, reject) => {
      this.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" })
      this.client.setClientRole(this.getRole())
      this.client.init(
        option.appId,
        () => {
          console.log("init success")
          this.registerEventListener()
          this.client.join(
            option.token,
            option.channel,
            null,
            (uid: string) => {
              console.log(
                "join channel: " + option.channel + " success, uid: ",
                uid
              )

              this.agoraOption = {
                ...option,
                uid,
              }

              resolve(true)
            },
            (err: any) => {
              console.error("client join failed", err)
            }
          )
        },
        (err: any) => {
          reject(err)
          console.error(err)
        }
      )
      console.log("[agora-react] appId", option.appId)
    })
  }

  private registerEventListener() {
    const client = this.client
    client.on("stream-added", (evt: any) => {
      // The stream is added to the channel but not locally subscribed
      // client.subscribe(stream)
      this.handleEventStreamAdded(evt)
    })
    client.on("stream-subscribed", (evt: any) => {
      this.handleEventStreamSubscribed(evt)
    })
    // client.on('stream-published', (evt) => {
    //   this._eventBus.emit('stream-published', evt)
    // })
    // client.on('stream-removed', (evt) => {
    //   this._eventBus.emit('stream-removed', evt)
    // })
    client.on("peer-online", (evt: any) => {
      // this._eventBus.emit('peer-online', evt)
    })
    // client.on('peer-leave', (evt) => {
    //   this._eventBus.emit('peer-leave', evt)
    // })
  }

  public getStream() {
    return this.stream
  }

  public getClient() {
    return this.client
  }
}
