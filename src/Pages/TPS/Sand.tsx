/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -k public/tps/sand.glb src/Sand.tsx
*/

import React, { useEffect, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useBakeLoader } from "../../utils/3d/useBakeLoader"
import { Vector3 } from "@react-three/fiber"
import { Group, Mesh } from "three"

export function Sand(props: any) {
  const { nodes, materials } = useGLTF("/tps/sand.glb") as any
  const group = useRef<Group>(null!)

  const material = useBakeLoader("/tps/sand.optimized.webp", false, {})
  return (
    <group {...props} dispose={null}>
      <group ref={group} name="Chest" position={[-1.14, 0.08, -10.95]}>
        <mesh
          name="object1"
          geometry={nodes.object1.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object10"
          geometry={nodes.object10.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object2"
          geometry={nodes.object2.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object3"
          geometry={nodes.object3.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object4"
          geometry={nodes.object4.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object5"
          geometry={nodes.object5.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object6"
          geometry={nodes.object6.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object7"
          geometry={nodes.object7.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object8"
          geometry={nodes.object8.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
        <mesh
          name="object9"
          geometry={nodes.object9.geometry}
          material={material}
          rotation={[Math.PI, -0.92, Math.PI]}
          scale={0.47}
        />
      </group>
      <group name="palm_long" position={[-1.2, 0, -13.7]} scale={0.66}>
        <mesh
          name="Group_28"
          geometry={nodes.Group_28.geometry}
          material={material}
          position={[-1.08, 0, 0.06]}
          scale={0.79}
        />
        <mesh
          name="Group_30"
          geometry={nodes.Group_30.geometry}
          material={material}
          position={[-0.41, 1.79, -0.55]}
          scale={0.57}
        />
      </group>
      <group name="palm_short" position={[0.38, 0, -13.25]} scale={0.68}>
        <mesh
          name="Group_23"
          geometry={nodes.Group_23.geometry}
          material={material}
          position={[-0.67, 0, 0.61]}
          scale={[0.79, 0.6, 0.79]}
        />
        <mesh
          name="Group_25"
          geometry={nodes.Group_25.geometry}
          material={material}
          position={[-0.2, 1.33, -0.08]}
          scale={0.57}
        />
      </group>
      <group name="pathSand" position={[-0.14, 0, -11.34]}>
        <mesh
          name="path_wood"
          geometry={nodes.path_wood.geometry}
          material={material}
          position={[0.05, -0.02, 1.35]}
          rotation={[0, 1.57, 0]}
        />
        <mesh
          name="path_woodCorner"
          geometry={nodes.path_woodCorner.geometry}
          material={material}
          position={[0.04, -0.02, 0.29]}
        />
      </group>
      <group
        name="pirate_crew_8angles"
        position={[0.27, 0, -11.48]}
        rotation={[-Math.PI, 0.55, -Math.PI]}
        scale={0.58}
      >
        <mesh
          name="armLeft_1"
          geometry={nodes.armLeft_1.geometry}
          material={material}
          position={[-0.17, 0.7, 0]}
        />
        <mesh
          name="armRight_1"
          geometry={nodes.armRight_1.geometry}
          material={material}
          position={[0.17, 0.7, 0]}
        />
        <mesh
          name="body_1"
          geometry={nodes.body_1.geometry}
          material={material}
          position={[0, 0.41, 0]}
        />
        <mesh
          name="Group_143"
          geometry={nodes.Group_143.geometry}
          material={material}
          position={[0, 0.78, 0]}
        >
          <mesh
            name="Group_143001"
            geometry={nodes.Group_143001.geometry}
            material={material}
            position={[0.13, 0.19, -0.14]}
            rotation={[0.26, 0, 0]}
            scale={0.93}
          />
        </mesh>
        <mesh
          name="legLeft_1"
          geometry={nodes.legLeft_1.geometry}
          material={material}
          position={[-0.16, 0.41, 0]}
        />
        <mesh
          name="legRight_1"
          geometry={nodes.legRight_1.geometry}
          material={material}
          position={[0.16, 0.41, 0]}
        />
      </group>
      <group
        name="tmpParent001"
        position={[0.39, 0, -8.3]}
        rotation={[3.07, 0.33, -2.94]}
      >
        <mesh
          name="sign001"
          geometry={nodes.sign001.geometry}
          material={material}
          position={[0, -0.05, 0]}
        />
      </group>
      <group name="tmpParent002" position={[-0.14, 0, -11.34]}>
        <mesh
          name="cactus_short"
          geometry={nodes.cactus_short.geometry}
          material={material}
          position={[1.84, -0.05, -1.45]}
        />
        <mesh
          name="cactus_short001"
          geometry={nodes.cactus_short001.geometry}
          material={material}
          position={[2.82, -0.05, 0.38]}
          rotation={[0, 0.84, 0]}
        />
        <mesh
          name="cactus_short002"
          geometry={nodes.cactus_short002.geometry}
          material={material}
          position={[1.79, -0.05, -0.28]}
          rotation={[0, 0.84, 0]}
        />
      </group>
      <group name="tmpParent006" position={[0.98, 0, -12.84]}>
        <mesh
          name="cactus_tall"
          geometry={nodes.cactus_tall.geometry}
          material={material}
          position={[0.6, -0.05, 3.95]}
        />
      </group>
      <group name="tmpParent008" position={[-0.14, 0, -11.34]}>
        <mesh
          name="crops_wheatStageA"
          geometry={nodes.crops_wheatStageA.geometry}
          material={material}
          position={[-2.5, -0.05, 2.77]}
        />
        <mesh
          name="crops_wheatStageA001"
          geometry={nodes.crops_wheatStageA001.geometry}
          material={material}
          position={[-1.91, -0.05, 2.65]}
        />
        <mesh
          name="crops_wheatStageA002"
          geometry={nodes.crops_wheatStageA002.geometry}
          material={material}
          position={[-1.46, -0.05, 2.2]}
        />
        <mesh
          name="crops_wheatStageA003"
          geometry={nodes.crops_wheatStageA003.geometry}
          material={material}
          position={[-1.38, -0.05, 2.68]}
        />
        <mesh
          name="crops_wheatStageA004"
          geometry={nodes.crops_wheatStageA004.geometry}
          material={material}
          position={[-3.15, -0.05, 2.71]}
        />
      </group>
      <group name="tmpParent009" position={[-2.62, 0, -9.04]}>
        <mesh
          name="crops_wheatStageB"
          geometry={nodes.crops_wheatStageB.geometry}
          material={material}
          position={[0, -0.05, 0]}
        />
        <mesh
          name="crops_wheatStageB001"
          geometry={nodes.crops_wheatStageB001.geometry}
          material={material}
          position={[0.47, -0.11, -0.01]}
        />
        <mesh
          name="crops_wheatStageB002"
          geometry={nodes.crops_wheatStageB002.geometry}
          material={material}
          position={[-0.54, -0.11, -0.11]}
        />
      </group>
      <group name="tmpParent010" position={[-0.14, 0, -11.34]}>
        <mesh
          name="crops_bambooStageA"
          geometry={nodes.crops_bambooStageA.geometry}
          material={material}
          position={[-1, -0.05, 3.11]}
        />
        <mesh
          name="crops_bambooStageA001"
          geometry={nodes.crops_bambooStageA001.geometry}
          material={material}
          position={[-1.42, -0.01, 3.25]}
          scale={0.86}
        />
      </group>
      <group name="tmpParent011" position={[-3.09, 0, -8.14]}>
        <mesh
          name="crops_bambooStageB"
          geometry={nodes.crops_bambooStageB.geometry}
          material={material}
          position={[0, -0.05, 0]}
        />
      </group>
      <group name="tmpParent012" position={[-2.53, 0, -8.12]} scale={0.86}>
        <mesh
          name="crops_bambooStageB001"
          geometry={nodes.crops_bambooStageB001.geometry}
          material={material}
          position={[0, -0.05, 0]}
        />
      </group>
      <group name="tmpParent013" position={[-1.97, 0, -8.2]} scale={1.08}>
        <mesh
          name="crops_bambooStageB002"
          geometry={nodes.crops_bambooStageB002.geometry}
          material={material}
          position={[0, -0.05, 0]}
        />
      </group>
      <mesh
        name="plateformeSand"
        geometry={nodes.plateformeSand.geometry}
        material={material}
        position={[-0.14, 0, -11.34]}
        scale={4}
      />
      <mesh
        name="bottle"
        geometry={nodes.bottle.geometry}
        material={material}
        position={[3.04, 0.43, -11.43]}
        rotation={[0, -0.59, -Math.PI / 2]}
        scale={0.34}
      />
      <mesh
        name="boat_small_8angles"
        geometry={nodes.boat_small_8angles.geometry}
        material={material}
        position={[2.54, 0.33, -9.86]}
        rotation={[Math.PI, 0.73, 0]}
      />
      <mesh
        name="platform_beach"
        geometry={nodes.platform_beach.geometry}
        material={material}
        position={[-1.1, 0, -10.98]}
        rotation={[0, 1.57, 0]}
      />
      <mesh
        name="shovel"
        geometry={nodes.shovel.geometry}
        material={material}
        position={[-1.5, -0.07, -10.59]}
        rotation={[-1.69, -0.23, 1.31]}
        scale={0.52}
      />
      <mesh
        name="sword_scimitar"
        geometry={nodes.sword_scimitar.geometry}
        material={material}
        position={[0.73, 0.23, -11.29]}
        rotation={[2.86, 0, -0.52]}
      />
      <mesh
        name="sword_scimitar001"
        geometry={nodes.sword_scimitar001.geometry}
        material={material}
        position={[0.96, 0.24, -11.27]}
        rotation={[-0.29, 0, 2.53]}
      />
      <mesh
        name="tree_palm"
        geometry={nodes.tree_palm.geometry}
        material={material}
        position={[-1.33, -0.04, -12.48]}
        scale={0.81}
      />
      <mesh
        name="tree_palm001"
        geometry={nodes.tree_palm001.geometry}
        material={material}
        position={[-0.49, -0.21, -13.74]}
        scale={0.69}
      />
      <mesh
        name="tree_palmBend"
        geometry={nodes.tree_palmBend.geometry}
        material={material}
        position={[-2.02, -0.05, -12.28]}
      />
      <mesh
        name="tree_palmShort"
        geometry={nodes.tree_palmShort.geometry}
        material={material}
        position={[-1.52, -0.05, -13.14]}
      />
      <mesh
        name="tree_palmShort001"
        geometry={nodes.tree_palmShort001.geometry}
        material={material}
        position={[-1.35, -0.05, -11.91]}
        scale={0.59}
      />
      <mesh
        name="tree_palmTall"
        geometry={nodes.tree_palmTall.geometry}
        material={material}
        position={[-2.65, -0.05, -12.74]}
      />
      <mesh
        name="tree_palmTall001"
        geometry={nodes.tree_palmTall001.geometry}
        material={material}
        position={[-2.49, -0.05, -11.6]}
        rotation={[0, -0.79, 0]}
        scale={0.91}
      />
      <mesh
        name="wood-support"
        geometry={nodes["wood-support"].geometry}
        material={material}
        position={[-0.14, 0, -7.66]}
      />
      <mesh
        name="barrel004"
        geometry={nodes.barrel004.geometry}
        material={material}
        position={[3.11, 0, -11.41]}
        rotation={[0, 1.13, 0]}
      />
      <mesh
        name="barrel005"
        geometry={nodes.barrel005.geometry}
        material={material}
        position={[2.8, 0, -11.77]}
        rotation={[0, 1.13, 0]}
      />
      <mesh
        name="barrel006"
        geometry={nodes.barrel006.geometry}
        material={material}
        position={[2.66, 0, -11.39]}
        rotation={[0, 1.13, 0]}
      />
      <mesh
        name="tree_palmTall002"
        geometry={nodes.tree_palmTall002.geometry}
        material={material}
        position={[-2.81, -0.03, -13.57]}
        rotation={[0, 0.9, 0]}
      />
      <mesh
        name="tree_palmBend001"
        geometry={nodes.tree_palmBend001.geometry}
        material={material}
        position={[-2.97, -0.05, -12.02]}
        rotation={[0, 0.76, 0]}
      />
      <mesh
        name="tree_palmShort002"
        geometry={nodes.tree_palmShort002.geometry}
        material={material}
        position={[-3.39, -0.05, -12.9]}
        rotation={[0, 0.78, 0]}
      />
      <mesh
        name="canoe_paddle"
        geometry={nodes.canoe_paddle.geometry}
        material={material}
        position={[2.69, 0.33, -10.01]}
        rotation={[0, -1.38, 0]}
      />
      <mesh
        name="canoe_paddle001"
        geometry={nodes.canoe_paddle001.geometry}
        material={material}
        position={[2.33, 0.21, -10.34]}
        rotation={[-0.97, 0.56, 0.67]}
      />
      <mesh
        name="formation_rock"
        geometry={nodes.formation_rock.geometry}
        material={material}
        position={[2.67, 0, -13.51]}
        rotation={[0, 0.54, 0]}
      />
      <mesh
        name="formation_rock001"
        geometry={nodes.formation_rock001.geometry}
        material={material}
        position={[2.79, 0, -9.18]}
        rotation={[0, 0.54, 0]}
        scale={0.68}
      />
      <mesh
        name="formationLarge_rock"
        geometry={nodes.formationLarge_rock.geometry}
        material={material}
        position={[1.75, 0, -14.05]}
        scale={[1, 0.77, 1]}
      />
      <mesh
        name="hole"
        geometry={nodes.hole.geometry}
        material={material}
        position={[-2.41, 0, -10.18]}
      />
    </group>
  )
}

useGLTF.preload("/tps/sand.glb")
