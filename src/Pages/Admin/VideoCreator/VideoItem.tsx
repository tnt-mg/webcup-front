import React from "react"
import { VideoType } from "./Video.type"
import { Link } from "react-router-dom"

export const VideoItem: React.FC<{ item: VideoType }> = ({
  item: { id, name },
}) => {
  return (
    <Link to={`/admin/video/create/${id}`}>
      {/* <div className="shadow-sm h-28 w-44 p-4 rounded-box relative group">
        <img
          className="block absolute w-full h-full rounded-box object-cover opacity-30 group-hover:opacity-90 duration-300 z-0"
          src="https://picsum.photos/1921"
          alt=""
        />
        <div className="absolute group-hover:text-base-100 text-current duration-300 flex justify-center items-center h-full w-full font-bold text-xl px-5 tracking-wider">
          {name}
        </div>
      </div> */}

      <div className="rounded-lg shadow block group relative transition ease-out active:opacity-75 overflow-hidden w-52">
        <img
          src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg"
          alt="Product Image"
          className="transform transition ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-base-100 bg-opacity-30 transition ease-out group-hover:bg-opacity-0" />
        <div className="p-4 flex items-center justify-center absolute inset-0">
          <div className="py-3 px-2 bg-base-100 bg-opacity-95 rounded-full text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-base-200 group-hover:bg-primary">
            {name}
          </div>
        </div>
      </div>
    </Link>
  )
}
