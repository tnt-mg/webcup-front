import {
  KeyboardControls,
  KeyboardControlsEntry,
  OrbitControls,
} from "@react-three/drei"
import { Canvas, ThreeElements, Vector3 } from "@react-three/fiber"
import { Leva, useControls } from "leva"
import { Perf } from "r3f-perf"
import {
  Suspense,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import Loading3D from "../Components/Loading3D"
import { Physics, RigidBody } from "@react-three/rapier"
import { Sand } from "./Sand"
import { Snow } from "./Snow"
import { Grass } from "./Grass"
import { Center } from "./Center"
import { Perso } from "./Perso"
import { Colliders } from "./Colliders"
import { Items } from "./Items"
import { config, useSpring, animated } from "@react-spring/web"
import ModalWorld from "../Components/ModalWorld"
import KeyboardLayout from "../Components/KeyboardLayout"

export const ModalContext = createContext<{
  setModalActive: Function
  modalActive: undefined | string
}>({ setModalActive: console.log, modalActive: undefined })

export function Box(props: ThreeElements["group"]) {
  const mesh = useRef<THREE.Group>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // useFrame((state, delta) => (mesh.current.rotation.x += delta))
  return (
    <RigidBody
      type="fixed"
      onCollisionEnter={() => console.log("ENTER")}
      onCollisionExit={() => console.log("EXIT")}
    >
      <group
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
      </group>
    </RigidBody>
  )
}

export enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
  view = "view",
  run = "run",
  action = "action",
}

