import { useGLTF } from "@react-three/drei"

export function Lost(props: any) {
  const { nodes, materials } = useGLTF("/Lost.glb") as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes["Node-Mesh"].geometry} material={materials.mat17} />
      <mesh
        geometry={nodes["Node-Mesh_1"].geometry}
        material={materials.mat11}
      />
      <mesh
        geometry={nodes["Node-Mesh_2"].geometry}
        material={materials.mat4}
      />
      <mesh
        geometry={nodes["Node-Mesh_3"].geometry}
        material={materials.mat21}
      />
      <mesh
        geometry={nodes["Node-Mesh_4"].geometry}
        material={materials.mat20}
      />
      <mesh
        geometry={nodes["Node-Mesh_5"].geometry}
        material={materials.mat16}
      />
      <mesh
        geometry={nodes["Node-Mesh_6"].geometry}
        material={materials.mat10}
      />
      <mesh
        geometry={nodes["Node-Mesh_7"].geometry}
        material={materials.mat9}
      />
      <mesh
        geometry={nodes["Node-Mesh_8"].geometry}
        material={materials.mat18}
      />
      <mesh
        geometry={nodes["Node-Mesh_9"].geometry}
        material={materials.mat19}
      />
      <mesh
        geometry={nodes["Node-Mesh_10"].geometry}
        material={materials.mat22}
      />
      <mesh
        geometry={nodes["Node-Mesh_11"].geometry}
        material={materials.mat25}
      />
      <mesh
        geometry={nodes["Node-Mesh_12"].geometry}
        material={materials.mat23}
      />
      <mesh
        geometry={nodes["Node-Mesh_13"].geometry}
        material={materials.mat15}
      />
    </group>
  )
}

// useGLTF.preload('/Lost.glb')
