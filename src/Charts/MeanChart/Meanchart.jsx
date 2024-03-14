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

  const pluginOption = {
    id: "plugin-option",
    beforeDatasetsDraw: function (chart, args, pluginOptions) {
      const { ctx, data } = chart;

      ctx.save();
      ctx.font = "24px Arial"; // Increased font size to 24px
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const x = chart.getDatasetMeta(0).data[0].x;
      const y = chart.getDatasetMeta(0).data[0].y;

      // Measure text height and divide by 2 to properly position the text
      const textHeight = ctx.measureText("text").actualBoundingBoxAscent;
      const yOffset = textHeight / 2;

      // Adjust Y position to center text vertically
      const adjustedY = y - yOffset;

      ctx.fillText("MEAN", x, adjustedY);

      ctx.restore();
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Doughnut
        data={data}
        options={options}
        plugins={[pluginOption]}
      ></Doughnut>
    </div>
  );
}

export default MeanChart;
