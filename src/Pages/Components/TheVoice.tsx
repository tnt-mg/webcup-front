import "regenerator-runtime/runtime"
import { useState } from "react"
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition"
import { MicroIcon } from "./Icons/MicroIcon"

function TheVoice() {
  const commands = [
    {
      command: ["*"],
      callback: (keyWord: any) => setKeyword(keyWord),
    },
  ]
  const { transcript, listening, resetTranscript } = useSpeechRecognition({
    commands,
  })
  const [keyword, setKeyword] = useState()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const routes = ["lumos"]

  if (keyword) {
    if (routes.includes(transcript)) {
      if (transcript === "lumos") {
        document.getElementById("app")!.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light")
        window.dispatchEvent(new Event("themeChanged"))
      }
    } else {
      console.log("Je ne connais pas ça")
    }
  }

  const handleVoice = () => {
    resetTranscript()
    SpeechRecognition.startListening({
      language: "en-US",
    })
  }

  return (
    <div>
      <div className="fixed bottom-0 left-[40%]">
        <div className={listening ? "" : "hidden"}>
          <p className="text-sm font-semibold text-secondary my-3">
            Speak to me baby: {transcript}
          </p>
        </div>
      </div>
      <button onClick={handleVoice}>
        <MicroIcon />
      </button>
    </div>
  )
}

export default TheVoice
