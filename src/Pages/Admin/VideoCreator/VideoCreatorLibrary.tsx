import React from "react"

const musicData = [
  { title: "Tokyo Ghoul", desc: "Unravel ( Best ever)", url: "https://" },
  { title: "Attack on titan", desc: "Jiyuu no Tsubasa", url: "https://" },
  { title: "Dragon Ball Z", desc: "Chala Head Chala", url: "https://" },
  { title: "Black Clover", desc: "R Vickeblanka", url: "https://" },
  { title: "Noblesse", desc: "Breaking Dawn", url: "https://" },
  { title: "Naruto Shippuden", desc: "Blue Bird", url: "https://" },
]

export const VideoCreatorLibrary: React.FC<{
  onMusicSelect: (url: string) => void
}> = ({ onMusicSelect }) => {
  const selectMusic = (url: string) => {
    onMusicSelect(url)
  }
  return (
    <div>
      <h3 className="mb-2 text-center px-4 text-lg font-extrabold text-primary">
        Séléctionnez une musique de fond
      </h3>

      <ul className="grid w-full gap-y-4 gap-x-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 px-8">
        {musicData.map((music) => (
          <li>
            <input
              type="radio"
              id={music.title}
              name="music"
              value={music.url}
              onChange={({ target: { value } }) => selectMusic(value)}
              className="hidden peer"
            />
            <label
              htmlFor={music.title}
              className="inline-flex items-center justify-between w-full px-5 py-2 text-gray-500 bg-base-100 border border-secondary/40 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:scale-90 hover:duration-150 hover:bg-gray-100"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">
                  {music.title}
                </div>
                <div className="w-full">{music.desc}</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
                />
              </svg>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
