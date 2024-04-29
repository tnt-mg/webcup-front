import NavigationAdmin from "./Pages/Components/NavigationAdmin"
import { Outlet } from "react-router-dom"
import { ReactNotifications } from "react-notifications-component"
import "react-notifications-component/dist/theme.css"
import { Suspense, lazy } from "react"
import LoadingAdmin from "./Pages/Components/LoadingAdmin"
import { NavigationAdminMobile } from "./Pages/Components/NavigationAdminMobile"

const TopbarAdmin = lazy(() => import("./Pages/Components/TopbarAdmin"))

function LayoutAdmin() {
  return (
    <div className="flex overflow-x-hidden">
      <ReactNotifications />
      {/* navigation */}
      <div className="h-screen w-[5.5%] z-50 hidden sm:block">
        <NavigationAdmin />
      </div>
      {/* content */}
      <div className="w-full sm:w-[94.5%] relative h-screen overflow-y-auto my-[20%] sm:my-0">
        <div className="sm:sticky fixed top-0 left-0 w-full z-50">
          <TopbarAdmin />
        </div>
        <div className="px-[3%] py-[2%] z-0">
          <Suspense fallback={<LoadingAdmin />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      {/* nav mobile */}
      <div className="fixed bottom-0 w-[100vw] sm:hidden">
        <NavigationAdminMobile />
      </div>
    </div>
  )
}

export default LayoutAdmin