export default function Tps() {
  const persoRef = useRef<any>(null!)
  const envScaleRef = useRef<Vector3>([3.5, 3.5, 3.5])
  const envPositionRef = useRef<Vector3>([0, 0, 10])

  // * keyboard Layout

  const resetSetting = () => {
    localStorage.removeItem("keyboardLayout")
    setKeyboardLayout(null)
    location.reload()
  }

  const [keyboardLayout, setKeyboardLayout] = useState(
    localStorage.getItem("keyboardLayout")
  )

  const qwertyMap = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "w", "W"] },
      { name: Controls.back, keys: ["ArrowDown", "s", "S"] },
      { name: Controls.left, keys: ["ArrowLeft", "a", "A"] },
      { name: Controls.right, keys: ["ArrowRight", "d", "D"] },
      { name: Controls.view, keys: ["Alt"] },
      { name: Controls.jump, keys: ["Space"] },
      { name: Controls.run, keys: ["Shift"] },
      { name: Controls.action, keys: ["f"] },
    ],
    []
  )

  const azertyMap = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["z", "Z"] },
      { name: Controls.back, keys: ["s", "S"] },
      { name: Controls.left, keys: ["q", "Q"] },
      { name: Controls.right, keys: ["d", "D"] },
      { name: Controls.view, keys: ["Alt"] },
      { name: Controls.jump, keys: ["Space"] },
      { name: Controls.run, keys: ["Shift"] },
      { name: Controls.action, keys: ["f"] },
    ],
    []
  )

  const [map, setMap] = useState(
    localStorage.getItem("keyboardLayout") === "azerty" ? azertyMap : qwertyMap
  ) as any

  useEffect(() => {
    function keyboardLayoutChanged() {
      const newLayout = localStorage.getItem("keyboardLayout")
      setKeyboardLayout(newLayout)

      // ** update map
      if (newLayout === "azerty") {
        setMap(azertyMap)
      } else if (newLayout === "qwerty") {
        setMap(qwertyMap)
      }
    }
    window.addEventListener("keyboardLayoutChanged", keyboardLayoutChanged)
    return () => {
      window.removeEventListener("keyboardLayoutChanged", keyboardLayoutChanged)
    }
  }, [])

  const { showPerf, debug }: any = useControls({
    showPerf: false,
    debug: false,
  })

  const unlock = useCallback(() => {
    const domElement = document.querySelector("div#canvas-tps canvas")
    if (document.pointerLockElement === domElement) {
      document.exitPointerLock()
    }
  }, [])

  // * fullscrenn mode
  const [worldW, setWorldW] = useState("0vw") as any
  const { worldW_value } = useSpring({
    worldW_value: worldW,
    config: config.stiff,
  })
  const [worldH, setWorldH] = useState("0vh") as any
  const { worldH_value } = useSpring({
    worldH_value: worldH,
    config: config.stiff,
  })
  const [worldZ, setWorldZ] = useState(0) as any
  const [worldO, setWorldO] = useState(0) as any

  const fullmode = () => {
    setWorldW("100vw")
    setWorldH("100vh")
    setWorldZ(99)
    setWorldO(1)
  }

  useEffect(() => {
    const cancelFullmode = (event: KeyboardEvent) => {
      if (event.key === "h") {
        unlock()
        setWorldW("0vw")
        setWorldH("0vh")
        setWorldZ(0)
        setTimeout(() => {
          setWorldO(0)
        }, 200)
      }
    }

    document.addEventListener("keypress", cancelFullmode)
    return () => {
      document.removeEventListener("keypress", cancelFullmode)
    }
  }, [])

  const [modalActive, setModalActive] = useState<string | undefined>("")

  return (
    <ModalContext.Provider
      value={{
        setModalActive,
        modalActive,
      }}
    >
      <div className="px-[5%] space-y-10 mt-10">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <svg className="w-5" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="18.5"
                    cy="4.5"
                    r="2.5"
                    className="stroke-current"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 17L7.99923 18.2009C7.262 19.0856 6.89338 19.5279 6.38945 19.764C5.88552 20 5.30973 20 4.15813 20H3"
                    className="stroke-current"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M13.6498 21.9999C13.6498 22.4141 13.9856 22.7499 14.3998 22.7499C14.814 22.7499 15.1498 22.4141 15.1498 21.9999H13.6498ZM12.5644 16.2457L13.0173 15.6479L13.0173 15.6479L12.5644 16.2457ZM13.7488 17.261L14.336 16.7945L14.336 16.7945L13.7488 17.261ZM14.3057 18.3817L15.0322 18.1954L15.0322 18.1954L14.3057 18.3817ZM13.504 11.555C13.8105 11.2763 13.8331 10.802 13.5545 10.4955C13.2758 10.189 12.8015 10.1664 12.495 10.445L13.504 11.555ZM10.8518 13.1644L11.555 13.4252L11.555 13.4252L10.8518 13.1644ZM10.9215 14.72L10.2444 15.0426H10.2444L10.9215 14.72ZM13.6498 19.9389V21.9999H15.1498V19.9389H13.6498ZM12.1115 16.8436C12.7752 17.3463 12.9987 17.5226 13.1615 17.7276L14.336 16.7945C14.0277 16.4065 13.6187 16.1035 13.0173 15.6479L12.1115 16.8436ZM15.1498 19.9389C15.1498 19.1844 15.1554 18.6754 15.0322 18.1954L13.5793 18.5681C13.6443 18.8216 13.6498 19.1063 13.6498 19.9389H15.1498ZM13.1615 17.7276C13.3583 17.9753 13.5007 18.2617 13.5793 18.5681L15.0322 18.1954C14.9012 17.6847 14.664 17.2073 14.336 16.7945L13.1615 17.7276ZM12.495 10.445C12.0754 10.8265 11.5502 11.2813 11.141 11.6686C10.9317 11.8668 10.7312 12.0669 10.5677 12.2554C10.4192 12.4266 10.2411 12.6544 10.1486 12.9037L11.555 13.4252C11.5473 13.4461 11.5691 13.39 11.7006 13.2385C11.817 13.1044 11.9766 12.9431 12.1721 12.758C12.5726 12.3789 13.0366 11.9799 13.504 11.555L12.495 10.445ZM13.0173 15.6479C12.5298 15.2786 12.1996 15.0277 11.9618 14.8161C11.7283 14.6083 11.641 14.4864 11.5986 14.3975L10.2444 15.0426C10.4115 15.3935 10.6679 15.6725 10.9645 15.9366C11.257 16.1969 11.6434 16.4889 12.1115 16.8436L13.0173 15.6479ZM10.1486 12.9037C9.89029 13.6003 9.92484 14.3719 10.2444 15.0426L11.5986 14.3975C11.4533 14.0926 11.4376 13.7419 11.555 13.4252L10.1486 12.9037Z"
                    className="fill-current"
                  />
                  <path
                    d="M5.43568 8.82018L5.06517 8.16809L5.06517 8.16809L5.43568 8.82018ZM3.62949 8.98382C3.26935 9.18844 3.14328 9.64628 3.34791 10.0064C3.55253 10.3666 4.01037 10.4926 4.37051 10.288L3.62949 8.98382ZM13.4066 7.3567L13.1211 8.05024V8.05024L13.4066 7.3567ZM10.4467 6.64241L10.3924 5.89438L10.4467 6.64241ZM21 12.7495C21.4142 12.7495 21.75 12.4138 21.75 11.9995C21.75 11.5853 21.4142 11.2495 21 11.2495V12.7495ZM15.7681 9.53574L15.0973 9.87114V9.87114L15.7681 9.53574ZM5.06517 8.16809L3.62949 8.98382L4.37051 10.288L5.80619 9.47228L5.06517 8.16809ZM13.6921 6.66316C12.3481 6.10991 11.6111 5.80576 10.3924 5.89438L10.5011 7.39043C11.3248 7.33054 11.7575 7.48894 13.1211 8.05024L13.6921 6.66316ZM5.80619 9.47228C8.30813 8.05072 9.35849 7.47352 10.5011 7.39043L10.3924 5.89438C8.83282 6.00778 7.4432 6.81694 5.06517 8.16809L5.80619 9.47228ZM19.7546 12.7495H21V11.2495H19.7546V12.7495ZM15.0973 9.87114C15.9793 11.6352 17.7823 12.7495 19.7546 12.7495V11.2495C18.3505 11.2495 17.0669 10.4562 16.4389 9.20033L15.0973 9.87114ZM16.4389 9.20033C15.8611 8.04461 14.8765 7.1507 13.6921 6.66316L13.1211 8.05024C13.9811 8.40424 14.6864 9.04944 15.0973 9.87114L16.4389 9.20033Z"
                    className="fill-current"
                  />
                </svg>
                <label className="text-xs">(Déplacement)</label>
              </div>
              <div className="flex gap-1">
                <kbd className="kbd kbd-sm">W</kbd>
                <kbd className="kbd kbd-sm">S</kbd>
                <kbd className="kbd kbd-sm">D</kbd>
                <kbd className="kbd kbd-sm">Z</kbd>
              </div>
            </div>
            <div className="text-sm">Utiliser votre souris</div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <svg
                  className="w-5 stroke-current"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 20H16M12 20H8M12 20V16M12 16H5C4.44772 16 4 15.5523 4 15V6C4 5.44771 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6M12 16H19C19.5523 16 20 15.5523 20 15V10"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <label className="text-xs">(Résolution)</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-10">
            {keyboardLayout === null && (
              <div>
                <KeyboardLayout />
              </div>
            )}
            <div className="flex gap-3 items-center">
              <button
                disabled={keyboardLayout === null}
                onClick={resetSetting}
                className="btn btn-sm"
              >
                Reset setting
              </button>
              <button
                disabled={keyboardLayout === null}
                onClick={fullmode}
                className="btn"
              >
                Play
              </button>
            </div>
          </div>
          <ModalWorld />
        </div>
        <animated.div
          style={{
            width: worldW_value,
            height: worldH_value,
            zIndex: worldZ,
            opacity: worldO,
          }}
          className="fixed -top-10 left-0 flex justify-center bg-base-100 p-4"
        >
          <div className="w-[98%] h-full">
            <div>
              Press <kbd className="kbd">Echap</kbd> to exit pointer lock <br />
              Press <kbd className="kbd">H</kbd> to quit
            </div>
            <div className="w-full h-full">
              <Leva collapsed />
              <Suspense fallback={<Loading3D />}>
                <KeyboardControls map={map}>
                  <Canvas linear={true} id="canvas-tps">
                    <Perf
                      style={{ display: showPerf ? "block" : "none" }}
                      position="top-left"
                    />
                    <Items persoRef={persoRef} />
                    <OrbitControls />
                    <Physics debug={debug} updateLoop="independent">
                      <Perso ref={persoRef} />
                      <Colliders
                        scale={envScaleRef.current}
                        position={envPositionRef.current}
                      />
                      <group
                        scale={envScaleRef.current}
                        position={envPositionRef.current}
                      >
                        <Sand debug={debug} />
                        <Snow debug={debug} />
                        <Grass debug={debug} />
                        <Center debug={debug} />
                      </group>
                    </Physics>
                  </Canvas>
                </KeyboardControls>
              </Suspense>
            </div>
          </div>
        </animated.div>
      </div>
    </ModalContext.Provider>
  )
}
