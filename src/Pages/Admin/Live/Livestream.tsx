import { PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { lazy, useState } from "react"
import { useTranslation } from "react-i18next"
import { RtcClientHost } from "../../../utils/Agora/RtcClientHost"
import StreamPlayer from "../../Components/Live/StreamPlayer"
import { rtcProps } from "./rtcProps"
const Doctor = lazy(() => import("../../../assets/3D/Doctor"))

// TODO animation while ending a Live
const Livestream = () => {
  const { t } = useTranslation()
  const [localStream, setLocalStream] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const rtc = new RtcClientHost()
  const startLive = () => {
    setIsLoading(true)
    rtc
      .joinChannel(rtcProps)
      .then(() => {
        rtc
          .publishStream()
          .then((stream: any) => {
            setLocalStream(stream)
            console.log("liveStarting")
          })
          .catch((err) => console.log("public channel error", err))
      })
      .catch((err) => console.log("join channel error", err))
      .finally(() => setIsLoading(false))
  }

  const endLive = () => {
    localStream.close()
    rtc
      .leaveChannel()
      .then(() => {
        // alert("leave success");
      })
      .catch((err) => {
        // alert('Leave Failure')
        console.error("leave error", err)
      })
    setLocalStream(null)
  }
  return (
    <div className="h-[90vh] grid grid-cols-1 sm:grid-cols-2 gap-10 px-[5%]">
      <div className="flex items-center order-2 sm:order-1">
        <div className="space-y-8">
          <div className="w-full sm:w-4/5">
            <h1 className="text-3xl sm:text-5xl font-app text-primary font-bold">
              {t("consu")} <span className="text-secondary">{t("expert")}</span>{" "}
              {t("domain")}
            </h1>
          </div>
          <div className="text-xl sm:text-2xl">
            {t("mmh")} <span className="font-app">{t("trau")}</span> ?
            {t("beginlive")} <span className="font-app">{t("expert")}</span>{" "}
            {t("helpi")}
          </div>
          <div>
            <button
              className="btn btn-sm sm:btn-md btn-warning"
              onClick={startLive}
            >
              {t("dema")}
            </button>
          </div>
        </div>
      </div>
      <div className="w-full order-1 sm:order-2">
        {localStream ? (
          <StreamPlayer
            playerId={localStream.getId()}
            stream={localStream}
            onLeave={endLive}
          />
        ) : (
          <div className="h-[80%] sm:h-full flex justify-center items-center">
            <Canvas
              camera={{
                fov: 40,
                aspect: window.innerWidth / window.innerHeight,
                near: 0.1,
                far: 1000,
              }}
            >
              <PerspectiveCamera position={[0, 0, 10]} />
              <ambientLight intensity={0.5} />
              <spotLight
                position={[1, 6, 1.5]}
                angle={0.2}
                penumbra={1}
                intensity={0.5}
                castShadow
                shadow-mapSize={[2048, 2048]}
              />
              <Doctor scale={1.5} />
            </Canvas>
          </div>
        )}
        {isLoading && (
          <div className="flex h-[75vh] items-center justify-center">
            <p className="text-2xl font-extrabold tracking-wide text-secondary/40 animate-pulse">
              {t("demarrer")}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Livestream
