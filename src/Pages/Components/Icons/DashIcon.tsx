export const DashIcon = () => {
  return (
    <div className="flex justify-start 2xl:justify-between gap-4 items-center pl-2 lg:pl-0 lg:py-2 2xl:py-3 group">
      <div className="hidden lg:block">
        <svg
          className="w-4 lg:w-6 2xl:w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:-translate-x-[10px] group-hover:-translate-y-[10px] duration-300 ease-in-out"
            d="M14 17h6M17 20v-6"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            className="group-hover:translate-x-[10px] group-hover:translate-y-[10px] duration-300 ease-in-out"
            d="M8.4 4H5.6A1.6 1.6 0 0 0 4 5.6v2.8A1.6 1.6 0 0 0 5.6 10h2.8A1.6 1.6 0 0 0 10 8.4V5.6A1.6 1.6 0 0 0 8.4 4Z"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
          <path
            className="group-hover:stroke-2 md:group-hover:stroke-1 duration-300 ease-linear"
            d="M8.4 14H5.6A1.6 1.6 0 0 0 4 15.6v2.8A1.6 1.6 0 0 0 5.6 20h2.8a1.6 1.6 0 0 0 1.6-1.6v-2.8A1.6 1.6 0 0 0 8.4 14ZM18.4 4h-2.8A1.6 1.6 0 0 0 14 5.6v2.8a1.6 1.6 0 0 0 1.6 1.6h2.8A1.6 1.6 0 0 0 20 8.4V5.6A1.6 1.6 0 0 0 18.4 4Z"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <div className="font-asap-menu text-xs 2xl:text-lg sm:owerflow-clip overflow-hidden">
        Dashboard
      </div>
    </div>
  )
}
