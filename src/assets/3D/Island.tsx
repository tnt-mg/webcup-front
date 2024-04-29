import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useSpring, animated, config } from "@react-spring/three"

export const Island = forwardRef((props: any, ref: any) => {
  const { nodes, materials } = useGLTF("/island/island.gltf") as any

  // * floating settings
  const ref_float = useRef() as any
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref_float.current.rotation.set(
      0.1 + Math.cos(t / 4.5) / 10,
      Math.sin(t / 4) / 4,
      0.3 - (1 + Math.sin(t / 4)) / 8
    )
    ref_float.current.position.y = (1 + Math.sin(t / 2)) / 15

    // console.log(state.clock.getElapsedTime());
    // ref_float.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })

  // * invoke
  const [scale, setScale] = useState(0)
  const { scale_value } = useSpring({
    scale_value: scale,
    config: config.wobbly,
  }) as any

  useImperativeHandle(ref as any, () => ({
    invoke() {
      setScale(0.04)
    },
    beat() {
      setScale(0.08)
      setTimeout(() => {
        setScale(0.04)
      }, 100)
    },
  }))

  return (
    <group {...props} dispose={null}>
      <group ref={ref_float}>
        <animated.mesh rotation={[-1.4, 0, 0.7]} scale={scale_value}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group
              position={[0.38, 1.76, 2.29]}
              rotation={[0.46, -0.03, 0.37]}
              scale={0.1}
            >
              <mesh
                geometry={nodes.Object_8.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_9.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_10.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_11.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[7.07, 2.17, 0.82]}
              rotation={[0.28, -0.91, 0.35]}
              scale={0.04}
            >
              <mesh
                geometry={nodes.Object_13.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_14.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-4.59, 2.09, 1.68]}
              rotation={[0, 0.62, 0]}
              scale={[0.39, 0.25, 0.39]}
            >
              <mesh
                geometry={nodes.Object_16.geometry}
                material={materials.Material}
              />
              <mesh
                geometry={nodes.Object_17.geometry}
                material={materials["Material.007"]}
              />
              <mesh
                geometry={nodes.Object_18.geometry}
                material={materials["Material.008"]}
              />
              <mesh
                geometry={nodes.Object_19.geometry}
                material={materials["Material.009"]}
              />
            </group>
            <group
              position={[1.16, 1.41, 5.19]}
              rotation={[0.24, 0.5, 0.22]}
              scale={0.12}
            >
              <mesh
                geometry={nodes.Object_21.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_22.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_23.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_24.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[1.15, 1.3, 4.52]}
              rotation={[3.12, 1.19, 3.09]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_26.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_27.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_28.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_29.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[6.21, 1.93, -1.14]}
              rotation={[0.33, -0.45, 0.09]}
              scale={0.04}
            >
              <mesh
                geometry={nodes.Object_31.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_32.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[6.74, 1.98, -0.39]}
              rotation={[0, 0, 0.39]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_34.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_35.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[7.47, 2.27, 0.14]}
              rotation={[-0.01, -0.11, -0.04]}
              scale={0.08}
            >
              <mesh
                geometry={nodes.Object_37.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_38.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[5.98, 1.63, 0.2]}
              rotation={[-2.83, 0.36, 2.76]}
              scale={0.03}
            >
              <mesh
                geometry={nodes.Object_40.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_41.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-0.02, 1.66, -4.54]}
              rotation={[1.91, 1.43, -1.63]}
              scale={0.09}
            >
              <mesh
                geometry={nodes.Object_43.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_44.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_45.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_46.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[-1.11, 1.61, -2.8]}
              rotation={[2.58, 1.38, -2.42]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_48.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_49.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_50.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_51.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[-0.36, 1.47, -3.12]}
              rotation={[3.12, -0.4, -2.85]}
              scale={0.12}
            >
              <mesh
                geometry={nodes.Object_53.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_54.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_55.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_56.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[-5.64, 1.85, 0.24]}
              rotation={[0.2, 0.68, -0.16]}
              scale={0.06}
            >
              <mesh
                geometry={nodes.Object_58.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_59.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[0.43, 2.51, 7.95]}
              rotation={[-0.04, 0.1, 0.27]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_61.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_62.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-2.3, 1.57, -3.78]}
              rotation={[2.99, 0.56, -2.92]}
              scale={0.06}
            >
              <mesh
                geometry={nodes.Object_64.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_65.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_66.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_67.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[-6.15, 2.02, 0.31]}
              rotation={[0.05, 0.26, -0.11]}
              scale={0.03}
            >
              <mesh
                geometry={nodes.Object_69.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_70.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-5.18, 1.7, 0.69]}
              rotation={[0.09, -0.42, 0.12]}
              scale={0.04}
            >
              <mesh
                geometry={nodes.Object_72.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_73.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-0.31, 1.96, 2.1]}
              rotation={[0.16, -0.18, -0.1]}
              scale={0.04}
            >
              <mesh
                geometry={nodes.Object_75.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_76.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-0.73, 2.43, 1.08]}
              rotation={[0.13, -0.09, -0.07]}
              scale={0.03}
            >
              <mesh
                geometry={nodes.Object_78.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_79.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[0.29, 2.06, 1.12]}
              rotation={[2.57, 0.97, -2.46]}
              scale={0.1}
            >
              <mesh
                geometry={nodes.Object_81.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_82.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_83.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_84.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <group
              position={[4.44, 1.6, -5.01]}
              rotation={[0.1, 1.23, 0.09]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_96.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_97.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[4.11, 2.75, -6.13]}
              rotation={[-2.97, 1.37, -3.01]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_99.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_100.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[4.53, 2.58, -5.76]}
              rotation={[-0.07, 1.29, 0.23]}
              scale={0.05}
            >
              <mesh
                geometry={nodes.Object_102.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_103.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[4.92, 2.84, -5.92]}
              rotation={[-0.24, -0.73, -0.13]}
              scale={0.03}
            >
              <mesh
                geometry={nodes.Object_105.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_106.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[-0.11, 2.26, 8.06]}
              rotation={[-0.04, 0.1, 0.27]}
              scale={0.04}
            >
              <mesh
                geometry={nodes.Object_108.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_109.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[0.1, 2.03, 8.68]}
              rotation={[-2.5, 0.7, 2.63]}
              scale={0.06}
            >
              <mesh
                geometry={nodes.Object_111.geometry}
                material={materials["Material.010"]}
              />
              <mesh
                geometry={nodes.Object_112.geometry}
                material={materials["Material.011"]}
              />
            </group>
            <group
              position={[6.46, 1.89, 0.89]}
              rotation={[2.95, 0.62, -3.1]}
              scale={0.07}
            >
              <mesh
                geometry={nodes.Object_114.geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes.Object_115.geometry}
                material={materials["Material.004"]}
              />
              <mesh
                geometry={nodes.Object_116.geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes.Object_117.geometry}
                material={materials["Material.006"]}
              />
            </group>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.003"]}
              scale={10}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials["Material.001"]}
              position={[-0.01, 1.45, -0.02]}
              rotation={[0, -0.64, 0]}
              scale={10.1}
            />
            <mesh
              geometry={nodes.Object_86.geometry}
              material={materials.material_0}
              position={[-6.82, 6.28, -4.47]}
              rotation={[0, -0.02, 0]}
              scale={0.72}
            />
            <mesh
              geometry={nodes.Object_88.geometry}
              material={materials.cloud}
              position={[-6.31, 5.04, -3.6]}
              rotation={[-0.39, 0, -0.08]}
              scale={0.53}
            />
            <mesh
              geometry={nodes.Object_90.geometry}
              material={materials.cloud}
              position={[6.6, 6.27, 0.85]}
              rotation={[0.88, 0.08, 0.42]}
              scale={0.88}
            />
            <mesh
              geometry={nodes.Object_92.geometry}
              material={materials.material_0}
              position={[3.23, 5.23, -5.02]}
              rotation={[-1.93, 0.6, -0.27]}
              scale={[0.76, 0.76, 0.89]}
            />
            <mesh
              geometry={nodes.Object_94.geometry}
              material={materials.material_0}
              position={[7.47, 4.74, 4.55]}
              rotation={[3.08, -0.01, -3.08]}
              scale={0.6}
            />
            <mesh
              geometry={nodes.Object_119.geometry}
              material={materials.cloud}
              position={[5.79, 5.1, 0.83]}
              rotation={[0.8, -0.43, 0.69]}
              scale={0.41}
            />
            <mesh
              geometry={nodes.Object_121.geometry}
              material={materials.cloud}
              position={[6.73, 5.22, 1.49]}
              rotation={[0.04, 0.13, 0.08]}
              scale={0.24}
            />
            <mesh
              geometry={nodes.Object_123.geometry}
              material={materials["Material.004"]}
              position={[4, -3.07, 6.58]}
              rotation={[2.67, -0.43, 1.3]}
              scale={0.33}
            />
            <mesh
              geometry={nodes.Object_125.geometry}
              material={materials["Material.004"]}
              position={[3.36, -2.7, 7.04]}
              rotation={[1.3, -0.65, -0.77]}
              scale={0.29}
            />
            <mesh
              geometry={nodes.Object_127.geometry}
              material={materials["Material.004"]}
              position={[3.4, -3.44, 6.62]}
              rotation={[1.13, 0.39, -2.12]}
              scale={0.41}
            />
            <mesh
              geometry={nodes.Object_129.geometry}
              material={materials["Material.006"]}
              position={[2.66, 2.07, -4.71]}
              rotation={[-0.37, 0.43, 0.54]}
              scale={0.22}
            />
            <mesh
              geometry={nodes.Object_131.geometry}
              material={materials["Material.006"]}
              position={[2.35, 2.07, -4.7]}
              rotation={[2.03, -0.09, 2.5]}
              scale={0.09}
            />
            <mesh
              geometry={nodes.Object_133.geometry}
              material={materials["Material.006"]}
              position={[2.44, 1.99, -4.61]}
              rotation={[-0.02, 0.8, 0.7]}
              scale={0.05}
            />
            <mesh
              geometry={nodes.Object_135.geometry}
              material={materials["Material.006"]}
              position={[0.17, 1.35, 3.06]}
              rotation={[-1.77, 0.43, 1.26]}
              scale={0.44}
            />
            <mesh
              geometry={nodes.Object_137.geometry}
              material={materials["Material.006"]}
              position={[-0.28, 1.29, 3.2]}
              rotation={[2.03, -0.09, 2.5]}
              scale={0.18}
            />
            <mesh
              geometry={nodes.Object_139.geometry}
              material={materials["Material.006"]}
              position={[-0.05, 1.1, 3.37]}
              rotation={[3.13, 0.18, 2.93]}
              scale={0.09}
            />
            <mesh
              geometry={nodes.Object_141.geometry}
              material={materials["Material.004"]}
              position={[4.24, -2.38, 6.7]}
              rotation={[2.67, -0.43, 1.3]}
              scale={0.29}
            />
            <mesh
              geometry={nodes.Object_143.geometry}
              material={materials["Material.004"]}
              position={[3.89, -2.68, 6.94]}
              rotation={[-3.1, 0.52, -1.71]}
              scale={0.19}
            />
          </group>
        </animated.mesh>
      </group>
    </group>
  )
})

useGLTF.preload("/island/island.gltf")
