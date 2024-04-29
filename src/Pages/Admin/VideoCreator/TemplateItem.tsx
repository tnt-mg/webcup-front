import React from "react"
import { Template } from "./TemplateData"
import { Player } from "@remotion/player"

interface TemplateItemProps {
  item: Template
  onSelect: () => void
  isActive: boolean
}
//TODO ovao class tailwind sady asio animation hover na tsy haiko
export const TemplateItem: React.FC<TemplateItemProps> = ({
  item: { title, preview, duration, image },
  onSelect,
  isActive,
}) => {
  const selectItem = () => {
    // open selected template
  }
  return (
    <div className="flex justify-center items-center gap-2 template">
      <div
        className="shadow-sm h-28 lg:w-72 w-52 cursor-pointer rounded-box hover:scale-105 duration-200 relative group border-[0.5px]"
        style={{
          borderColor: isActive ? "blue" : "red",
        }}
        onClick={onSelect}
      >
        <img
          className="block absolute w-full h-full rounded-box object-cover bg-red-500 opacity-30 group-hover:opacity-90 duration-300 z-0"
          src={`/remotion/${image}`}
          alt={title}
        />
        <div
          onClick={onSelect}
          className="group-hover:text-base-100 text-current duration-300 flex justify-center items-center h-full w-full font-bold text-xl px-5 tracking-wider"
        >
          {title}
        </div>
        <div className="absolute bottom-0 right-0 flex justify-end text-xs font-mono pr-2">
          00:28
        </div>
      </div>
    </div>
  )
}
