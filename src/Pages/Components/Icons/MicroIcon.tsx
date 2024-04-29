export const MicroIcon = () => {
  return (
    <div className="cursor-pointer group">
      <svg
        className="w-8 stroke-secondary"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
      >
        <rect x="9" y="2" width="6" height="12" rx="3" strokeWidth="1.5"></rect>
        <path
          className="group-hover:translate-y-[2px] duration-300"
          d="M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M12 18v4m0 0H9m3 0h3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  )
}
