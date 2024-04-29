import { useFrame, useThree } from "@react-three/fiber"
import { useCallback, useEffect, useRef } from "react"
import { MathUtils, Vector3 } from "three"
import { useDrag } from "../utils/useDrag"

export function BlockWrapper({
  position = { x: 1, y: 1 },
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const ref = useRef() as any
  const pos = useRef(new Vector3(position.x + 0.5, 0, position.y + 0.5))
  const currentPosition = useRef(position)
  const lastPosition = useRef(position)
  const onDrag = useCallback(({ x, z }: { x: number; z: number }) => {
    currentPosition.current.x = round(clamp(x, -5, 4))
    currentPosition.current.y = round(clamp(z, -5, 4))
    pos.current.set(
      currentPosition.current.x + 0.5,
      0,
      currentPosition.current.y + 0.5
    )
  }, [])
  const reverseDrag = useCallback(() => {
    pos.current.set(
      lastPosition.current.x + 0.5,
      0,
      lastPosition.current.y + 0.5
    )
    currentPosition.current = { ...lastPosition.current }
  }, [])
  const [events, state] = useDrag(onDrag)
  const { active, hovered, drag } = state as any
  useEffect(() => {
    let cursor = "auto"
    if (active) {
      cursor = "grabbing"
    } else if (hovered) {
      cursor = "grab"
    }
    document.body.style.cursor = cursor
  }, [active, hovered])
  useEffect(() => {
    // console.log(drag)
    if (!active) {
      // reverseDrag()
    } else {
      lastPosition.current = { ...currentPosition.current }
    }
  }, [active])
  useFrame(() => {
    ref.current!.position.lerp(pos.current, 0.1)
  })
  return (
    <group ref={ref} {...(events as any)} {...props}>
      {props.children}
    </group>
  )
}
