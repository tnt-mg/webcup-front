import AnimatedPage from "../../AnimatedPage"
import Feeds from "../Components/Feeds"
import CountUpDash from "../Components/charts/CountUpDash"
import LineChartDash from "../Components/charts/LineChartDash"
import PieChartDash from "../Components/charts/PieChartDash"
import ProgressCircleDash from "../Components/charts/ProgressCircleDash"

function Dashboard() {
  const cards = [50, 25, 60, 95]
  const feeds = ["Rakoto", "Rabe", "Rajao", "Rakoto"]
  return (
    <AnimatedPage>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        <div className="space-y-10 sm:col-span-3">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Title like activity</h1>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-10">
              <div className="sm:col-span-3">
                <div>
                  <div className="h-[50vh] flex justify-center items-center">
                    <LineChartDash />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 space-y-4">
                <div className="h-[10vh] border-b-2 border-primary">
                  <CountUpDash />
                </div>
                <div className="h-[38.5vh] flex justify-center items-center">
                  <PieChartDash />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
            {cards.map((index) => (
              <div key={index} className="p-4">
                <h1 className="text-lg text-center mb-8">
                  Lorem title a little long
                </h1>
                <div className="flex justify-center">
                  <ProgressCircleDash value={index} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="sm:col-span-1">
          <h1 className="text-2xl font-semibold mb-4">Feed back</h1>
          <div className="h-[65vh]">
            {feeds.map((name) => (
              <Feeds name={name} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Dashboard
