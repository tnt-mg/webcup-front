import { blue, pink, purple, red, yellow } from "./colors"
import ColorBar from "./ColorBar"
import { Sequence } from "remotion"

const ColorBars = () => {
  const colors = [red, purple, yellow, blue, pink] //TODO change to better

  return (
    <>
      {colors.map((color, index) => (
        <Sequence key={color} from={(index + 1) * 3}>
          <ColorBar color={color} index={index} />
        </Sequence>
      ))}
    </>
  )
}

export default ColorBars
