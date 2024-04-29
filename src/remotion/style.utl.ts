import * as Poppins from "@remotion/google-fonts/Poppins"
import React from "react"
const { fontFamily } = Poppins.loadFont()
export const centerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export const globalFontStyle: React.CSSProperties = {
  fontFamily,
}
