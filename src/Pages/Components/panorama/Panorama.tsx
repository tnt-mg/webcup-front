import React, { useState } from "react"
import { Pannellum, PannellumVideo } from "pannellum-react"
import { SceneItem } from "../../Visit360"

interface PanoramaProps {
  activeItem: SceneItem
  goTo: (sceneId: string) => void | null
}
const Panorama: React.FC<PanoramaProps> = ({ activeItem, goTo }) => {
  console.log(activeItem.spots)

  return (
    <div>
      <Pannellum
        width="100%"
        height="500px"
        image={`/panorama/${activeItem.image}`}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        onLoad={() => {
          console.log("panorama loaded")
        }}
      >
        {/*<Pannellum.Hotspot
            key={h.id}
            type="info"
            pitch={20}
            yaw={100}
            text="Bonjour"
          />*/}

        <Pannellum.Hotspot
          type="custom"
          pitch={activeItem.top}
          yaw={activeItem.left}
          handleClick={(evt: any, args: any) => goTo(activeItem.to)}
        />
      </Pannellum>
    </div>
  )
}

export default Panorama
