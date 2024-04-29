import { useEffect } from "react"
import { confetti } from "tsparticles-confetti"

export const useCongrats = () => {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
  }
  useEffect(() => {})

  const configure = () => {
    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 1.2,
      shapes: ["circle", "square"],
      colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
    })

    confetti({
      ...defaults,
      particleCount: 50,
      scalar: 2,
      shapes: ["text"],
      shapeOptions: {
        text: {
          value: ["🦄", "🌈"],
        },
      },
    })
  }

  const congrats = () => {
    setTimeout(configure, 0)
    setTimeout(configure, 100)
    setTimeout(configure, 200)
    setTimeout(configure, 500)
  }

  return congrats
}
