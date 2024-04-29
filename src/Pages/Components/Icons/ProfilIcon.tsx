const ProfilIcon = () => {
  return (
    <div className="flex ml-0 sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4 2xl:ml-0 justify-start 2xl:justify-between gap-4 items-center pl-2 lg:pl-0 lg:py-2 2xl:py-3 group">
      <div className="hidden lg:block">
        <svg
          className="w-4 lg:w-6 2xl:w-8"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="group-hover:scale-125 group-hover:-translate-x-[4px] group-hover:-translate-y-[2px] duration-300 ease-in-out"
            d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
            strokeWidth="2"
          />
          <path
            className="group-hover:translate-y-[3px] group-hover:rotate-12 duration-300 ease-in-out"
            d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="font-asap-menu text-xs 2xl:text-lg sm:owerflow-clip overflow-hidden">
        Profil
      </div>
    </div>
  )
}

export default ProfilIcon
