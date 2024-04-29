//@ts-ignore
import vertexShader from "./vertex.vert"
//@ts-ignore
import fragmentShader from "./fragment.frag"
import { Color, DoubleSide } from "three"

const TransparentMaterial = (props: any) => {
  return (
    <shaderMaterial
      uniforms={{
        color: { value: new Color(0xfafafa) },
        opacity: { value: 0.5 },
      }}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      transparent
      side={DoubleSide}
      {...props}
    />
  )
}

export default TransparentMaterial
