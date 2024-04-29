import song from "/brothers.mp3"
import useSound from "use-sound"
import { forwardRef, useCallback, useImperativeHandle, useState } from "react"

export const SongIcon = forwardRef((props: any, ref: any) => {
  const [play, isPlay] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const [playSound, { stop }] = useSound(song, { volume: isMuted ? 0 : 1 })

  const handleSong = useCallback(
    (event: any) => {
      if (play === false) {
        playSound()
      }
      if (play === true) {
        stop()
      }
      isPlay(!play)
    },
    [playSound, play, isPlay]
  )

  useImperativeHandle(
    ref,
    () => ({
      handleSong,
    }),
    [handleSong]
  )
  const handleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="flex items-end gap-2">
      {play && <span className="text-[10px] italic">{song.split("/")[1]}</span>}
      {/* volumes */}
      <svg
        onClick={handleMute}
        viewBox="0 0 24 24"
        fill="none"
        className={
          play
            ? "w-10 fill-current translate-x-[30px] translate-y-[8px] duration-300 cursor-pointer"
            : "w-5 fill-current opacity-0 duration-300"
        }
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          className={
            isMuted ? "opacity-50 duration-300" : "opacity-100 duration-300"
          }
          d="M11 6.04029C11 4.78253 9.5451 4.08327 8.56296 4.86899L4.64922 7.99998H3C1.34315 7.99998 0 9.34312 0 11V13C0 14.6568 1.34315 16 3 16H4.64922L8.56296 19.131C9.5451 19.9167 11 19.2174 11 17.9597V6.04029ZM5.89861 9.56172L9 7.0806V16.9194L5.89861 14.4382C5.54398 14.1545 5.10336 14 4.64922 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 9.99998 3 9.99998H4.64922C5.10336 9.99998 5.54398 9.84542 5.89861 9.56172ZM17.0711 5.12124C16.6805 4.73072 16.0474 4.73072 15.6568 5.12124C15.2663 5.51177 15.2663 6.14493 15.6568 6.53545C18.781 9.65965 18.781 14.725 15.6568 17.8492C15.2663 18.2397 15.2663 18.8729 15.6568 19.2634C16.0474 19.6539 16.6805 19.6539 17.0711 19.2634C20.9763 15.3581 20.9763 9.02648 17.0711 5.12124ZM14.2426 7.94967C13.8521 7.55914 13.2189 7.55914 12.8284 7.94967C12.4379 8.34019 12.4379 8.97336 12.8284 9.36388C14.3905 10.926 14.3905 13.4586 12.8284 15.0207C12.4379 15.4113 12.4379 16.0444 12.8284 16.4349C13.2189 16.8255 13.8521 16.8255 14.2426 16.4349C16.5858 14.0918 16.5858 10.2928 14.2426 7.94967Z"
        />
      </svg>
      {/* sound */}
      <svg
        onClick={handleSong}
        viewBox="0 0 24 24"
        fill="none"
        className={
          play
            ? "w-5 fill-current hover:scale-125 -translate-x-[45px] duration-300 cursor-pointer group"
            : "w-8 fill-current hover:scale-125 duration-100 cursor-pointer group"
        }
      >
        <path
          className={!play ? "hidden" : ""}
          d="M13.1807 11.8606C12.7807 11.8606 12.4207 11.6406 12.2507 11.2806L10.8007 8.39058L10.3807 9.17058C10.1507 9.60058 9.6907 9.87058 9.2007 9.87058H8.4707C8.0607 9.87058 7.7207 9.53058 7.7207 9.12058C7.7207 8.71058 8.0607 8.37058 8.4707 8.37058H9.1107L9.9007 6.91058C10.0907 6.57058 10.4707 6.34058 10.8307 6.36058C11.2207 6.36058 11.5707 6.59058 11.7507 6.93058L13.1807 9.79058L13.5207 9.10058C13.7507 8.64058 14.2007 8.36058 14.7207 8.36058H15.5307C15.9407 8.36058 16.2807 8.70058 16.2807 9.11058C16.2807 9.52058 15.9407 9.86058 15.5307 9.86058H14.8207L14.1107 11.2706C13.9307 11.6406 13.5807 11.8606 13.1807 11.8606Z"
        />
        <path d="M2.74982 18.6508C2.33982 18.6508 1.99982 18.3108 1.99982 17.9008V12.2008C1.94982 9.49078 2.95982 6.93078 4.83982 5.01078C6.71982 3.10078 9.23982 2.05078 11.9498 2.05078C17.4898 2.05078 21.9998 6.56078 21.9998 12.1008V17.8008C21.9998 18.2108 21.6598 18.5508 21.2498 18.5508C20.8398 18.5508 20.4998 18.2108 20.4998 17.8008V12.1008C20.4998 7.39078 16.6698 3.55078 11.9498 3.55078C9.63982 3.55078 7.49982 4.44078 5.90982 6.06078C4.30982 7.69078 3.45982 9.86078 3.49982 12.1808V17.8908C3.49982 18.3108 3.16982 18.6508 2.74982 18.6508Z" />
        <path
          className="group-hover:translate-x-[12.5px] duration-300"
          d="M5.94 12.4492H5.81C3.71 12.4492 2 14.1592 2 16.2592V18.1392C2 20.2392 3.71 21.9492 5.81 21.9492H5.94C8.04 21.9492 9.75 20.2392 9.75 18.1392V16.2592C9.75 14.1592 8.04 12.4492 5.94 12.4492Z"
        />
        <path
          className="group-hover:-translate-x-[12.5px] duration-300"
          d="M18.19 12.4492H18.06C15.96 12.4492 14.25 14.1592 14.25 16.2592V18.1392C14.25 20.2392 15.96 21.9492 18.06 21.9492H18.19C20.29 21.9492 22 20.2392 22 18.1392V16.2592C22 14.1592 20.29 12.4492 18.19 12.4492Z"
        />
      </svg>
    </div>
  )
})
