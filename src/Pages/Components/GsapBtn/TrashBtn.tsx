import React, { useEffect } from "react"
import "/src/assets/Css/trashBtn.scss"

const TrashBtn = () => {
  useEffect(() => {
    document.querySelectorAll(".button-trash").forEach((button) =>
      button.addEventListener("click", (e) => {
        if (!button.classList.contains("delete")) {
          button.classList.add("delete")
          setTimeout(() => button.classList.remove("delete"), 3200)
        }
        e.preventDefault()
      })
    )
  }, [])
  return (
    <div>
      <button className="button-trash !bg-error !text-white">
        <div className="trash">
          <div className="top">
            <div className="paper"></div>
          </div>
          <div className="box"></div>
          <div className="check">
            <svg viewBox="0 0 8 6">
              <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
            </svg>
          </div>
        </div>
        <span>Delete</span>
      </button>
    </div>
  )
}

export default TrashBtn
