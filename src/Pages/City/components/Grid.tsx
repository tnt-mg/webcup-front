import { MathUtils, Vector3, Plane } from "three"
import { createContext, useRef, useContext, useCallback, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
const gridContext = createContext((v: any) => {})

function Grid({ children, scale, divisions = 10, ...props }: any) {
  const [active, activate] = useState(false)
  return (
    <group {...props}>
      <gridContext.Provider value={activate}>{children}</gridContext.Provider>
    </group>
  )
}

export { Grid, gridContext }
