import * as THREE from "three"
import React, {
  Suspense,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import {
  useGLTF,
  useAnimations,
  PerspectiveCamera,
  useTexture,
} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useAnimationsWithoutMixerUpdate } from "../../utils/3d/useAnimationsWithoutMixerUpdate"

import themes from "daisyui/src/colors/themes"
const COLOR_USED = "base-300"

const CustomMaterial = () => {
  const texture = useTexture("/onirix.webp")
  texture.flipY = false
  return (
    <Suspense fallback={<meshBasicMaterial color={0xd9d9d9} />}>
      <meshBasicMaterial map={texture} />
    </Suspense>
  )
}

export default forwardRef(function Model(props: any, ref: any) {
  const group = useRef(null) as any
  const { nodes, materials, animations } = useGLTF("/model.glb") as any
  const { actions, mixer } = useAnimationsWithoutMixerUpdate(animations, group)
  const globalAnimationDuration = actions.camera?.getClip().duration ?? 0
  const [hovered, set] = useState<any>(null)
  const oldHovered = useRef("")
  // const color = useRef(
  //   themes[`[data-theme=${localStorage.getItem("theme") ?? "light"}]`]
  // )
  const material = useRef()
  const [progress, setProgress] = useState(0)
  // useEffect(() => {
  //   color.current =
  //     themes[`[data-theme=${localStorage.getItem("theme") ?? "light"}]`]
  //   if (typeof color.current[COLOR_USED] !== "number") {
  //     color.current[COLOR_USED] = parseInt(
  //       (color.current[COLOR_USED] ?? "#d9d9d9").substring(1),
  //       16
  //     )
  //   }
  //   function onThemeChanged() {
  //     color.current =
  //       themes[`[data-theme=${localStorage.getItem("theme") ?? "light"}]`]
  //     if (typeof color.current[COLOR_USED] !== "number") {
  //       color.current[COLOR_USED] = parseInt(
  //         (color.current[COLOR_USED] ?? "#d9d9d9").substring(1),
  //         16
  //       )
  //     }
  //   }
  //   window.addEventListener("themeChanged", onThemeChanged)
  //   return () => window.removeEventListener("themeChanged", onThemeChanged)
  // }, [])
  useEffect(() => {
    oldHovered.current = hovered
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])
  useEffect(() => {
    actions.camera?.play()
    actions.camera!.clampWhenFinished = true
  }, [mixer, actions.camera])

  useFrame((state) => {
    actions.camera!.paused = false
    mixer.setTime(
      THREE.MathUtils.lerp(
        mixer.time,
        Math.min(progress, 0.9999999) * globalAnimationDuration,
        0.05
      )
    )
    actions.camera!.paused = true
  })

  useImperativeHandle(ref, () => ({
    setProgress(value: number) {
      setProgress(value)
    },
  }))

  return (
    <group ref={group} {...props} dispose={null}>
      <group
        ref={ref}
        onPointerOver={(e: any) => (e.stopPropagation(), set(e.object.name))}
        onPointerOut={(e: any) => (e.stopPropagation(), set(null))}
        position={[0.06, 4.04, 0.35]}
        scale={[0.25, 0.25, 0.25]}
      >
        <PerspectiveCamera
          name="Camera"
          makeDefault
          far={1000}
          near={0.1}
          fov={22.9}
          position={[-41.09, 2.62, -16.7]}
          rotation={[Math.PI, -1.31, Math.PI]}
        />
        <mesh
          name="big"
          geometry={nodes.big.geometry}
          material={material.current}
          position={[-13.75, 0, -10.47]}
          rotation={[0, 0.53, 0]}
        >
          <CustomMaterial />{" "}
        </mesh>
        <mesh
          name="mid"
          geometry={nodes.mid.geometry}
          material={material.current}
          position={[-15.21, 0, -7.16]}
          rotation={[0, 0.53, 0]}
        >
          <CustomMaterial />{" "}
        </mesh>
        <mesh
          name="small"
          geometry={nodes.small.geometry}
          material={material.current}
          position={[-17.12, 0, -9.44]}
          rotation={[0, 0.53, 0]}
        >
          <CustomMaterial />{" "}
        </mesh>
        <mesh
          name="VR_Headset"
          geometry={nodes.VR_Headset.geometry}
          material={material.current}
          position={[-14.18, 11.9, 5]}
          rotation={[Math.PI, -0.51, Math.PI]}
        >
          <CustomMaterial />{" "}
        </mesh>
        <mesh
          name="map_"
          geometry={nodes.map_.geometry}
          material={material.current}
          position={[-5.73, 20.51, 15.9]}
          rotation={[0, -0.29, 0]}
        >
          <CustomMaterial />{" "}
        </mesh>
        <mesh
          name="snowden"
          geometry={nodes.snowden.geometry}
          material={material.current}
          position={[10.86, 31.13, 14.27]}
          rotation={[Math.PI, -0.01, Math.PI]}
        >
          <CustomMaterial />{" "}
        </mesh>
      </group>
    </group>
  )
})

useGLTF.preload("/model.glb")
