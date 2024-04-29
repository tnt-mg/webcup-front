import React from "react"

export enum ControlEnum {
  AUDIO,
  VIDEO,
  LEAVE,
}

export interface IControls {
  enableAudio: boolean
  enableVideo: boolean
}

interface StreamControlProps {
  toogleControl: (type: ControlEnum) => void
  controls: IControls
}

const StreamControl: React.FC<StreamControlProps> = ({
  toogleControl,
  controls,
}) => {
  return (
    <div className="flex justify-center mb-5">
      <div className="flex flex-row justify-center">
        {controls.enableAudio && (
          <button
            className={`uppercase py-2 px-4 border-b-2 border-secondary/50 text-secondary/100 hover:border-secondary/100`}
            onClick={() => toogleControl(ControlEnum.AUDIO)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </button>
        )}

        {!controls.enableAudio && (
          <button
            className={`uppercase py-2 px-4 border-b-2 border-secondary/50 text-secondary/100 hover:border-secondary/100`}
            onClick={() => toogleControl(ControlEnum.AUDIO)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </button>
        )}

        {controls.enableVideo && (
          <button
            onClick={() => toogleControl(ControlEnum.VIDEO)}
            className={`uppercase py-2 px-4 border-b-2 border-primary/50 text-primary/100 hover:border-primary/100`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
              />
            </svg>
          </button>
        )}

        {!controls.enableVideo && (
          <button
            onClick={() => toogleControl(ControlEnum.VIDEO)}
            className={
              "uppercase py-2 px-4 border-b-2 border-primary/50 text-primary/100 hover:border-primary/100"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </button>
        )}
        <button
          onClick={() => toogleControl(ControlEnum.LEAVE)}
          className={
            "uppercase py-2 px-4 border-b-2 border-red-500 text-red-500 hover:border-red-500"
          }
        >
          {/* media */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className="w-6 h-6"
          >
            <g transform="translate(0 -1036.362)" id="layer1">
              <path
                id="path828"
                transform="translate(0 1036.362)"
                d="M8 1a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 1a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z"
                className="opacity-100 fill-current text-red-500 stroke-none strokeWidth-4 strokeLinecap-square strokeLinejoin-round stroke-miterlimit-4 strokeDasharray-none strokeDashoffset-3.20000005 stroke-opacity-.55063291"
              />
              <rect
                x="5"
                y="1041.3622"
                width="6"
                height="6"
                id="rect891"
                className="opacity-100 fill-current text-red-500 stroke-none strokeWidth-4 strokeLinecap-square strokeLinejoin-round stroke-miterlimit-4 strokeDasharray-none strokeDashoffset-3.20000005 stroke-opacity-.55063291"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default StreamControl
