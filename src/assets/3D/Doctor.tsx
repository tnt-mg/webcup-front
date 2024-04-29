import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

function Doctor(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/doctor/scene.gltf") as any
  const { actions } = useAnimations(animations, group) as any
  // play animation
  React.useEffect(() => {
    actions["Take 001"].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.13}
        >
          <group
            name="acb33b0390ac4a4591a6b4518e958e7dfbx"
            rotation={[-Math.PI, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <group
                    name="buckle"
                    position={[-91.56, -235.56, -918.84]}
                    rotation={[-0.02, -0.01, 0]}
                  />
                  <group
                    name="Plane006"
                    position={[-197.1, -206.08, -914.36]}
                    rotation={[0, 0.03, 0]}
                  />
                  <group
                    name="belt2"
                    position={[-36.84, -235.21, -916.82]}
                    rotation={[0, -0.02, 0]}
                  />
                  <group
                    name="buckel2"
                    position={[-91.56, -231.38, -941.37]}
                    rotation={[-0.02, -0.01, 0]}
                  />
                  <primitive object={nodes._rootJoint} />
                  <group
                    name="Object_6"
                    position={[-89.86, -242.62, -546.75]}
                    rotation={[1.57, 0, 0]}
                    scale={[1, 0.98, 1.02]}
                  />
                  <group
                    name="Object_8"
                    position={[-91.48, -94.09, -268.99]}
                    rotation={[0.84, 0, 0]}
                    scale={[1, 1, 0.64]}
                  />
                  <group name="Object_10" position={[-91.27, 16.95, -224.6]} />
                  <group name="Object_12" position={[0.95, -8.2, -350.26]} />
                  <group
                    name="Object_14"
                    position={[-181.68, -225.79, -545.75]}
                  />
                  <group
                    name="Object_16"
                    position={[-86.49, -16.54, -802.11]}
                  />
                  <group
                    name="Object_18"
                    position={[136.38, 74.48, -2164.23]}
                  />
                  <group
                    name="Object_20"
                    position={[183.79, -204.83, -2350.56]}
                  />
                  <group
                    name="Object_22"
                    position={[175.11, -157.83, -2225.85]}
                  />
                  <group
                    name="Object_24"
                    position={[137.08, 53.59, -2198.85]}
                  />
                  <group
                    name="Object_26"
                    position={[-92.75, -35.34, -923.94]}
                  />
                  <group
                    name="Object_28"
                    position={[-91.56, -235.56, -918.84]}
                  />
                  <group
                    name="Object_30"
                    position={[-197.1, -206.08, -914.36]}
                  />
                  <group
                    name="Object_32"
                    position={[-36.84, -235.21, -916.82]}
                  />
                  <group name="Object_34" position={[-88.78, -176.6, 6.01]} />
                  <group name="Object_36" />
                  <group
                    name="Object_38"
                    position={[-311.83, 53.59, -2198.85]}
                  />
                  <group
                    name="Object_40"
                    position={[-91.56, -231.38, -941.37]}
                  />
                  <group
                    name="Object_42"
                    position={[-174.57, -231.51, -762.06]}
                  />
                  <group
                    name="Object_44"
                    position={[-192.45, -225.05, -940.49]}
                  />
                  <group
                    name="Object_46"
                    position={[-219.54, -212.82, -1156.54]}
                  />
                  <group name="Object_48" position={[-43.23, -173.25, 5.68]} />
                  <group
                    name="Object_50"
                    position={[731.68, -202.29, -884.33]}
                  />
                  <group
                    name="Object_52"
                    position={[-359.49, -204.83, -2350.56]}
                  />
                  <group
                    name="Object_54"
                    position={[-349.9, -157.83, -2225.85]}
                  />
                  <group
                    name="Object_56"
                    position={[-918.11, -180.51, -884.33]}
                  />
                  <group name="Collar" position={[-91.27, 16.95, -224.6]}>
                    <group
                      name="tie1"
                      position={[-0.21, -111.04, -44.39]}
                      rotation={[0.84, 0, 0]}
                      scale={[1, 1, 0.64]}
                    >
                      <group
                        name="tie"
                        position={[1.59, -31.89, 31.82]}
                        rotation={[0.75, 0, 0]}
                        scale={[1, 1.24, 1.37]}
                      />
                    </group>
                  </group>
                  <group name="coat" position={[0.95, -8.2, -350.26]} />
                  <group
                    name="button003"
                    position={[-181.68, -225.79, -545.75]}
                  />
                  <group name="shirt" position={[-86.49, -16.54, -802.11]} />
                  <group name="trousers" position={[136.38, 74.48, -2164.23]} />
                  <group
                    name="shoesoleL"
                    position={[183.79, -204.83, -2350.56]}
                  />
                  <group name="shoeL" position={[175.11, -157.83, -2225.85]} />
                  <group name="shinL" position={[137.08, 53.59, -2198.85]} />
                  <group name="belt" position={[-92.75, -35.34, -923.94]} />
                  <group name="glasses" position={[-88.78, -176.6, 6.01]} />
                  <group name="head" />
                  <group name="ShinR" position={[-311.83, 53.59, -2198.85]} />
                  <group
                    name="button004"
                    position={[-174.57, -231.51, -762.06]}
                  />
                  <group
                    name="button005"
                    position={[-192.45, -225.05, -940.49]}
                  />
                  <group
                    name="button006"
                    position={[-219.54, -212.82, -1156.54]}
                  />
                  <group name="glass" position={[-43.23, -173.25, 5.68]} />
                  <group name="hand_L" position={[731.68, -202.29, -884.33]} />
                  <group
                    name="shoesoleR"
                    position={[-359.49, -204.83, -2350.56]}
                  />
                  <group name="shoeR" position={[-349.9, -157.83, -2225.85]} />
                  <group name="hand_R" position={[-918.11, -180.51, -884.33]} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <skinnedMesh
                    name="Object_19"
                    geometry={nodes.Object_19.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_19.skeleton}
                  />
                  <skinnedMesh
                    name="Object_21"
                    geometry={nodes.Object_21.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_21.skeleton}
                  />
                  <skinnedMesh
                    name="Object_23"
                    geometry={nodes.Object_23.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_23.skeleton}
                  />
                  <skinnedMesh
                    name="Object_25"
                    geometry={nodes.Object_25.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_25.skeleton}
                  />
                  <skinnedMesh
                    name="Object_27"
                    geometry={nodes.Object_27.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_27.skeleton}
                  />
                  <skinnedMesh
                    name="Object_29"
                    geometry={nodes.Object_29.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_29.skeleton}
                  />
                  <skinnedMesh
                    name="Object_31"
                    geometry={nodes.Object_31.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_31.skeleton}
                  />
                  <skinnedMesh
                    name="Object_33"
                    geometry={nodes.Object_33.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_33.skeleton}
                  />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <skinnedMesh
                    name="Object_37"
                    geometry={nodes.Object_37.geometry}
                    material={materials.Material_3}
                    skeleton={nodes.Object_37.skeleton}
                  />
                  <skinnedMesh
                    name="Object_39"
                    geometry={nodes.Object_39.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_39.skeleton}
                  />
                  <skinnedMesh
                    name="Object_41"
                    geometry={nodes.Object_41.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_41.skeleton}
                  />
                  <skinnedMesh
                    name="Object_43"
                    geometry={nodes.Object_43.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_43.skeleton}
                  />
                  <skinnedMesh
                    name="Object_45"
                    geometry={nodes.Object_45.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_45.skeleton}
                  />
                  <skinnedMesh
                    name="Object_47"
                    geometry={nodes.Object_47.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_47.skeleton}
                  />
                  <skinnedMesh
                    name="Object_49"
                    geometry={nodes.Object_49.geometry}
                    material={materials.material_0}
                    skeleton={nodes.Object_49.skeleton}
                  />
                  <skinnedMesh
                    name="Object_51"
                    geometry={nodes.Object_51.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_51.skeleton}
                  />
                  <skinnedMesh
                    name="Object_53"
                    geometry={nodes.Object_53.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_53.skeleton}
                  />
                  <skinnedMesh
                    name="Object_55"
                    geometry={nodes.Object_55.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_55.skeleton}
                  />
                  <skinnedMesh
                    name="Object_57"
                    geometry={nodes.Object_57.geometry}
                    material={materials.Material_4}
                    skeleton={nodes.Object_57.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default Doctor
