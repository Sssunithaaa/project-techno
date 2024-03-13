import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { bigLineData, bigLineData2 } from "../chart.js";
import "./BigChart.css";

const chart1_2_options = {
  responsive: true,
  maintainAspectRatio: false,
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
      borderColor: "black",
      borderWidth: 5,
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
    backgroundColor: "grey",
  },
  animation: {
    duration: 5000,
    easing: "easeInOutQuart",
  },
  datasets: {
    line: {
      cubicInterpolationMode: "monotone",
    },
  },
};

const gradientStroke = (ctx) => {
  if (!ctx || !ctx.canvas) {
    console.error("Canvas context is undefined");
    return null;
  }

  let gradientStroke = ctx.canvas
    .getContext("2d")
    .createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
  gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
  gradientStroke.addColorStop(0, "rgba(29,140,248,0)");

  return gradientStroke;
};

const BigChart = () => {
  const chartRef = useRef();
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    let myChart;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: bigLineData.map((item) => item.label),
        datasets: [
          {
            label: "Jobs", // First dataset from bigLineData
            fill: true,
            backgroundColor: "rgba(29,140,248,0.2)", // Blue color with opacity
            borderColor: "rgba(29,140,248,1)", // Blue color
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
            data: bigLineData.map((item) => item.jobs),
          },
          {
            label: "Jobs2", // Second dataset from bigLineData2
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "rgba(255, 99, 132, 1)",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: bigLineData2.map((item) => item.jobs),
          },
        ],
      },
      options: chart1_2_options,
    });

    chartInstance.current = myChart;

    return () => {
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

export default BigChart;
