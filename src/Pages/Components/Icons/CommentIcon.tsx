export const CommentIcon = () => {
  return (
    <div className="flex justify-start 2xl:justify-between gap-4 items-center pl-2 lg:pl-0 lg:py-2 2xl:py-3 group">
      <div className="hidden lg:block">
        <svg
          className="w-4 lg:w-6 2xl:w-8"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 50"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              className="group-hover:translate-y-[8px] -translate-y-1 duration-200 ease-in-out"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>

          <path
            fillRule="evenodd"
            d="M15 3.25A2.25 2.25 0 0012.75 1h-9.5A2.25 2.25 0 001 3.25v11a.75.75 0 001.26.55l2.801-2.6a.75.75 0 01.51-.2h7.179A2.25 2.25 0 0015 9.75v-6.5zm-2.25-.75a.75.75 0 01.75.75v6.5a.75.75 0 01-.75.75H5.572a2.25 2.25 0 00-1.531.6L2.5 12.53V3.25a.75.75 0 01.75-.75h9.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="font-asap-menu text-xs 2xl:text-lg sm:owerflow-clip overflow-hidden">
        Comments
      </div>
    </div>
  )
}
