import React, { useEffect, useState } from "react"
import {
  LabelPositionEnum,
  LabelsProps,
} from "../../compositions/DreamTemplate"
import { Img, staticFile } from "remotion"

const labelStyle: React.CSSProperties = {
  position: "absolute",
  margin: 5,
}

const Labels: React.FC<LabelsProps> = ({ image, position }) => {
  const [pos, setPos] = useState({})

  useEffect(() => {
    let pos: any = {}

    if (
      position == LabelPositionEnum.TOP_LEFT ||
      position == LabelPositionEnum.TOP_RIGHT
    ) {
      pos.top = 0
    } else {
      pos.bottom = 0
    }

    if (
      position == LabelPositionEnum.TOP_RIGHT ||
      position == LabelPositionEnum.BOTTOM_RIGHT
    ) {
      pos.right = 0
    } else {
      pos.left = 0
    }

    setPos(pos)
  }, [pos])

  return (
    <Img
      style={{ ...labelStyle, ...pos }}
      src={staticFile(`img1.jpeg`)}
      width={130}
      height={80}
    />
  )
}

export default Labels
