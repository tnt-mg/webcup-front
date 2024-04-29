import {
  Suspense,
  createContext,
  lazy,
  useCallback,
  useRef,
  useState,
} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./Layout"
import LayoutAdmin from "./LayoutAdmin"
import Comments from "./Pages/Admin/Comments"
import Message from "./Pages/Admin/Message/Message"
import { crudRoutes } from "./Pages/Admin/crudRoutes"
import { SongIcon } from "./Pages/Components/Icons/SongIcon"
import { ProtectedRoute } from "./utils/ProtectedRoute"
import "xtendui"
import "xtendui/src/overlay"
import "xtendui/src/toggle"

import ScrollToTop from "./utils/ScrollToTop"
import Loading from "./Pages/Components/Loading"
import World from "./Pages/World"

//MAMPIASÀ LAZY ISAKIN ROUTE
const City = lazy(() => import("./Pages/City/City"))
// const LayoutAdmin = lazy(() => import("./LayoutAdmin"))
const Dashboard = lazy(() => import("./Pages/Admin/Dashboard"))
const Profil = lazy(() => import("./Pages/Admin/Profil"))
const Notfound = lazy(() => import("./Pages/Components/Notfound"))
const NotFoundAdmin = lazy(() => import("./Pages/Components/NotFoundAdmin"))
const Whiteboard = lazy(() => import("./Pages/Admin/Whiteboard/Whiteboard"))
// const Layout = lazy(() => import("./Layout"))
const Landing = lazy(() => import("./Pages/Home/Landing"))
const Other = lazy(() => import("./Pages/Home/Other"))
const Forms = lazy(() => import("./Pages/Admin/Forms"))
const Livestream = lazy(() => import("./Pages/Admin/Live/Livestream"))
const LiveJoin = lazy(() => import("./Pages/Admin/Live/LiveJoin"))
const VideoCreatorExported = lazy(
  () => import("./Pages/Admin/VideoCreator/VideoCreatorExported")
)
const VideoCreator = lazy(
  () => import("./Pages/Admin/VideoCreator/VideoCreatorLayout")
)

const MyDiapo = lazy(() => import("./Pages/MyDiapo/MyDiapo"))

const Timeline = lazy(() => import("./Pages/Admin/Timeline/Timeline"))

const Tps = lazy(() => import("./Pages/TPS/Tps"))

const VideoRecord = lazy(() => import("./Pages/Admin/VideoCreator/VideoRecord"))

const Signup = lazy(() => import("./Pages/Signup"))
const Login = lazy(() => import("./Pages/Login"))

const Visit360 = lazy(() => import("./Pages/Visit360"))

const LiteCard = lazy(() => import("./Pages/LiteCard"))

export const HomeLoaded = createContext({
  loaded: false,
  setLoaded: (v: boolean) => {},
})

function App() {
  const songRef = useRef<any>()

  const handleStart = useCallback(
    (event: any) => {
      songRef.current?.handleSong(event)
    },
    [songRef.current]
  )
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //* on production
  // window.addEventListener('load', () => {
  //   setIsLoading(false);
  // });

  //* simulate low connection speed
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1500)
  // }, [])
  const [loaded, setLoaded] = useState(false)

  return (
    <HomeLoaded.Provider value={{ loaded, setLoaded }}>
      <div className="font-content">
        {/* <Loading3D global={!loaded} onStart={handleStart} disabled={loaded} />
         */}
        {/* <Loader /> */}
        <div>
          <div className="fixed bottom-2 right-2 z-40 hidden sm:block">
            <SongIcon ref={songRef} />
          </div>
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                {/* home route */}
                <Route path="/" element={<Layout />}>
                  <Route index element={<Landing />} />
                  <Route path="other" element={<Other />} />
                  <Route path="city" element={<City />} />
                  <Route path="world" element={<World />} />
                  <Route path="world/tps" element={<Tps />} />
                  <Route path="whiteboard" element={<Whiteboard />} />
                  <Route path="live" element={<Livestream />} />
                  <Route path="*" element={<Notfound />} />
                  <Route path="mydiapo" element={<MyDiapo />} />
                  <Route path="world/visit360" element={<Visit360 />} />
                  <Route path="world/litecard" element={<LiteCard />} />
                </Route>
                {/* login route */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* admin route */}
                <Route
                  path="/admin"
                  element={
                    // <ProtectedRoute>
                    <LayoutAdmin />
                    // </ProtectedRoute>
                  }
                >
                  <Route index element={<Dashboard />} />
                  <Route path="comments" element={<Comments />} />
                  <Route path="record" element={<VideoRecord />} />
                  <Route path="profil" element={<Profil />} />
                  <Route path="setting" element={<Forms />} />
                  <Route path="*" element={<NotFoundAdmin />} />
                  <Route path="message" element={<Message />} />
                  <Route path="live/join" element={<LiveJoin />} />
                  <Route path="video" element={<VideoCreatorExported />} />
                  <Route path="video/create/:id" element={<VideoCreator />} />
                  <Route path="tendances" element={<Timeline />} />
                  {crudRoutes.map((route, index) => {
                    const { path, element } = route
                    const Element = element
                    return (
                      <Route
                        key={`${path}-${index}`}
                        path={path}
                        element={<Element />}
                      />
                    )
                  })}
                </Route>
              </Routes>
            </Suspense>
            <ScrollToTop />
          </BrowserRouter>
        </div>
      </div>
    </HomeLoaded.Provider>
  )
}

export default App
