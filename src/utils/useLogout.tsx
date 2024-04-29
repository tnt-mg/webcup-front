import { useCallback } from "react"
import { strapiService } from "../api/strapiService"
import { useNavigate } from "react-router-dom"

export const useLogout = (target = "/login") => {
  const navigate = useNavigate()
  return useCallback(() => {
    strapiService.logout()
    navigate(target, { replace: true })
  }, [target])
}
