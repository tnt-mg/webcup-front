import { useThree } from "@react-three/fiber"
import { useCallback, useContext, useState } from "react"
import { Plane, Vector3 } from "three"
import { gridContext } from "../components/Grid"
import { useImmer } from "use-immer"
const v = new Vector3()
const p = new Plane(new Vector3(0, 1, 0), 0)

export function useDrag(onDrag: Function) {
  const events = useThree((state) => state.events)
  const controls = useThree((state) => state.controls)
  const activatePlane = useContext(gridContext)
  const [state, setState] = useImmer({
    hovered: false,
    drag: false,
    active: false,
  })

  const out = useCallback(
    () =>
      setState((p) => {
        p.hovered = false
      }),
    []
  )
  const over = useCallback(
    (e: any) => (
      e.stopPropagation(),
      setState((p) => {
        p.hovered = true
      })
    ),
    []
  )

  const down = useCallback(
    (e: any) => {
      e.stopPropagation()
      setState((p) => {
        p.active = true
      })
      activatePlane(true)
      if (controls) (controls as any).enabled = false
      e.target.setPointerCapture(e.pointerId)
    },
    [controls]
  )

  const up = useCallback(
    (e: any) => {
      activatePlane(false)
      setState((p) => {
        p.drag = false
        p.active = false
      })
      if (controls) (controls as any).enabled = true
      e.target.releasePointerCapture(e.pointerId)
      // Is this a bug? Apparently releasing capture flushes out hover-state, but why?
      setTimeout(() => events.handlers!.onPointerMove(e), 0)
    },
    [controls]
  )

  const move = useCallback(
    (e: any) => {
      e.stopPropagation()
      if (state.active && e.ray.intersectPlane(p, v)) {
        setState((p) => {
          p.drag = true
        })
        onDrag(v)
      }
    },
    [onDrag, state.active]
  )
  return [
    {
      onPointerOver: over,
      onPointerOut: out,
      onPointerDown: down,
      onPointerUp: up,
      onPointerMove: move,
    },
    state,
  ]
}
