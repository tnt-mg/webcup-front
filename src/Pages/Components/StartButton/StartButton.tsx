import "./startButton.sass"
import { useTranslation } from "react-i18next"
export const StartButton = ({ onClick }: any) => {
  const { t } = useTranslation()
  return (
    <>
      <div>
        <div className="flex justify-center p-5">
          <svg
            id="gooey-button-svg"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <defs>
              <filter id="gooey">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="5"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                  result="highContrastGraphic"
                />
                <feComposite
                  in="SourceGraphic"
                  in2="highContrastGraphic"
                  operator="atop"
                />
              </filter>
            </defs>
          </svg>

          <button
            id="gooey-button"
            className="bg-primary opacity-75 text-white hover:scale-105 hover:opacity-100 duration-200 rounded-sm min-w-[147px]"
            onClick={onClick}
          >
            <div className="tracking-wide leading-none text-normal font-extrabold px-5">
              {t("begin")}
            </div>
            <span className="bubbles p-5 m-5">
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
              <span className="bubble bg-primary" />
            </span>
          </button>
        </div>
        <p className="mb-3 font-thin text-white text-center text-xl font-app">
          {t("experience.startButton")}
        </p>
      </div>
    </>
  )
}
