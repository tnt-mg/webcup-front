import React from "react"
import { Radar } from "react-chartjs-2"
import "chartjs-plugin-dragdata"

interface DraggableRadarChartProps {}
const DraggableRadarChart = () => {
  const radarChartOptions: any = {
    responsive: true,
    line: {
      datasets: {
        borderWidth: 2,
      },
    },
    scales: {
      r: {
        suggestedMin: 4,
        suggestedMax: 10,
      },
    },
    // add label font size and style
    scale: {
      pointLabels: {
        font: {
          size: 16,
          family: "Arial",
          weight: "extrabold",
          style: "italic",
        },
      },
    },
    plugins: {
      dragData: {
        round: 1,
        showTooltip: true,
        onDragEnd: (
          e: any,
          datasetIndex: number,
          index: number,
          value: number
        ) => {
          // dispatch event with current index and his new value
          // this.dragEnd.emit({index, value})
        },
      },
    },
  }

  const radarChartData: any = {
    labels: [
      "Météo",
      "Information",
      "Adrénaline",
      "Expérience",
      "Innovation",
      "Sensation",
      "Humour",
    ],
    datasets: [
      {
        data: [7, 8, 4, 6, 8, 5, 5],
        label: "Note",
        backgroundColor: "rgba(34,85,218,0.5)",
        borderColor: "rgba(34,85,218,0.5)",
        pointBorderColor: "rgba(218,34,111,0.5)",
        fill: true,
      },
    ],
  }
  return <Radar options={radarChartOptions} data={radarChartData} />
}

export default DraggableRadarChart
