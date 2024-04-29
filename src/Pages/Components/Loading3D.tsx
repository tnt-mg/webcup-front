import { useProgress } from "@react-three/drei"
import { useCallback, useContext, useEffect, useState } from "react"
import { HomeLoaded } from "../../App"
import "../../assets/Css/loading3D.scss"
import { StartButton } from "./StartButton/StartButton"

function Loading3D({
  global = false,
  onStart = (event: any) => {},
  disabled = false,
}) {
  const { progress, total, loaded } = useProgress()
  let [hide, setHide] = useState(false)
  const context = useContext(HomeLoaded)
  useEffect(() => {
    if (location.pathname.startsWith("/admin")) {
      context.setLoaded(true)
    }
  }, [])
  useEffect(() => {
    if (global) {
      setHide(progress === 100 && total === loaded)
    }
  }, [global, progress, total, loaded])
  const handleStart = useCallback(
    (event: any) => {
      if (hide) {
        context.setLoaded(true)
        onStart(event)
      }
    },
    [hide]
  )

  if (global && hide && context.loaded) {
    return <></>
  }
  if (disabled) {
    return <></>
  }

  return (
    <div
      className={`${
        global
          ? "w-screen global fixed top-0 left-0 z-[1000] bg-base-200 bg-cover bg-[url('/images/landinina.svg')]"
          : ""
      } h-screen  flex items-center justify-center`}
    >
      {global && hide && !context.loaded && (
        <>
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
            <StartButton onClick={handleStart} />
          </div>
        </>
      )}
      {!(global && hide) && (
        <div className="space-y-1 ">
          <div className="container-wave">
            <div className="progressbar-container relative flex justify-center items-center overflow-hidden w-28 h-10 rounded-[10px]">
              <div
                className="progressbar-complete absolute left-0 top-0 h-[100%] bg-primary text-white rounded-[10px]"
                style={{ width: `${progress.toFixed(2)}%` }}
              >
                <div className="progressbar-liquid absolute right-[-5px] top-[-10px] bg-primary rounded-[40%] h-[70px] w-[70px]"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <span className="font-asap-bold text-xs text-white">
              {progress.toFixed(0)} %
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Loading3D
