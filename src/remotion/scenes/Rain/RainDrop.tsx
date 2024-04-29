import { FC } from "react"
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion"

const RainDrop: FC<{
  delay: number
  x: string
  size: number
  emoji: string
}> = ({ delay, x, size, emoji }) => {
  const { fps } = useVideoConfig()
  const frame = useCurrentFrame()

  const drop = spring({
    fps,
    frame: frame - delay,
    config: {
      damping: 1000,
    },
  })

  const top = interpolate(drop, [0, 1], [-0.2, 1.1])
  const opacity = interpolate(drop, [0, 1], [1, 0.5])
  return (
    //TODO mba avadio class tailwind
    <div
      style={{
        fontSize: 36,
        zIndex: 999,
        width: 200,
        position: "absolute",
        left: x,
        top: top * 100 + "%",
        transform: `scale(${size})`,
        opacity,
      }}
    >
      {emoji}
    </div>
  )
}

export default RainDrop
