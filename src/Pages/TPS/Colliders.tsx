import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

export function Colliders(props: any) {
  const { nodes } = useGLTF("/tps/colliders.glb") as any
  return (
    <RigidBody colliders="cuboid" type="fixed" includeInvisible={true}>
      <group {...props} dispose={null} visible={false}>
        <group
          name="grassCollider"
          position={[-8.71, 0, 0]}
          scale={[1, 2.39, 1]}
        >
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            position={[0.05, 0.46, 4.25]}
            scale={[4.04, 0.82, 0.25]}
          />
          <mesh
            name="Cube001"
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
            position={[-0.14, 0.45, -4.25]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[4.04, 0.82, 0.25]}
          />
          <mesh
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            position={[-4.29, 0.46, 0.1]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[4.04, 0.82, 0.25]}
          />
          <mesh
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            position={[4.21, 0.45, 0.86]}
            rotation={[0, 1.57, 0]}
            scale={[4.04, 0.82, 0.25]}
          />
          <mesh
            name="Cube004"
            geometry={nodes.Cube004.geometry}
            material={nodes.Cube004.material}
            position={[4.21, 0.45, -3.65]}
            rotation={[0, 1.57, 0]}
            scale={[4.04, 0.82, 0.25]}
          />
        </group>
        <group
          name="snowCollider"
          position={[8.68, 0, 0.36]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1, 2.39, 1]}
        >
          <mesh
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            position={[0.05, 0.46, 4.25]}
            scale={[4.04, 0.83, 0.25]}
          />
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={nodes.Cube006.material}
            position={[-0.14, 0.45, -4.25]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[4.04, 0.83, 0.25]}
          />
          <mesh
            name="Cube007"
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
            position={[-4.29, 0.46, 0.1]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[4.04, 0.83, 0.25]}
          />
          <mesh
            name="Cube008"
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
            position={[4.21, 0.44, 3.46]}
            rotation={[0, 1.57, 0]}
            scale={[4.04, 0.65, 0.25]}
          />
          <mesh
            name="Cube009"
            geometry={nodes.Cube009.geometry}
            material={nodes.Cube009.material}
            position={[4.21, 0.45, -1.23]}
            rotation={[0, 1.57, 0]}
            scale={[4.04, 0.83, 0.25]}
          />
        </group>
        <group
          name="sandCollider"
          position={[-0.14, 0, -11.38]}
          rotation={[0, -1.57, 0]}
          scale={[1, 2.39, 1]}
        >
          <mesh
            name="Cube010"
            geometry={nodes.Cube010.geometry}
            material={nodes.Cube010.material}
            position={[0.05, 0.46, 4.25]}
            scale={[4.04, 0.83, 0.25]}
          />
          <mesh
            name="Cube011"
            geometry={nodes.Cube011.geometry}
            material={nodes.Cube011.material}
            position={[-0.14, 0.45, -4.25]}
            rotation={[Math.PI, 0, Math.PI]}
            scale={[4.04, 0.83, 0.25]}
          />
          <mesh
            name="Cube012"
            geometry={nodes.Cube012.geometry}
            material={nodes.Cube012.material}
            position={[-4.29, 0.46, 0.1]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[4.04, 0.83, 0.25]}
          />
          <mesh
            name="Cube013"
            geometry={nodes.Cube013.geometry}
            material={nodes.Cube013.material}
            position={[4.21, 0.44, 2.18]}
            rotation={[0, 1.57, 0]}
            scale={[4.04, 0.65, 0.25]}
          />
          <mesh
            name="Cube014"
            geometry={nodes.Cube014.geometry}
            material={nodes.Cube014.material}
            position={[4.21, 0.45, -2.48]}
            rotation={[0, 1.57, 0]}
            scale={[4.04, 0.83, 0.25]}
          />
        </group>
        <mesh
          name="Cube015"
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[0.27, 0.64, -5.42]}
          rotation={[0, 1.57, 0]}
          scale={[2.92, 2.17, 0.07]}
        />
        <mesh
          name="Cube016"
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[-0.52, 0.64, -5.42]}
          rotation={[0, 1.57, 0]}
          scale={[2.92, 2.17, 0.07]}
        />
        <mesh
          name="Cube017"
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[-2.82, 0.64, -2.91]}
          scale={[2.92, 2.17, 0.07]}
        />
        <mesh
          name="Cube018"
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[-2.82, 0.64, -2.13]}
          scale={[2.92, 2.17, 0.07]}
        />
        <mesh
          name="Cube019"
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[3.19, 0.64, -2.64]}
          rotation={[0, -0.05, 0]}
          scale={[2.92, 2.17, 0.07]}
        />
        <mesh
          name="Cube020"
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[3.13, 0.64, -1.91]}
          rotation={[0, -0.06, 0]}
          scale={[2.92, 2.17, 0.07]}
        />
        <mesh
          name="Cube021"
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[-1.27, 0.64, -1.75]}
          rotation={[0, -1.04, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube022"
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[-0.81, 0.64, -1.24]}
          rotation={[0, -0.53, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube023"
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[-0.15, 0.64, -1.02]}
          rotation={[0, -0.17, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube024"
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[0.54, 0.64, -1.12]}
          rotation={[0, 0.33, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube025"
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[1.14, 0.64, -1.55]}
          rotation={[0, 0.73, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube026"
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[-1.28, 0.64, -3.29]}
          rotation={[0, 1.07, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube027"
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[-0.84, 0.64, -3.78]}
          rotation={[0, 0.6, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube028"
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[0.66, 0.64, -3.86]}
          rotation={[0, -0.46, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube029"
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[1.18, 0.64, -3.46]}
          rotation={[0, -0.97, 0]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="Cube030"
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[1.47, 0.64, -3.03]}
          rotation={[-Math.PI, 1.4, -Math.PI]}
          scale={[1, 1.86, 1]}
        />
        <mesh
          name="base"
          geometry={nodes.base.geometry}
          material={nodes.base.material}
          position={[-0.01, -0.12, -5.53]}
          scale={[20.38, 0.12, 20.38]}
        />
        <mesh
          name="grassCrateCollider"
          geometry={nodes.grassCrateCollider.geometry}
          material={nodes.grassCrateCollider.material}
          position={[-8.71, 0.26, -0.03]}
          rotation={[0, -0.55, 0]}
          scale={0.2}
        />
        <mesh
          name="snowCrateCollider"
          geometry={nodes.snowCrateCollider.geometry}
          material={nodes.snowCrateCollider.material}
          position={[8.64, 0.28, 0.39]}
          rotation={[0, -0.55, 0]}
          scale={0.2}
        />
        <mesh
          name="sandCrateCollider"
          geometry={nodes.sandCrateCollider.geometry}
          material={nodes.sandCrateCollider.material}
          position={[-1.14, 0.25, -10.95]}
          rotation={[0, -0.65, 0]}
          scale={[0.15, 0.18, 0.23]}
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload("/tps/colliders.glb")
