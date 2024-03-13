// Shift1Chart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { MeanData } from "../chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MeanChart() {
  // Extract jobs data directly from shift1Data
  const dataValues = MeanData.map((dataPoint) => dataPoint.jobs);

  const totalJobs = dataValues.reduce((acc, curr) => acc + curr, 0); // Calculate the total number of jobs

  const data = {
    datasets: [
      {
        label: "Shop 1",
        data: dataValues,
        backgroundColor: ["#d3d6db", "#3a4750"],
        borderColor: ["#d3d6db", "#3a4750"],
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false, // Turn off the default labels
        formatter: (value) => {
          // Display the overall percentage in the middle
          const percentage = ((value * 100) / totalJobs).toFixed(2);
          return percentage + "%";
        },
        font: {
          size: "30", // Font size of the percentage text
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}

export default MeanChart;
