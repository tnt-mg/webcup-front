import { AnimationAction, LoopOnce } from "three"

export const play = (action: AnimationAction) => {
  action!.clampWhenFinished = true
  action!.reset()
  action!.timeScale = 1
  action!.setLoop(LoopOnce, 1)
  action!.play()
}

export const playReverse = (action: AnimationAction, speed = 1) => {
  action!.paused = false
  action!.timeScale = -1 * speed
  action!.setLoop(LoopOnce, 1)
  action!.play()
  action!.clampWhenFinished = false
}
