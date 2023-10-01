import React, { useEffect, useRef } from 'react'
import { Chart, ChartConfiguration, ChartType } from 'chart.js/auto'

const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null)
  const chartInstanceRef = useRef<Chart | null>(null)

  // Data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    qualifiedData: [355, 320, 350, 430, 450, 570, 550],
    disqualifiedData: [350, 450, 350, 450, 550, 650, 350],
  }

  useEffect(() => {
    if (!chartRef.current) return

    // Create a new chart instance if it doesn't exist
    if (!chartInstanceRef.current) {
      const ctx = chartRef.current.getContext('2d')
      const chartConfig: ChartConfiguration = {
        type: 'line' as ChartType,
        data: {
          labels: data.labels,
          datasets: [
            {
              label: 'Qualified',
              data: data.qualifiedData,
              borderColor: '#FCEBB0',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 8, // Increase the point size
              pointBackgroundColor: 'rgba(252, 235, 176, 0.7)', // Set a transparent point color
              pointBorderColor: 'rgba(252, 235, 176)', // Set a white border color
              pointBorderWidth: 2,
            },
            {
              label: 'Disqualified',
              data: data.disqualifiedData,
              borderColor: '#B8ACFF',
              fill: false,
              pointStyle: 'circle',
              pointRadius: 8, // Increase the point size
              pointBackgroundColor: 'rgba(184,172,255, 0.7)', // Set a transparent point color
              pointBorderColor: 'rgba(184,172,255)', // Set a white border color
              pointBorderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            x: {
              display: true,
              ticks: {
                autoSkip: false, // Prevent automatic label skipping
                maxRotation: 45, // Rotate labels by 45 degrees
                minRotation: 45,
              },
            },
            y: {
              max: 750,
              min: 250,
              ticks: {
                stepSize: 250, // Set the step size to 250
                // suggestedMin: 250, // Start the y-axis at 250
                // suggestedMax: 750,
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                usePointStyle: true,
              },
              align: 'end', // Align the legend to the end
            },
          },
        },
      }

      const newChart = new Chart(ctx, chartConfig)
      chartInstanceRef.current = newChart
    } else {
      // Update the existing chart instance with new data
      chartInstanceRef.current.data.labels = data.labels
      chartInstanceRef.current.data.datasets[0].data = data.qualifiedData
      chartInstanceRef.current.data.datasets[1].data = data.disqualifiedData
      chartInstanceRef.current.update()
    }
  }, [data.disqualifiedData, data.labels, data.qualifiedData])

  return (
    <div className="chart-container p-4 bg-white rounded-lg shadow-lg">
      <canvas ref={chartRef} className="w-full"></canvas>
    </div>
  )
}

export default LineChart
