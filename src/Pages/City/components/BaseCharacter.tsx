import { useSphere } from "@react-three/cannon"
import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { usePlayerControls } from "../utils/helper"

const CAM_NAVIG = new THREE.Vector3(3.75, 0.25, 3.75)
const CAM_CONSTRUCT = new THREE.Vector3(3, 4, 9)

const BaseCharacter = (props: any) => {
  const direction = new THREE.Vector3()
  const frontVector = new THREE.Vector3()
  const sideVector = new THREE.Vector3()
  const speed = new THREE.Vector3()
  const SPEED = 7

  const isLerping = useRef(false)

  const { camera } = useThree()

  const [ref, api] = useSphere((index) => ({
    mass: 1,
    type: "Dynamic",
    position: [0, 10, 0],
    ...props,
  }))

  useEffect(() => {
    ;(window as any)["cam"] = camera
  }, [])

  const { forward, backward, left, right, jump } = usePlayerControls()
  const velocity = useRef([0, 0, 0])
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), [])

  useEffect(() => {
    isLerping.current = true
    setTimeout(() => {
      isLerping.current = false
    }, 1000)
  }, [props.active])

  useFrame((state) => {
    if (isLerping.current) {
      if (props.active) {
        camera.position.lerp(CAM_NAVIG, 0.1)
        camera.rotation.set(
          -0.41818492959253184,
          0.2957496454869606,
          0.12880561427715861
        )
      } else {
        camera.position.lerp(CAM_CONSTRUCT, 0.1)
      }
    } else {
      if (props.active) {
        //Mamindra position CAM
        ref.current!.getWorldPosition(camera.position)
        frontVector.set(0, 0, Number(backward) - Number(forward))
        sideVector.set(Number(left) - Number(right), 0, 0)
        direction
          .subVectors(frontVector, sideVector)
          .normalize()
          .multiplyScalar(SPEED)
          .applyEuler(camera.rotation)
        speed.fromArray(velocity.current)

        api.velocity.set(direction.x, velocity.current[1], direction.z)
        if (jump && Math.abs((velocity.current[1] as any).toFixed(2)) < 0.05)
          api.velocity.set(velocity.current[0], 5, velocity.current[2])
      }
    }
  })

  return (
    <group visible={false} scale={0.25}>
      <mesh position={props.position} ref={ref as any}>
        <sphereGeometry args={props.args} />
        <meshStandardMaterial color="#FFFF00" />
      </mesh>
    </group>
  )
}

export default BaseCharacter
