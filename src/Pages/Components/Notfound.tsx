import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useNavigate } from "react-router-dom"
import { Lost } from "../../assets/3D/Lost"

function Notfound() {
  const navigate = useNavigate()
  return (
    <div className="h-[80vh]">
      <Canvas>
        <ambientLight />
        <group scale={3} rotation={[0.2, 1.6, 0]}>
          <Lost />
        </group>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="flex justify-center">
        <button
          className="p-3 bg-blue-500 text-white font-bold"
          onClick={() => navigate(-1)}
        >
          Go back
        </button>
      </div>
    </div>
  )
}

export default Notfound
