import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
} from "chart.js"
import { colors } from "../../City/City"
ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale
)

const generateRandomValue = () => {
  const res: any = []
  for (let i = 0; i < 12; i++) {
    res.push({
      x: `2023-${i < 9 ? "0" : ""}${i + 1}-01`,
      y: Math.floor(Math.random() * 90 + 10),
    })
  }
  return res
}

export const StatTypeReve = (props: any) => {
  const data = {
    datasets: [
      {
        label: "Amour",
        data: [...generateRandomValue()],
        borderColor: colors[0],
      },
      {
        label: "Cauchemar",
        data: [...generateRandomValue()],
        borderColor: colors[1],
      },
      {
        label: "Richesse",
        data: [...generateRandomValue()],
        borderColor: colors[3],
      },
    ],
  }
  const options = {
    scales: {
      x: [
        {
          type: "time",
          time: {
            unit: "month",
            displayFormats: {
              month: "MMM YYYY",
            },
          },
        },
      ],
    },
  }
  return <Line data={data} options={options} {...props} />
}
