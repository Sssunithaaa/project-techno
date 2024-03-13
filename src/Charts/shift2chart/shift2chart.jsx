// Shift1Chart.jsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { shift2Data } from "../chart.js";
import "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

function Shift2Chart() {
  // Extract jobs data directly from shift1Data
  const dataValues = shift2Data.map((dataPoint) => dataPoint.jobs);

  const totalJobs = dataValues.reduce((acc, curr) => acc + curr, 0); // Calculate the total number of jobs

  const data = {
    datasets: [
      {
        label: "Shop 1",
        data: dataValues,
        backgroundColor: ["#3CB371", "#66CDAA"],
        borderColor: ["#3CB371", "#66CDAA"],
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

export default Shift2Chart;
