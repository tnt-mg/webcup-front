export const StudioIcon = () => {
  return (
    <div className="flex ml-0 sm:ml-0 md:ml-0 lg:ml-4 xl:ml-4 2xl:ml-0 justify-start 2xl:justify-between gap-4 items-center pl-2 lg:pl-0 lg:py-2 2xl:py-3 group">
      <div className="hidden lg:block">
        <svg
          className="w-4 lg:w-6 2xl:w-8"
          fill="none"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <circle cx="12.02" cy="12" r="10.52" />

          <circle
            className="group-hover:translate-x-[5.6px] group-hover:translate-y-[5.6px] duration-300"
            cx="12.02"
            cy="6.26"
            r="1.91"
          />
          <circle
            className="group-hover:-translate-x-[5.6px] group-hover:translate-y-[5.6px] duration-300"
            cx="17.76"
            cy="12"
            r="1.91"
          />
          <circle
            className="group-hover:-translate-x-[5.6px] group-hover:-translate-y-[5.6px] duration-300"
            cx="12.02"
            cy="17.74"
            r="1.91"
          />
          <circle
            className="group-hover:translate-x-[5.6px] group-hover:-translate-y-[5.6px] duration-300"
            cx="6.28"
            cy="12"
            r="1.91"
          />

          <line x1="23.5" y1="22.52" x2="12.02" y2="22.52" />
          <line x1="11.07" y1="12" x2="12.98" y2="12" />
        </svg>
      </div>
      <div className="font-asap-menu text-xs 2xl:text-lg sm:owerflow-clip overflow-hidden">
        Studio
      </div>
    </div>
  )
}
