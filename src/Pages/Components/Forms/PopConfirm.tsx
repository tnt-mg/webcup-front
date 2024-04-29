import React, { useState } from "react"

const PopConfirm = ({
  title = "Want to delete this item?",
  onConfirm = async () => {},
  onCancel = () => {},
  confirm = "Delete",
  cancel = "Cancel",
  children,
}: any) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleConfirm = async () => {
    setLoading(true)
    await onConfirm().then(() => {
      setLoading(false)
      setVisible(false)
    })
  }

  const handleCancel = () => {
    setVisible(false)
    onCancel()
  }

  return (
    <>
      {/* Overlay ity amzay tsy afaka mi-click delete indroa xD */}
      {visible && (
        <div className="h-full w-full absolute top-0 left-0 bg-transparent z-20"></div>
      )}
      <div className="inline-block">
        <div className="relative">
          {visible && (
            <div className="absolute bottom-[calc(100%+10px)] left-[50%] -translate-x-[50%] z-30 p-4 bg-white border border-gray-200 rounded shadow">
              <p>{title}</p>
              <div className="flex justify-end mt-2">
                <button
                  className="px-4 py-1 mr-2 text-white bg-red-500 rounded hover:bg-red-600"
                  onClick={handleConfirm}
                >
                  <div className="flex">
                    <div>
                      {loading && (
                        <svg
                          className="animate-spin -ml-2 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx={12}
                            cy={12}
                            r={10}
                            stroke="currentColor"
                            strokeWidth={4}
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                      )}
                    </div>{" "}
                    <div>{confirm}</div>
                  </div>
                </button>
                <button
                  className="px-4 py-1 text-white bg-gray-500 rounded hover:bg-gray-600"
                  onClick={handleCancel}
                >
                  {cancel}
                </button>
              </div>
              <div className="bg-white h-3 w-3 border-b border-r border-gray-200 absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-45"></div>
            </div>
          )}
          <div
            className="cursor-pointer z-10"
            onClick={() => setVisible((prevVisible) => !prevVisible)}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default PopConfirm
