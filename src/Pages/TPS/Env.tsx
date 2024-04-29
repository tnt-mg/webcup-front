import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Env(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/env.gltf") as any
  return (
    <RigidBody colliders="trimesh" mass={0} type="fixed">
      <group {...props} dispose={null}>
        <mesh
          receiveShadow
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
        >
          <meshStandardMaterial color="salmon" />
        </mesh>
      </group>
    </RigidBody>
  )
}

useGLTF.preload("/env.gltf")
