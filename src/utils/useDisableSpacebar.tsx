import { useEffect } from "react"

export const useDisableSpacebar = () => {
  useEffect(() => {
    function disableSpacebar(e: any) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault()
      }
    }
    window.addEventListener("keydown", disableSpacebar)
    return () => window.removeEventListener("keydown", disableSpacebar)
  }, [])
}
