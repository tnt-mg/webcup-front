import React, { useEffect, useRef, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// import 'chart.js/auto';
import { Line } from "react-chartjs-2"
import "chartjs-adapter-luxon"
import { StreamingPlugin, RealTimeScale } from "chartjs-plugin-streaming"
ChartJS.register(
  StreamingPlugin,
  RealTimeScale,
  CategoryScale,
  LineController,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const BASE_NUMBER = 10

export interface LiveLineChartProps {
  title: string
  data?: number[]
}
function LiveLineChart({ title, data }: LiveLineChartProps) {
  const lineChartData = {
    labels: [""],
    datasets: [
      {
        data: [7, 8, 4],
        label: title,
        borderColor: "rgba(34,85,218,0.5)",
        backgroundColor: ["red"],
        borderWidth: 1.5,
        fill: false,
        pointRadius: 0,
        spanGaps: true,
        tension: 0.2,
      },
    ],
  }
  const lineChartOptions: any = {
    responsive: true,
    line: {
      datasets: {
        borderWidth: 1,
        fontSize: 1,
      },
    },
    scales: {
      x: {
        type: "realtime",
        realtime: {
          duration: 20000,
          refresh: 100,
          delay: 200,
          // TODO move this to a separate function
          onRefresh: (chart: any) => {
            chart.data.datasets.forEach((dataset: any) => {
              dataset.data.push({
                x: Date.now(),
                y: Math.random(),
              })
            })
          },
        },
      },
      y: {
        ticks: {
          // forces step size to be X units
          stepSize: 18,
        },
      },
    },
    interaction: {
      intersect: false,
    },
  }
  const ref = useRef()
  const [liveData, setLiveData] = useState<number[]>([])
  useEffect(() => {
    const chart: any = ref.current
    const generatedLiveData = createArrayOfLiveData(20)
    setLiveData(data ?? generatedLiveData)

    return () => chart.destroy()
  }, [])

  const createArrayOfLiveData = (len: number): number[] => {
    return Array.from({ length: len }, () =>
      Math.floor(Math.random() * 2 + BASE_NUMBER - 2)
    )
  }

  return <Line ref={ref} data={lineChartData} options={lineChartOptions} />
}

export default LiveLineChart
