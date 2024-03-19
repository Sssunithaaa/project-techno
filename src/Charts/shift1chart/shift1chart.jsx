import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { shift1Data } from "../chart";
import GaugeChart from "react-gauge-chart";
import "chartjs-plugin-datalabels";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

function Shift1Chart({ selectedDay, OnDayChangeShift1 }) {
  const [meanCost, setMeanCost] = useState(null);
  const [selectedDayData, setSelectedDayData] = useState([]);
  const [data, setData] = useState(null);
  const [angle, setAngle] = useState(null);

  // Define colorRange outside of the useEffect hook
  const colorRange = [
    "#C8E6C9",
    "#A5D6A7",
    "#81C784",
    "#66BB6A",
    "#4CAF50",
    "#43A047",
    "#388E3C",
    "#2E7D32",
    "#1B5E20",
  ];

  useEffect(() => {
    setSelectedDayData(OnDayChangeShift1);

    if (selectedDay) {
      const efficiencyByShift = {};
      selectedDayData.forEach((dataPoint) => {
        if (!efficiencyByShift[dataPoint.id]) {
          efficiencyByShift[dataPoint.id] = {
            totalTargetedJobs: 0,
            totalJobs: 0,
          };
        }
        efficiencyByShift[dataPoint.id].totalTargetedJobs +=
          dataPoint.targetedJobs;
        efficiencyByShift[dataPoint.id].totalJobs += dataPoint.jobs;
      });

      // Calculate shiftIds here
      const shiftIds = Object.keys(efficiencyByShift).map(
        (shift, index) => shift - "${index + 1}"
      );

      const percentages = Object.values(efficiencyByShift).map((shift) => {
        return (shift.totalJobs / shift.totalTargetedJobs) * 100;
      });

      const shiftColors = percentages.map(
        (_, index) => colorRange[index % colorRange.length]
      );

      const averagePercentage =
        percentages.reduce((acc, curr) => acc + curr, 0) / percentages.length;
      const angle = (averagePercentage / 100) * Math.PI;

      setData({
        datasets: [
          {
            label: "Shop 1 - ${selectedDay}",
            data: percentages,
            backgroundColor: shiftColors,
            borderColor: ["#668ba4", "#dde0ab"],
            borderWidth: 1,
            circumference: 180,
            rotation: 270,
            ids: shiftIds,
          },
        ],
        labels: shiftIds,
      });

      setAngle(angle);
    }
  }, [selectedDay, OnDayChangeShift1]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        formatter: (value) => {
          return value.toFixed(2) + "%"; // Display efficiency with two decimal places
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
    <Link to="/chart">
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <div style={{ width: "100%", display: "inline-block" }}>
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={30}
            colors={["#00FA9A", "#00BFFF", "#FFD700"]}
            arcWidth={0.3}
            percent={angle / Math.PI} // Convert angle to a 0-1 scale
            textColor={"#FFFFFF"}
            needleColor="#ffffff"
            needleBaseColor="#ffffff"
            hideText
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            textAlign: "center",
            bottom: "-5px", // Adjust the distance from the bottom of the gauge
            color: "#FFFFFF", // Text color
            fontSize: "18px", // Adjust text size as needed
          }}
        >
          {((angle / Math.PI) * 100).toFixed(2)}%
        </div>
      </div>
    </Link>
  );
}

export const fetchShiftsForDay1 = (day) => {
  let dataForSelectedDay = shift1Data;
  if (day !== "All Days") {
    dataForSelectedDay = shift1Data.filter((shift) => shift.day === day);
  }
  return dataForSelectedDay;
};

export default Shift1Chart;
