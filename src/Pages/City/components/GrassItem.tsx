import { useGLTF } from "@react-three/drei"
import { useState } from "react"

export function GrassItem({
  type,
  ...props
}: {
  position: number[]
  type: "grass" | "sand" | "snow"
}) {
  const { nodes, materials } = useGLTF("/grass.glb") as any
  return (
    <group {...(props as any)} dispose={null}>
      <group position={[-0.5, 0, -0.5]}>
        <mesh
          name="Grass"
          geometry={nodes.Grass.geometry}
          material={materials[type]}
        />
        <mesh
          name="Soil"
          geometry={nodes.Soil.geometry}
          material={materials.soil}
          position={[0, -0.04, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/grass.glb")
