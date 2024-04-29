import React, { forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Html, useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useSpring, animated, config } from "@react-spring/three"
import * as THREE from "three"

export const Brain = forwardRef((props: any, ref: any) => {
  const { nodes, materials } = useGLTF("/brain.glb") as any

  const [rotationY, setRotationY] = useState(0)
  const [rotationX, setRotationX] = useState(0)
  const { rotationY_value } = useSpring({
    rotationY_value: [rotationX, rotationY, 0],
    config: config.default,
  }) as any

  const [vx, setVX] = useState("hidden")

  const [wx, setWX] = useState("hidden")

  const [cs, setCS] = useState(0)

  useImperativeHandle(ref, () => ({
    showVideo() {
      setCS(0)
      setRotationY(Math.PI / 6)
      setRotationX(0)
      setVX("")
      setWX("")
    },
    showWhite() {
      setCS(0)
      setRotationY(-Math.PI / 4)
      setRotationX(0)
      setWX("")
      setVX("hidden")
    },
    showCity() {
      setRotationY(Math.PI / 4)
      setRotationX(Math.PI / 12)
      setCS(1)
      setWX("hidden")
      setVX("hidden")
    },
  }))
  return (
    <animated.mesh {...props} dispose={null} rotation={rotationY_value}>
      <mesh
        geometry={nodes.Brain_Part_01_BRAIN_TEXTURE_blinn2_0.geometry}
        material={materials.BRAIN_TEXTURE_blinn2}
      />

      {/* for video x = -0.4 */}
      <animated.mesh position={[-0.4, 0.3, -1.5]} rotation={[0, 0, Math.PI]}>
        <Marker rotation={[0, 0, -Math.PI / 2]}>
          <svg className={vx + " w-6"} viewBox="0 -1.5 20 20">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="0.5"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-300.000000, -3921.000000)"
                className="fill-current"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M262,3771.3123 L262,3771.36176 L262,3773.76958 L259.767,3772.33333 L262,3771.10006 L262,3771.3123 Z M256,3774.90909 C256,3775.47782 255.552,3775.93939 255,3775.93939 L247,3775.93939 C246.448,3775.93939 246,3775.47782 246,3774.90909 L246,3770.78788 C246,3770.21915 246.448,3769.75758 247,3769.75758 L255,3769.75758 C255.552,3769.75758 256,3770.21915 256,3770.78788 L256,3774.90909 Z M248.11,3765.12121 C248.662,3765.12121 249.11,3765.58382 249.11,3766.15152 C249.11,3766.71921 248.662,3767.18182 248.11,3767.18182 C247.559,3767.18182 247.11,3766.71921 247.11,3766.15152 C247.11,3765.58382 247.559,3765.12121 248.11,3765.12121 L248.11,3765.12121 Z M253.11,3763.06061 C254.213,3763.06061 255.11,3763.98479 255.11,3765.12121 C255.11,3766.25764 254.213,3767.18182 253.11,3767.18182 C252.008,3767.18182 251.11,3766.25764 251.11,3765.12121 C251.11,3763.98479 252.008,3763.06061 253.11,3763.06061 L253.11,3763.06061 Z M262.47,3768.16576 L258,3771.0403 L258,3769.24242 C258,3768.23479 257.38,3767.39818 256.452,3767.21994 C256.809,3766.60382 257.069,3765.89085 257.069,3765.12121 C257.069,3762.84527 255.299,3761 253.09,3761 C251.473,3761 250.099,3761.99321 249.468,3763.41503 C249.056,3763.19661 248.601,3763.06061 248.105,3763.06061 C246.448,3763.06061 245.108,3764.4443 245.108,3766.15152 C245.108,3766.58218 245.112,3766.99224 245.267,3767.36418 C244.57,3767.68667 244,3768.40376 244,3769.24242 L244,3775.42424 C244,3776.5617 245.062,3778 246.167,3778 L256.167,3778 C257.271,3778 258,3776.5617 258,3775.42424 L258,3773.62636 L262.47,3776.50091 C263.137,3776.92952 264,3776.436 264,3775.62721 L264,3769.03945 C264,3768.23067 263.137,3767.73715 262.47,3768.16576 L262.47,3768.16576 Z"></path>
                </g>
              </g>
            </g>
          </svg>
        </Marker>
      </animated.mesh>

      {/* for city  scale */}
      <Marker
        rotation={[0, Math.PI / 2, 0]}
        position={[-0.3, 1.3, -0.2]}
        scale={cs}
      >
        <svg className="w-6 fill-current" viewBox="0 0 50 50">
          <path d="M15 5 A 1.0001 1.0001 0 0 0 14 6L14 25L7 25 A 1.0001 1.0001 0 0 0 6 26L6 29.716797L0.048828125 43.605469 A 1.0001 1.0001 0 0 0 0.96679688 45L49.140625 45 A 1.0001 1.0001 0 0 0 50.046875 43.576172L44 30.621094L44 22 A 1.0001 1.0001 0 0 0 43 21L37 21L37 14 A 1.0001 1.0001 0 0 0 36 13L29 13L29 6 A 1.0001 1.0001 0 0 0 28 5L15 5 z M 16 7L27 7L27 13L23 13 A 1.0001 1.0001 0 0 0 22 14L22 25L16 25L16 7 z M 18 9L18 11L20 11L20 9L18 9 z M 23 9L23 11L25 11L25 9L23 9 z M 18 13L18 15L20 15L20 13L18 13 z M 24 15L35 15L35 21L31 21 A 1.0001 1.0001 0 0 0 30 22L30 39L24 39L24 26L24 15 z M 18 17L18 19L20 19L20 17L18 17 z M 26 17L26 19L28 19L28 17L26 17 z M 31 17L31 19L33 19L33 17L31 17 z M 18 21L18 23L20 23L20 21L18 21 z M 26 21L26 23L28 23L28 21L26 21 z M 32 23L42 23L42 39L34 39L32 39L32 23 z M 26 25L26 27L28 27L28 25L26 25 z M 34 25L34 27L36 27L36 25L34 25 z M 38 25L38 27L40 27L40 25L38 25 z M 8 27L22 27L22 39L8 39L8 27 z M 10 29L10 31L12 31L12 29L10 29 z M 14 29L14 31L16 31L16 29L14 29 z M 18 29L18 31L20 31L20 29L18 29 z M 26 29L26 31L28 31L28 29L26 29 z M 34 29L34 31L36 31L36 29L34 29 z M 38 29L38 31L40 31L40 29L38 29 z M 10 33L10 35L12 35L12 33L10 33 z M 14 33L14 35L16 35L16 33L14 33 z M 18 33L18 35L20 35L20 33L18 33 z M 26 33L26 35L28 35L28 33L26 33 z M 34 33L34 35L36 35L36 33L34 33 z M 38 33L38 35L40 35L40 33L38 33 z M 6 34.796875L6 40 A 1.0001 1.0001 0 0 0 7 41L23 41L34 41L43 41 A 1.0001 1.0001 0 0 0 44 40L44 35.349609L47.570312 43L2.484375 43L6 34.796875 z" />
        </svg>
      </Marker>

      {/* for whiteboard x = 1.4 */}
      <animated.mesh position={[1.4, 0.5, 1.5]} rotation={[0, 0, 0]}>
        <Marker rotation={[0, 0, -Math.PI / 2]}>
          <svg viewBox="0 0 24 24" className={wx + " w-6"}>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g fillRule="nonzero" className="!fill-current">
                <path d="M15.989,4 L14.486,5.5 L5.25,5.5 L5.10647279,5.5058012 C4.20711027,5.57880766 3.5,6.3318266 3.5,7.25 L3.5,9.49 L6.11032966,7.8500658 C7.11458474,7.21884459 8.42578385,7.4788108 9.11805049,8.41878234 L9.21263533,8.55766707 C9.60754263,9.18595342 9.66531956,9.96466959 9.37643726,10.6398047 L9.29698911,10.8062836 L8.08925622,13.0916763 C7.8957274,13.4579003 8.03572001,13.911669 8.4019376,14.1051994 C8.59519714,14.2073288 8.82158817,14.2192865 9.02227723,14.1418514 L9.12020755,14.0956881 L10.8791978,13.102709 C11.2392458,12.8979206 11.6971362,13.0237834 11.9019246,13.3838314 C12.0896473,13.7138755 11.9995312,14.1261343 11.7058795,14.3502913 L11.6208022,14.4065583 L9.85592161,15.4028701 C9.18921021,15.7781116 8.37750848,15.7888601 7.70109472,15.4314042 C6.6502057,14.8760541 6.22026466,13.6064091 6.69296688,12.535549 L6.76304763,12.3908405 L7.97078427,10.1054407 C8.09599053,9.86851294 8.08527176,9.58278305 7.94266635,9.35590187 C7.74227866,9.03709073 7.34143087,8.9208341 7.00672527,9.06794099 L6.90856446,9.12003478 L3.5,11.262 L3.5,16.754591 C3.5,17.7210893 4.28350169,18.504591 5.25,18.504591 L18.75,18.504591 C19.7164983,18.504591 20.5,17.7210893 20.5,16.754591 L20.5,9.443 L22,7.946 L22,16.754591 C22,18.5495164 20.5449254,20.004591 18.75,20.004591 L5.25,20.004591 C3.45507456,20.004591 2,18.5495164 2,16.754591 L2,7.25 C2,5.51696854 3.35645477,4.10075407 5.06557609,4.00514479 L5.25,4 L15.989,4 Z M21.175499,3.54486123 L21.3057053,3.66549405 L21.4262125,3.79573486 C22.1894032,4.68737541 22.1487912,6.0305334 21.3046801,6.87410524 L17.0238193,11.1477533 C16.760843,11.4102865 16.4369385,11.6036013 16.0810348,11.7104319 L13.7534665,12.409092 C13.224498,12.5678711 12.6669685,12.2677732 12.5081894,11.7388048 C12.4499495,11.54478 12.4520104,11.3376424 12.5140993,11.1448148 L13.2530235,8.84996054 C13.3626608,8.50946335 13.5519023,8.20001385 13.805051,7.94727999 L18.095697,3.66366511 C18.9405104,2.82023607 20.2840592,2.78081537 21.175499,3.54486123 Z M19.155487,4.72519469 L14.864841,9.00880957 C14.7804581,9.09305419 14.7173776,9.19620402 14.6808318,9.30970309 L14.2335301,10.6988744 L15.6497924,10.2737587 C15.768427,10.2381485 15.8763951,10.1737102 15.9640539,10.0861992 L20.244074,5.81339079 L20.3188279,5.72689957 C20.5422483,5.42598751 20.517571,4.99885441 20.2447063,4.72581529 C19.9440539,4.42497074 19.456482,4.42469294 19.155487,4.72519469 Z"></path>
              </g>
            </g>
          </svg>
        </Marker>
      </animated.mesh>

      <mesh
        geometry={nodes.Brain_Part_03_BRAIN_TEXTURE_blinn2_0.geometry}
        material={materials.BRAIN_TEXTURE_blinn2}
      />
    </animated.mesh>
  )
})

function Marker({ children, ...props }: any) {
  const ref = useRef() as any
  // This holds the local occluded state
  const [isOccluded, setOccluded] = useState()
  const [isInRange, setInRange] = useState()
  const isVisible = isInRange && !isOccluded
  // Test distance
  const vec = new THREE.Vector3()
  useFrame((state: any) => {
    const range = (state.camera.position.distanceTo(
      ref.current.getWorldPosition(vec)
    ) <= 20) as any
    if (range !== isInRange) setInRange(range)
  })
  return (
    <group ref={ref}>
      <Html
        // 3D-transform contents
        transform
        // Hide contents "behind" other meshes
        occlude
        // Tells us when contents are occluded (or not)
        onOcclude={setOccluded}
        // We just interpolate the visible state into css opacity and transforms
        style={{
          transition: "all 0.2s",
          opacity: isVisible ? 1 : 0,
          transform: `scale(${isVisible ? 1 : 0.25})`,
        }}
        {...props}
      >
        {children}
      </Html>
    </group>
  )
}
useGLTF.preload("/brain.glb")
