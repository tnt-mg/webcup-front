import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { ModalContext } from "../TPS/Tps"

const ModalWorld = () => {
  // modalActive can be undefined | "sand" | "grass" | "snow"
  const { modalActive, setModalActive } = useContext(ModalContext)
  const unlock = useCallback(() => {
    const domElement = document.querySelector("div#canvas-tps canvas")
    if (document.pointerLockElement === domElement) {
      document.exitPointerLock()
    }
  }, [])
  const lock = useCallback(() => {
    const domElement = document.querySelector("div#canvas-tps canvas")
    domElement?.requestPointerLock()
  }, [])

  useEffect(() => {
    if (modalActive) {
      unlock()
    }
  }, [modalActive])

  return (
    <div>
      <div className={`modal ${modalActive ? "modal-open" : ""}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            This modal works with a hidden checkbox! And called via{" "}
            <strong>{modalActive}</strong>{" "}
          </p>
          <div className="modal-action">
            <label
              onClick={() => setModalActive(undefined)}
              htmlFor="my_modal"
              className="btn"
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWorld
