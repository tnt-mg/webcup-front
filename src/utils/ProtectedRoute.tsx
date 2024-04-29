import { useEffect } from "react"
import { strapiService } from "../api/strapiService"
import { useNavigate } from "react-router-dom"

export const ProtectedRoute = ({ children }: any) => {
  const isLoggedIn = !!strapiService.getToken()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true })
    }
  }, [isLoggedIn])
  return <>{isLoggedIn ? children : null}</>
}
