import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
// Update the import path for shift1Data
import { shift1Data } from "../../Charts/chart.js";

import "./shift1chart.css";

const chart1_2_options = {
  responsive: false,
  maintainAspectRatio: true,
  elements: {
    point: {
      radius: 1,
    },
  },
  scales: {
    x: {
      ticks: {
        display: true,
        autoSkip: true,
        maxRotation: 10,
        color: "white",
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        display: true,
        autoSkip: true,
        color: "white",
      },
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    // Set the background color of the chart to transparent
    backgroundColor: "grey",
  },
  animation: {
    duration: 1000, // Adjust the duration in milliseconds
    easing: "easeInOutQuart", // Adjust the easing function
  },

  datasets: {
    line: {
      cubicInterpolationMode: "monotone", // Set to "monotone" for curvy lines
    },
  },
};

const gradientStroke = (ctx) => {
  if (!ctx || !ctx.canvas) {
    // Handle the case where ctx or ctx.canvas is undefined
    console.error("Canvas context is undefined");
    return null;
  }

  let gradientStroke = ctx.canvas
    .getContext("2d")
    .createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
  gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
  gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); // blue colors

  return gradientStroke;
};

const Shift1Chart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    let myChart;

    if (chartInstance.current) {
      // Destroy the previous chart instance if it exists
      chartInstance.current.destroy();
    }

    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: shift1Data.map((item) => item.label),
        datasets: [
          {
            label: "Jobs",
            fill: true,
            backgroundColor: "rgba(29,140,248,0)",
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: shift1Data.map((item) => item.jobs),
          },
        ],
      },
      options: chart1_2_options,
    });

    chartInstance.current = myChart;

    return () => {
      // Destroy the chart before unmounting
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className="big-chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Shift1Chart;
