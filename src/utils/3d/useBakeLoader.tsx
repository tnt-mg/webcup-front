import { useTexture } from "@react-three/drei"
import { Color, MeshBasicMaterial, LinearEncoding } from "three"

export const useBakeLoader = (url: string, materials: any, override: any) => {
  const texture = useTexture(url)
  texture.flipY = false
  const material = new MeshBasicMaterial()
  material.map = texture
  if (materials) {
    for (const key of Object.keys(materials)) {
      if (override && Object.hasOwn(override, key)) {
        materials[key] = override[key]
      } else {
        materials[key] = material
      }
    }
  }
  return material
}
