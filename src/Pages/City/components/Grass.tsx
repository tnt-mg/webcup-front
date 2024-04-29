import { forwardRef, useMemo } from "react"
import { GrassItem } from "./GrassItem"

export const Grass = forwardRef((props: any, ref: any) => {
  const { count } = props
  const diff = count / 2 - 1
  const blocks = useMemo(() => {
    const acc = []
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        acc.push(
          <GrassItem
            key={`${i}-${j}`}
            type={props.type}
            position={[i - diff, 0, j - diff]}
          />
        )
      }
    }
    return acc
  }, [count, props.type])
  return (
    <group {...props} dispose={null} ref={ref}>
      {blocks}
    </group>
  )
})
