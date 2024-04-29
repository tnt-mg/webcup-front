import { TranoBe } from "./TranoBe"
import { Trano } from "./Trano"
import { Trano2 } from "./Trano2"

export const blockList: any = {
  maison: {
    component: Trano,
    Icon: () => {
      return (
        <svg
          className="w-14 group-hover:scale-125 duration-150"
          viewBox="0 0 128 128"
        >
          <path
            className="fill-green-700"
            d="M64.11 23.33L18.67 68.99l.35 42.21l89.75-.85l.13-45z"
          ></path>

          <path
            className="fill-green-900"
            d="M107.2 69.82v32.03l3.14 1.73V71.01z"
          ></path>

          <path
            className="fill-green-900"
            d="M64.42 28.21L17.18 72.42V61.27l47.29-44.79l45.87 47.5v9.41z"
          ></path>

          <path
            d="M12.55 59.36l-2.77 5.11l7.43-.11s46.35-45.08 47.35-45.12c1.21-.05 45.76 45.91 45.76 45.91l6.59-.1l-49.44-53.26l-7.26-.48l-47.66 48.05z"
            className="fill-green-800"
          ></path>

          <path
            d="M4 63.19c-.78.95-.01 1.45.62 1.45s7.89-.21 7.89-.21l50.04-48.69s1.15-1.18 1.97-1.14c.89.04 2.04 1.17 2.04 1.17l50.28 49.29s5.73.02 6.64-.21c.99-.24.49-1.18-.73-2.49c-.9-.97-51.73-51.25-52.57-52.12c-2.5-2.58-3.72-4.08-6.08-3.98c-2.37.1-3.77 1.85-6.14 4.03c-.7.66-53.63 52.5-53.96 52.9z"
            className="fill-green-950"
          ></path>

          <g className="fill-amber-800">
            <path d="M93.5 80.83h10.25V72.3a2.87 2.87 0 0 0-2.87-2.87H93.5v11.4z"></path>

            <path d="M90.42 80.83v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87z"></path>

            <path d="M90.42 84.07H79.55v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07z"></path>

            <path d="M93.5 84.07v10.87h7.38a2.87 2.87 0 0 0 2.87-2.87v-8H93.5z"></path>
          </g>

          <g className="fill-amber-800">
            <path d="M36.75 80.83H47V72.3a2.87 2.87 0 0 0-2.87-2.87h-7.38v11.4z"></path>

            <path d="M33.66 80.83v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87z"></path>

            <path d="M33.66 84.07H22.8v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07z"></path>

            <path d="M36.75 84.07v10.87h7.38A2.87 2.87 0 0 0 47 92.07v-8H36.75z"></path>
          </g>

          <path
            d="M50.34 106.73s-.15-24.74 0-30.99c.15-6.24 6.01-11.64 12.8-11.41c8.4.29 12.72 5.01 13.03 11.1c.31 6.09.31 31.68.31 31.68l-26.14-.38z"
            className="fill-amber-800"
          ></path>

          <path
            d="M53.47 108.07s-.12-26.36 0-31.24c.15-6.05 4.71-9.23 10.01-8.93c6.17.35 9.22 3.63 9.46 8.4c.24 4.76.24 31.79.24 31.79l-19.71-.02z"
            className="fill-amber-950"
          ></path>

          <g className="fill-amber-950">
            <path d="M69.99 86.58c-.02-4.34-.06-8.17-.12-9.34c-.16-3.15-2.4-5.6-6.75-5.75c-3.51-.12-6.4 2.62-6.48 5.85c-.03 1.19-.02 4.93 0 9.19l13.35.05z"></path>

            <path d="M56.67 91.45c.04 5.81.09 11.16.09 11.16l13.27.04s0-5.33-.02-11.14l-13.34-.06z"></path>
          </g>

          <path
            d="M70.03 88.81c-.05 1.41.52 2.55 2.19 2.55s2.28-.78 2.4-2.29c.1-1.35-.83-2.55-2.4-2.45c-1.56.11-2.15 1.2-2.19 2.19z"
            className="fill-amber-800"
          ></path>

          <path
            d="M79.61 116.31s10.88.11 18.74-.12c7.86-.23 13.55.12 14.72-1.06c1.17-1.17 1.15-11.14-4.3-13.84c-5.01-2.48-8.25.04-9.97.21c-2.27.23-5.08-1.18-7.14-1.22c-8.51-.18-11.49 6.51-11.49 6.51l-.56 9.52z"
            fill="#728037"
          ></path>

          <path
            d="M14.53 115.49c.91.85 7.86.88 16.25.82c8.39-.06 15.14.02 15.14.02l1.4-8.47l-1.7-1.41s.19-4.24-5.16-5.69c-3.7-1-6.92.65-10.03.7c-3.11.06-5.98-1.35-9.44-.53c-3.22.76-5.73 2.86-6.75 7.1c-.71 2.94-.53 6.69.29 7.46z"
            fill="#728037"
          ></path>
        </svg>
      )
    },
  },
  maison2: {
    component: Trano2,
    Icon: () => {
      return (
        <svg
          className="w-14 group-hover:scale-125 duration-150"
          viewBox="0 0 128 128"
        >
          <path
            className="fill-green-700"
            d="M64.11 23.33L18.67 68.99l.35 42.21l89.75-.85l.13-45z"
          ></path>

          <path
            className="fill-green-900"
            d="M107.2 69.82v32.03l3.14 1.73V71.01z"
          ></path>

          <path
            className="fill-green-900"
            d="M64.42 28.21L17.18 72.42V61.27l47.29-44.79l45.87 47.5v9.41z"
          ></path>

          <path
            d="M12.55 59.36l-2.77 5.11l7.43-.11s46.35-45.08 47.35-45.12c1.21-.05 45.76 45.91 45.76 45.91l6.59-.1l-49.44-53.26l-7.26-.48l-47.66 48.05z"
            className="fill-green-800"
          ></path>

          <path
            d="M4 63.19c-.78.95-.01 1.45.62 1.45s7.89-.21 7.89-.21l50.04-48.69s1.15-1.18 1.97-1.14c.89.04 2.04 1.17 2.04 1.17l50.28 49.29s5.73.02 6.64-.21c.99-.24.49-1.18-.73-2.49c-.9-.97-51.73-51.25-52.57-52.12c-2.5-2.58-3.72-4.08-6.08-3.98c-2.37.1-3.77 1.85-6.14 4.03c-.7.66-53.63 52.5-53.96 52.9z"
            className="fill-green-950"
          ></path>

          <g className="fill-amber-800">
            <path d="M93.5 80.83h10.25V72.3a2.87 2.87 0 0 0-2.87-2.87H93.5v11.4z"></path>

            <path d="M90.42 80.83v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87z"></path>

            <path d="M90.42 84.07H79.55v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07z"></path>

            <path d="M93.5 84.07v10.87h7.38a2.87 2.87 0 0 0 2.87-2.87v-8H93.5z"></path>
          </g>

          <g className="fill-amber-800">
            <path d="M36.75 80.83H47V72.3a2.87 2.87 0 0 0-2.87-2.87h-7.38v11.4z"></path>

            <path d="M33.66 80.83v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87z"></path>

            <path d="M33.66 84.07H22.8v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07z"></path>

            <path d="M36.75 84.07v10.87h7.38A2.87 2.87 0 0 0 47 92.07v-8H36.75z"></path>
          </g>

          <path
            d="M50.34 106.73s-.15-24.74 0-30.99c.15-6.24 6.01-11.64 12.8-11.41c8.4.29 12.72 5.01 13.03 11.1c.31 6.09.31 31.68.31 31.68l-26.14-.38z"
            className="fill-amber-800"
          ></path>

          <path
            d="M53.47 108.07s-.12-26.36 0-31.24c.15-6.05 4.71-9.23 10.01-8.93c6.17.35 9.22 3.63 9.46 8.4c.24 4.76.24 31.79.24 31.79l-19.71-.02z"
            className="fill-amber-950"
          ></path>

          <g className="fill-amber-950">
            <path d="M69.99 86.58c-.02-4.34-.06-8.17-.12-9.34c-.16-3.15-2.4-5.6-6.75-5.75c-3.51-.12-6.4 2.62-6.48 5.85c-.03 1.19-.02 4.93 0 9.19l13.35.05z"></path>

            <path d="M56.67 91.45c.04 5.81.09 11.16.09 11.16l13.27.04s0-5.33-.02-11.14l-13.34-.06z"></path>
          </g>

          <path
            d="M70.03 88.81c-.05 1.41.52 2.55 2.19 2.55s2.28-.78 2.4-2.29c.1-1.35-.83-2.55-2.4-2.45c-1.56.11-2.15 1.2-2.19 2.19z"
            className="fill-amber-800"
          ></path>

          <path
            d="M79.61 116.31s10.88.11 18.74-.12c7.86-.23 13.55.12 14.72-1.06c1.17-1.17 1.15-11.14-4.3-13.84c-5.01-2.48-8.25.04-9.97.21c-2.27.23-5.08-1.18-7.14-1.22c-8.51-.18-11.49 6.51-11.49 6.51l-.56 9.52z"
            fill="#728037"
          ></path>

          <path
            d="M14.53 115.49c.91.85 7.86.88 16.25.82c8.39-.06 15.14.02 15.14.02l1.4-8.47l-1.7-1.41s.19-4.24-5.16-5.69c-3.7-1-6.92.65-10.03.7c-3.11.06-5.98-1.35-9.44-.53c-3.22.76-5.73 2.86-6.75 7.1c-.71 2.94-.53 6.69.29 7.46z"
            fill="#728037"
          ></path>
        </svg>
      )
    },
  },
  immeuble: {
    component: TranoBe,
    Icon: () => {
      return (
        <svg
          className="w-14 group-hover:scale-125 duration-150"
          viewBox="0 0 128 128"
        >
          <path
            className="fill-green-700"
            d="M64.11 23.33L18.67 68.99l.35 42.21l89.75-.85l.13-45z"
          ></path>

          <path
            className="fill-green-900"
            d="M107.2 69.82v32.03l3.14 1.73V71.01z"
          ></path>

          <path
            className="fill-green-900"
            d="M64.42 28.21L17.18 72.42V61.27l47.29-44.79l45.87 47.5v9.41z"
          ></path>

          <path
            d="M12.55 59.36l-2.77 5.11l7.43-.11s46.35-45.08 47.35-45.12c1.21-.05 45.76 45.91 45.76 45.91l6.59-.1l-49.44-53.26l-7.26-.48l-47.66 48.05z"
            className="fill-green-800"
          ></path>

          <path
            d="M4 63.19c-.78.95-.01 1.45.62 1.45s7.89-.21 7.89-.21l50.04-48.69s1.15-1.18 1.97-1.14c.89.04 2.04 1.17 2.04 1.17l50.28 49.29s5.73.02 6.64-.21c.99-.24.49-1.18-.73-2.49c-.9-.97-51.73-51.25-52.57-52.12c-2.5-2.58-3.72-4.08-6.08-3.98c-2.37.1-3.77 1.85-6.14 4.03c-.7.66-53.63 52.5-53.96 52.9z"
            className="fill-green-950"
          ></path>

          <g className="fill-amber-800">
            <path d="M93.5 80.83h10.25V72.3a2.87 2.87 0 0 0-2.87-2.87H93.5v11.4z"></path>

            <path d="M90.42 80.83v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87z"></path>

            <path d="M90.42 84.07H79.55v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07z"></path>

            <path d="M93.5 84.07v10.87h7.38a2.87 2.87 0 0 0 2.87-2.87v-8H93.5z"></path>
          </g>

          <g className="fill-amber-800">
            <path d="M36.75 80.83H47V72.3a2.87 2.87 0 0 0-2.87-2.87h-7.38v11.4z"></path>

            <path d="M33.66 80.83v-11.4h-8a2.87 2.87 0 0 0-2.87 2.87v8.54h10.87z"></path>

            <path d="M33.66 84.07H22.8v8a2.87 2.87 0 0 0 2.87 2.87h8V84.07z"></path>

            <path d="M36.75 84.07v10.87h7.38A2.87 2.87 0 0 0 47 92.07v-8H36.75z"></path>
          </g>

          <path
            d="M50.34 106.73s-.15-24.74 0-30.99c.15-6.24 6.01-11.64 12.8-11.41c8.4.29 12.72 5.01 13.03 11.1c.31 6.09.31 31.68.31 31.68l-26.14-.38z"
            className="fill-amber-800"
          ></path>

          <path
            d="M53.47 108.07s-.12-26.36 0-31.24c.15-6.05 4.71-9.23 10.01-8.93c6.17.35 9.22 3.63 9.46 8.4c.24 4.76.24 31.79.24 31.79l-19.71-.02z"
            className="fill-amber-950"
          ></path>

          <g className="fill-amber-950">
            <path d="M69.99 86.58c-.02-4.34-.06-8.17-.12-9.34c-.16-3.15-2.4-5.6-6.75-5.75c-3.51-.12-6.4 2.62-6.48 5.85c-.03 1.19-.02 4.93 0 9.19l13.35.05z"></path>

            <path d="M56.67 91.45c.04 5.81.09 11.16.09 11.16l13.27.04s0-5.33-.02-11.14l-13.34-.06z"></path>
          </g>

          <path
            d="M70.03 88.81c-.05 1.41.52 2.55 2.19 2.55s2.28-.78 2.4-2.29c.1-1.35-.83-2.55-2.4-2.45c-1.56.11-2.15 1.2-2.19 2.19z"
            className="fill-amber-800"
          ></path>

          <path
            d="M79.61 116.31s10.88.11 18.74-.12c7.86-.23 13.55.12 14.72-1.06c1.17-1.17 1.15-11.14-4.3-13.84c-5.01-2.48-8.25.04-9.97.21c-2.27.23-5.08-1.18-7.14-1.22c-8.51-.18-11.49 6.51-11.49 6.51l-.56 9.52z"
            fill="#728037"
          ></path>

          <path
            d="M14.53 115.49c.91.85 7.86.88 16.25.82c8.39-.06 15.14.02 15.14.02l1.4-8.47l-1.7-1.41s.19-4.24-5.16-5.69c-3.7-1-6.92.65-10.03.7c-3.11.06-5.98-1.35-9.44-.53c-3.22.76-5.73 2.86-6.75 7.1c-.71 2.94-.53 6.69.29 7.46z"
            fill="#728037"
          ></path>
        </svg>
      )
    },
  },
}
