import React from "react"
const BoardIcon = () => {
  return (
    <div className="flex ml-0 sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4 2xl:ml-0 justify-start 2xl:justify-between gap-4 items-center pl-2 lg:pl-0 lg:py-2 2xl:py-3 group">
      <div className="hidden lg:block">
        <svg
          className="w-5 lg:w-6 2xl:w-8"
          fill="currentColor"
          viewBox="0 0 429.98 429.98"
        >
          <g className="group-hover:translate-y-[30.5px] duration-300 ease-in-out">
            {/* tongony */}
            <path
              className=""
              id="tongony"
              d="M424.98,1.501H5c-2.762,0-5,2.239-5,5v298.288c0,2.761,2.238,5,5,5h159.239l-25.187,112.6
                c-0.331,1.481,0.028,3.033,0.978,4.217s2.385,1.874,3.902,1.874h26.55c2.341,0,4.368-1.624,4.88-3.909l12.401-55.439h54.457
                l12.401,55.439c0.512,2.285,2.539,3.909,4.88,3.909h26.549c1.518,0,2.953-0.689,3.902-1.874s1.309-2.736,0.978-4.217l-25.186-112.6
                H424.98c2.762,0,5-2.239,5-5V6.501C429.98,3.74,427.742,1.501,424.98,1.501z M166.477,418.48h-16.303l24.313-108.691h16.302
                L166.477,418.48z M228.945,309.789l6.496,29.04h-40.9l6.496-29.04H228.945z M189.999,359.132l2.304-10.303h45.374l2.304,10.303
                H189.999z M279.806,418.48h-16.302l-24.312-108.691h16.302L279.806,418.48z M419.98,299.789H10V11.501h409.98V299.789z"
            />

            <path
              className=""
              d="M32.071,282.718h365.838c2.762,0,5-2.239,5-5V33.572c0-2.761-2.238-5-5-5H32.071c-2.762,0-5,2.239-5,5v244.146
            C27.071,280.479,29.31,282.718,32.071,282.718z M37.071,38.572h355.838v234.146H37.071V38.572z"
            />

            <svg
              fill="currentColor"
              viewBox="0 0 24 56"
              strokeWidth={1.5}
              className="z-10 bg-secondary"
            >
              <g className="-translate-x-1 -translate-y-1 group-hover:translate-x-5 group-hover:translate-y-2 duration-300 ease-linear">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 35"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <g className="group-hover:translate-y-[0.8px] -translate-y-[1px] duration-300 ease-linear">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16"
                />
              </g>
            </svg>
          </g>
        </svg>
      </div>
      <div className="font-asap-menu text-xs 2xl:text-lg sm:owerflow-clip overflow-hidden">
        Board
      </div>
    </div>
  )
}

export default BoardIcon
