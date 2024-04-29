import "animate.css/animate.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ThemeChanger from "./ThemeChanger"
import LangChanger from "./LangChanger"

function getFormattedDate(date: any) {
  const day = date.getDate()
  const month = date.toLocaleString("default", { month: "long" })
  const year = date.getFullYear()

  let daySuffix
  if (day === 1 || day === 21 || day === 31) {
    daySuffix = "st"
  } else if (day === 2 || day === 22) {
    daySuffix = "nd"
  } else if (day === 3 || day === 23) {
    daySuffix = "rd"
  } else {
    daySuffix = "th"
  }

  return `${day}${daySuffix}, ${month} ${year}`
}

function TopbarAdmin() {
  // * set current location
  const [currentLocation, setCurrentLocation] = useState("")

  const [currentDate, setCurrentDate] = useState(new Date())

  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/admin":
        setCurrentLocation("Dashboard")
        break
      case "/admin/user":
        setCurrentLocation("Profil")
        break
    }
  }, [location])

  const formattedDate = getFormattedDate(currentDate)

  return (
    <div className="flex justify-between shadow-lg sm:shadow-md items-center px-[3%] py-1 font-content bg-base-100">
      <div className="sm:space-y-2">
        <div>
          <h1 className="font-app text-2xl sm:text-4xl first-letter:text-3xl sm:first-letter:text-5xl">
            {currentLocation}
          </h1>
        </div>
        <div>
          <span className="sm:text-lg text-slate-600">{formattedDate}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="avatar online placeholder hidden sm:block">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
            <span className="text-xl">RM</span>
          </div>
        </div>
        <div>
          <h1 className="text-sm sm:text-lg font-bold">
            Rakototsihita Mihintsy
          </h1>
          <h1 className="text-xs sm:text-base text-right sm:text-start">
            Administrateur
          </h1>
        </div>
      </div>
    </div>
  )
}

export default TopbarAdmin
