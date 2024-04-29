import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types"
import { useCallback, useState } from "react"

export const getSceneVersion = (elements: readonly ExcalidrawElement[]) =>
  elements.reduce((acc, el) => acc + el.version, 0)
export const useCallbackRefState = <T>() => {
  const [refValue, setRefValue] = useState<T | null>(null)
  const refCallback = useCallback((value: T | null) => setRefValue(value), [])
  return [refValue, refCallback] as const
}
export const debounce = <T extends any[]>(
  fn: (...args: T) => void,
  timeout: number
) => {
  let handle = 0
  let lastArgs: T | null = null
  const ret = (...args: T) => {
    lastArgs = args
    clearTimeout(handle)
    handle = window.setTimeout(() => {
      lastArgs = null
      fn(...args)
    }, timeout)
  }
  ret.flush = () => {
    clearTimeout(handle)
    if (lastArgs) {
      const _lastArgs = lastArgs
      lastArgs = null
      fn(..._lastArgs)
    }
  }
  ret.cancel = () => {
    lastArgs = null
    clearTimeout(handle)
  }
  return ret
}
