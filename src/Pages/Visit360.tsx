import React, { useState } from "react"
import Panorama from "./Components/panorama/Panorama"

export interface SceneItem {
  id: string
  image: string
  top: number
  left: number
  to: string
  spots: {
    id: number
    top: number
    left: number
    message: string
  }[]
}

const items: SceneItem[] = [
  {
    id: "entry",
    image: "panorama1.jpg",
    top: 20,
    left: 200,
    to: "gateway",
    spots: [
      { id: 1, top: 40, left: 170, message: "Bonjour les amis" },
      { id: 2, top: 10, left: 130, message: "Vous voulez jouer ? " },
    ],
  },
  {
    id: "gateway",
    image: "panorama2.jpg",
    top: 20,
    left: 150,
    to: "entry",
    spots: [
      { id: 1, top: 40, left: 170, message: "Bonjour les amis" },
      { id: 2, top: 10, left: 130, message: "Vous voulez jouer ? " },
    ],
  },
]

function Visit360() {
  const [item, setItem] = useState<SceneItem>(items[0])

  const handleSceneChange = (sceneId: string) => {
    // @ts-ignore
    setItem(items.find((i) => i.id === sceneId))
  }

  return (
    <div>
      <Panorama activeItem={item} goTo={handleSceneChange} />
    </div>
  )
}

export default Visit360
