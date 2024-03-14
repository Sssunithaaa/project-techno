import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { shift1Data } from "../chart.js";
import "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

function Shift1Chart() {
  const [meanCost, setMeanCost] = useState(null);

  useEffect(() => {
    // Calculate total cost and mean cost
    const totalCost = shift1Data.reduce(
      (acc, dataPoint) => acc + dataPoint.cost,
      0
    );
    const mean = totalCost / shift1Data.length;
    setMeanCost(mean.toFixed(2));
  }, []);

  // Extract jobs data directly from shift1Data
  const dataValues = shift1Data.map((dataPoint) => dataPoint.jobs);

  const totalJobs = dataValues.reduce((acc, curr) => acc + curr, 0); // Calculate the total number of jobs

  // Create a gradient fill
  const gradient = document.createElement("canvas").getContext("2d");
  const gradientFill = gradient.createLinearGradient(0, 0, 0, 200);
  gradientFill.addColorStop(0, "#668ba4");
  gradientFill.addColorStop(1, "#dde0ab");

  // Calculate the angle for the speedometer line
  const angle = (meanCost / totalJobs) * Math.PI;

  const data = {
    datasets: [
      {
        label: "Shop 1",
        data: dataValues,
        backgroundColor: gradientFill, // Use the gradient fill
        borderColor: ["#668ba4", "#dde0ab"],
        borderWidth: 1, // Add border width for better visibility
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
        display: true,
        color: "white",
        formatter: (value) => {
          const percentage = ((value * 100) / totalJobs).toFixed(2);
          return percentage + "%";
        },
        font: {
          size: "16",
        },
      },
      annotation: {
        annotations: [
          {
            type: "line",
            mode: "horizontal",
            scaleID: "y-axis-0",
            borderColor: "red",
            borderWidth: 2,
            value: angle,
          },
          {
            type: "text",
            fontFamily: "Arial",
            fontColor: "white",
            fontStyle: "bold",
            fontSize: 16,
            text: "12",
            x: "50%",
            y: "50%",
          },
        ],
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

      ctx.fillText("Text", x, adjustedY);

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

export default Shift1Chart;
