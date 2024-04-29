import { useFrame, useThree } from "@react-three/fiber"
import { forwardRef, useImperativeHandle, useRef, useState } from "react"
import {
  Group,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  Raycaster,
  Vector2,
  Vector3,
} from "three"
import { dragPlaceholderColor } from "../constants/color"
import { blockList } from "../../../assets/3D/city/blockList"

const POS_Y = 0.001
export const DragPlaceholder = forwardRef(
  (
    {
      position = { x: 1, y: 1 },
      round = Math.round,
      clamp = MathUtils.clamp,
      gridRef = null,
      ...props
    }: any,
    forwardedRef: any
  ) => {
    const { size, camera } = useThree()
    const ref = useRef<any>(null)
    const pos = useRef(new Vector3(position.x + 0.5, POS_Y, position.y + 0.5))
    const gridPos = useRef(new Vector2(1, 1))
    const [visible, setVisible] = useState(false)
    const shouldAdd = useRef(false)
    const raycaster = new Raycaster()
    const pointer = useRef(new Vector2())
    const [model, setModel] = useState("trano")
    useImperativeHandle(
      forwardedRef,
      () => ({
        onDragOver: (event: DragEvent) => {
          const px = event.clientX - size.left
          const py = event.clientY - size.top
          pointer.current.set(
            (px / size.width) * 2 - 1,
            -(py / size.height) * 2 + 1
          )
          const intersections = raycaster.intersectObject(gridRef.current)
          if (gridRef && intersections.length > 0) {
            setModel(event.dataTransfer!.getData("Text"))
            shouldAdd.current = true
            setVisible(true)
            const { x, z } = intersections[0].point
            gridPos.current.set(round(clamp(x, -5, 4)), round(clamp(z, -5, 4)))
            pos.current.set(
              gridPos.current.x + 0.5,
              POS_Y,
              gridPos.current.y + 0.5
            )
          } else {
            setVisible(false)
            shouldAdd.current = false
          }
        },
        shouldAdd: () => {
          return shouldAdd.current
        },
        position: () => {
          return gridPos.current
        },
        hide: () => {
          setVisible(false)
        },
        //TODO
        /**
         * On dragFinished => Apetaka le model + esorina le placeholder
         * On dragOver => Atao mandehadeha le model
         * On tsy voadrag => esorina le placeholder
         */
      }),
      [raycaster]
    )
    useFrame(() => {
      ref.current!.position.lerp(pos.current, 0.1)
      raycaster.setFromCamera(pointer.current, camera)
    })
    return (
      <mesh ref={ref} rotation-x={-Math.PI / 2} visible={visible}>
        <planeGeometry />
        <meshStandardMaterial color={dragPlaceholderColor} transparent />
      </mesh>
    )
  }
)
