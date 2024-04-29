import React, { useMemo } from "react"
import { AbsoluteFill, random } from "remotion"
import RainDrop from "./RainDrop"

interface RainProps {
  emojis?: string[]
}

const Rain: React.FC<RainProps> = () => {
  const emojis = ["😀", "😂", "😍", "🤔", "😎"]
  const drops = useMemo(() => {
    return new Array(300).fill(true).map((_, i) => {
      const x = random("x" + i) * 100 + "%"
      const delay = random("delay" + i) * 60
      const size = random("size" + i) + 0.3
      const emoji = emojis[Math.floor(random("emoji" + i) * emojis.length)]
      return { x, delay, size, emoji }
    })
  }, [])

  return (
    <AbsoluteFill>
      {drops.map(({ delay, x, size, emoji }, index) => (
        <RainDrop delay={delay} x={x} size={size} emoji={emoji} key={index} />
      ))}
    </AbsoluteFill>
  )
}

Rain.defaultProps = {
  emojis: ["😀", "😂", "😍", "🤔", "😎"],
}
export default Rain
