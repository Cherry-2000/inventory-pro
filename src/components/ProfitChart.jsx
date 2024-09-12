import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { ProfitChartOptions as options } from '../lib/options'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const ProfitChart = () => {
  const [data] = useState({
    labels,
    datasets: [
      {
        fill: {
          target: 'origin',
          below: 'rgb(225, 0, 0)'
        },
        label: 'Profit/Loss',
        data: [14, 13, 13, -24, 16, 34, 36],
        borderColor: 'rgb(31, 255, 135)',
        backgroundColor: 'rgba(31, 255, 135, 0.5)',
        pointStyle: 'circle',
        pointRadius: 8,
        pointHoverRadius: 15
      },
      {
        fill: 'origin',
        label: 'Purchases',
        data: [148, 144, 134, 204, 164, 324, 363],
        borderColor: 'rgb(199, 31, 255)',
        backgroundColor: 'rgba(199, 31, 255, 0.5)',
        pointStyle: 'circle',
        pointRadius: 8,
        pointHoverRadius: 15
      },
      {
        fill: 'origin',
        label: 'Sale',
        data: [182, 174, 184, 244, 194, 394, 393],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        pointStyle: 'circle',
        pointRadius: 8,
        pointHoverRadius: 15
      }
    ]
  })

  return <Line options={options} data={data} />
}

export default ProfitChart
