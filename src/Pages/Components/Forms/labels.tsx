import dayjs from "dayjs"
import { useEffect } from "react"
const Label = {
  Text: ({ value }: any) => {
    return <span>{value ?? ""}</span>
  },
  Relation: ({ value, labelFunc = JSON.stringify }: any) => {
    return <span>{labelFunc(value)}</span>
  },
  Date: ({ value, format = "DD/MM/YYYY" }: any) => {
    return <span>{dayjs().format(format)}</span>
  },
  Number: ({ value = 0, fixed = false, locale = "fr-FR" }: any) => {
    return (
      <span>
        {fixed
          ? (value ?? 0).toFixed(fixed)
          : (value ?? 0).toLocaleString(locale)}
      </span>
    )
  },
  Bool: ({ value = false, trueValue = "Enabled", falseValue = "Disabled" }) => {
    return (
      <span
        className={`rounded-full text-white px-2 py-1 ${
          value ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {value ? trueValue : falseValue}
      </span>
    )
  },
  File: ({ value }: any) => {
    if (!value) {
      return <></>
    }
    return (
      <>
        {/* <pre>{JSON.stringify(value,null,2)}</pre> */}
        <div className="w-16 mask mask-squircle inline-block">
          {value?.mime?.startsWith("image") && (
            <img alt="" src={`/v1${value.formats.thumbnail.url}`} />
          )}
          {!value?.mime?.startsWith("image") && (
            <a href={`/v1${value.url}`} target="_blank">
              <div className="w-16 h-16 bg-gray-300 justify-center items-center flex group">
                <svg
                  className="w-[50%] h-[50%]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none" />
                  <path
                    d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <line
                    className="group-hover:-translate-y-4"
                    x1="128"
                    y1="152"
                    x2="128"
                    y2="40"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                  <polyline
                    className="group-hover:-translate-y-4"
                    points="168 112 128 152 88 112"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="16"
                  />
                </svg>
              </div>
            </a>
          )}
        </div>
      </>
    )
  },
}

export default Label
