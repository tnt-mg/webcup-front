const SettingIcon = () => {
  return (
    <div className="flex ml-0 sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4 2xl:ml-0 justify-start 2xl:justify-between gap-4 items-center pl-2 lg:pl-0 lg:py-2 2xl:py-3 group">
      <div className="hidden lg:block">
        <svg
          className="w-4 lg:w-6 2xl:w-8"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className="group-hover:translate-y-[30.5px] duration-300 ease-linear">
            <path
              d="M41.5 10H35.5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="group-hover:translate-x-1 duration-300 ease-in-out"
              d="M27.5 6V14"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.5 10L5.5 10"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <g>
            <path
              d="M13.5 24H5.5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="group-hover:-translate-x-1 duration-300 ease-in-out"
              d="M21.5 20V28"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43.5 24H21.5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          <g className="group-hover:-translate-y-[30.5px] duration-300 ease-linear">
            <path
              d="M41.5 38H35.5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="group-hover:translate-x-1 duration-300 ease-in-out"
              d="M27.5 34V42"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.5 38H5.5"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className="font-asap-menu text-xs 2xl:text-lg sm:owerflow-clip overflow-hidden">
        Setting
      </div>
    </div>
  )
}

export default SettingIcon
