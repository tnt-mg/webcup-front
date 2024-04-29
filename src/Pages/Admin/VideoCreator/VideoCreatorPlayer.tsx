import React from "react"
import { Player } from "@remotion/player"
import useMediaQuery from "../../../utils/mediaquery/useMediaQuery"

interface PlayerProps {
  durationInFrames: number
  component: React.FC<any>
  inputProps: any
  exportProps: {
    status: String
    progression: number
    downloadUrl: string | null
    projectName: string
  }
}
const VideoCreatorPlayer: React.FC<PlayerProps> = ({
  durationInFrames,
  component,
  inputProps,
  exportProps: { status, progression, downloadUrl, projectName },
}) => {
  // * is mobile
  const isMobile = useMediaQuery("(max-width: 600px)")
  return (
    <>
      {status === "UPLOADING" || status === "EXPORTING" ? (
        <div className="flex justify-center items-center h-[70%] w-[70%]">
          <p className="text-secondary font-app text-xl animate-pulse">
            {status} . . .
          </p>
        </div>
      ) : (
        <div>
          <Player
            className="rounded-xl hover:shadow-2xl"
            component={component}
            durationInFrames={durationInFrames}
            compositionHeight={600}
            compositionWidth={isMobile ? 340 : 760}
            fps={30}
            inputProps={inputProps}
            controls
          />
          <div className="flex justify-between items-center my-5">
            <div className="text-2xl font-extrabold leading-none tracking-tight text-primary ">
              {projectName}{" "}
            </div>
            {downloadUrl && (
              <div>
                <a
                  className="btn btn-primary"
                  href={downloadUrl}
                  download
                  target="_blank"
                >
                  Telecharger la video{" "}
                  {/*soloina icon download fotsin tena tsara */}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default VideoCreatorPlayer
