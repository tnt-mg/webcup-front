import { usePlane } from "@react-three/cannon"

const Floor = (props: any) => {
  const [ref]: any = usePlane((index) => ({
    type: "Static",
    mass: 0,
    ...props,
  }))

  return (
    <mesh rotation={props.rotation} ref={ref} visible={false}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={props.color} transparent />
    </mesh>
  )
}

export default Floor
