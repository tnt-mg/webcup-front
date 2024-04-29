import { useKeyboardControls, useGLTF, useCamera } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import { useControls } from "leva"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { Controls } from "./Tps"

export function Character(props: any) {
  const { forwardSpeed, rotationSpeed } = useControls({
    forwardSpeed: 4,
    rotationSpeed: 3.5,
  })
  const forwardPressed = useKeyboardControls<Controls>((state) => state.forward)
  const backPressed = useKeyboardControls<Controls>((state) => state.back)
  const leftPressed = useKeyboardControls<Controls>((state) => state.left)
  const rightPressed = useKeyboardControls<Controls>((state) => state.right)
  const characterRef = useRef() as any
  const camera = useThree((state) => state.camera)
  const offset = new Vector3(0, 3, 3.5)
  const lookAt = new Vector3(0, 1.5, 0)
  const currentPosition = new Vector3(0, 0, 0)
  useFrame((state, delta) => {
    let forwardValue = 0
    if (forwardPressed) {
      forwardValue = -forwardSpeed * delta
    }
    if (backPressed) {
      forwardValue = forwardSpeed * delta
    }
    if (leftPressed) {
      characterRef.current.rotation.y += rotationSpeed * delta
    }
    if (rightPressed) {
      characterRef.current.rotation.y -= rotationSpeed * delta
    }

    const forward = new Vector3(0, 0, 1)
    forward.applyQuaternion(characterRef.current.quaternion)
    forward.multiplyScalar(forwardValue)

    characterRef.current.position.add(forward)

    const look = lookAt.clone()
    look.applyQuaternion(characterRef.current.quaternion)
    look.add(characterRef.current.position)

    const off = offset.clone()
    off.applyQuaternion(characterRef.current.quaternion)
    off.add(characterRef.current.position)
    camera.position.copy(off)
    camera.lookAt(characterRef.current.position)
    camera.updateProjectionMatrix()
  })
  const { nodes, materials } = useGLTF("/character.gltf") as any
  return (
    <group ref={characterRef} {...props} scale={0.5} dispose={null}>
      <mesh
        name="Sphere_1"
        geometry={nodes.Sphere_1.geometry}
        material={materials.vatana}
      />
      <mesh
        name="Sphere_2"
        geometry={nodes.Sphere_2.geometry}
        material={materials.Maso}
      />
      <mesh
        name="Sphere_3"
        geometry={nodes.Sphere_3.geometry}
        material={materials.Material}
      />
      <mesh
        name="Sphere_4"
        geometry={nodes.Sphere_4.geometry}
        material={materials["Material.001"]}
      />
    </group>
  )
}

useGLTF.preload("/character.gltf")
