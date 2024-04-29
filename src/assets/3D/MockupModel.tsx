import { config, useSpring } from "@react-spring/three"
import {
  PerspectiveCamera,
  useGLTF,
  useTexture,
  useVideoTexture,
} from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import {
  Suspense,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { Color, MathUtils, MeshBasicMaterial } from "three"
import { useAnimationsWithoutMixerUpdate } from "../../utils/3d/useAnimationsWithoutMixerUpdate"
import { useBakeLoader } from "../../utils/3d/useBakeLoader"

const VideoMaterial = () => {
  const material = useRef() as any
  const video = useVideoTexture("/mockup.webm", { start: true })
  useEffect(() => {
    material.current.map.flipY = true
  }, [material.current])
  return <meshBasicMaterial ref={material} map={video} />
  // return <meshBasicMaterial color={0xd9d9d9} />
}
const FallbackMaterial = () => {
  const materialRef = useRef<any>()
  let time = useRef(0)
  useFrame((_, delta) => {
    time.current += delta
    const c = Math.sin(time.current * 5) * 0.2 + 0.6
    materialRef.current.color = new Color(c, c, c)
  })
  return <meshBasicMaterial ref={materialRef} />
}

const ScreenMaterial = () => {
  return (
    <Suspense fallback={<FallbackMaterial />}>
      <VideoMaterial />
    </Suspense>
  )
}

export const MockupModel = forwardRef((props: any, ref: any) => {
  const init = useRef(false)
  const group = useRef()
  const timeouts = useRef<any[]>([])
  const { nodes, materials, animations } = useGLTF("/mockup.glb") as any
  const [progress, setProgress] = useState(0)
  const open = useRef({
    all: true,
    desktop: false,
    phone: false,
    tablet: false,
  })
  useBakeLoader("/tex.webp", materials, {})
  const { actions, mixer } = useAnimationsWithoutMixerUpdate(animations, group)
  const globalAnimationDuration = actions.all?.getClip().duration ?? 0
  //SETUP ACTIONS
  useEffect(() => {
    if (init.current) {
      return
    }
    init.current = true
    ;(window as any)["t"] = actions
  }, [])

  // config mixer

  useEffect(() => {
    actions.all?.play()
    actions.all!.clampWhenFinished = true
  }, [mixer, actions.all])
  useFrame((_, delta) => {
    actions.all!.paused = false
    mixer.setTime(
      MathUtils.lerp(
        mixer.time,
        Math.min(progress, 0.9999999) * globalAnimationDuration,
        0.05
      )
    )
    actions.all!.paused = true
  })

  // * scale scene
  const { camera } = useThree()
  const [zoomValue, setZoom] = useState(0.5)
  const zoom = useRef(0.5)
  useSpring(
    () => ({
      from: {
        zoom: camera.zoom,
      },
      to: {
        zoom: zoomValue,
      },
      default: 1,
      onChange: ({ value }) => {
        zoom.current = value.zoom
      },
      config: config.wobbly,
    }),
    [zoomValue]
  ) as any

  useFrame((_, delta) => {
    const oldZoom = camera.zoom
    if (oldZoom !== zoom.current) {
      camera.zoom = zoom.current
      camera.updateProjectionMatrix()
    }
  })
  useImperativeHandle(ref, () => ({
    allPossibleActive: ["desktop", "phone", "tablet"],
    scale(value: any) {
      setZoom(value)
    },
    setProgress(value: number) {
      setProgress(value)
    },
  }))
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="phone_parent_baked"
          position={[-0.52, 0.07, 0.07]}
          rotation={[0, 0.45, 0]}
        >
          <group name="phone_controller001">
            <group
              name="phone_merge001"
              position={[0, 0.07, 0.01]}
              rotation={[0.96, 0, 0]}
            >
              <mesh
                name="phone_screen001"
                geometry={nodes.phone_screen001.geometry}
              >
                <ScreenMaterial />
              </mesh>
              <mesh
                name="phone001"
                geometry={nodes.phone001.geometry}
                material={materials.baked}
              />
            </group>
          </group>
          <mesh
            name="pied001"
            geometry={nodes.pied001.geometry}
            material={materials.baked}
          />
        </group>
        <group name="monitor_parent_baked" position={[0, 0.27, 0]}>
          <mesh
            name="monitor_screen001"
            geometry={nodes.monitor_screen001.geometry}
            position={[0, 0.11, 0]}
          >
            <ScreenMaterial />
          </mesh>
          <mesh
            name="monitor001"
            geometry={nodes.monitor001.geometry}
            material={materials.baked}
            position={[0, 0.11, 0]}
          />
          <group name="pied_AOC001" position={[0, 0.08, 0]}>
            <mesh
              name="Plane008"
              geometry={nodes.Plane008.geometry}
              material={materials.baked}
            />
            <mesh
              name="Plane008_1"
              geometry={nodes.Plane008_1.geometry}
              material={materials.baked}
            />
          </group>
        </group>
        <group
          name="Tablet_parent_baked"
          position={[0.43, 0.02, 0.25]}
          rotation={[-0.02, -0.64, -0.01]}
        >
          <mesh
            name="tablet_screen001"
            geometry={nodes.tablet_screen001.geometry}
            position={[-0.42, -0.01, -0.17]}
          >
            <ScreenMaterial />
          </mesh>
          <group name="tablet001" position={[-0.42, -0.01, -0.17]}>
            <mesh
              name="Plane011"
              geometry={nodes.Plane011.geometry}
              material={materials.baked}
            />
            <mesh
              name="Plane011_1"
              geometry={nodes.Plane011_1.geometry}
              material={materials.baked}
            />
          </group>
        </group>
        <PerspectiveCamera
          name="Camera"
          makeDefault={true}
          far={100}
          near={0.1}
          fov={22.9}
          position={[0, 0.31, 7.53]}
        />
      </group>
    </group>
  )
})

useGLTF.preload("/mockup.glb")
