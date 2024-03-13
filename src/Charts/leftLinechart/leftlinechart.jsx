import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import { LeftLineData } from "../chart.js";
import "./leftlinechart.css";

const chart1_2_options = {
  responsive: true,
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
        maxRotation: 5,
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
    backgroundColor: "grey",
  },
  animation: {
    // Adjust the duration and easing for smoother animations
    duration: 20000, // Duration of the animation in milliseconds
    easing: "easeInOutQuart", // Easing function for the animation
  },
  datasets: {
    line: {
      cubicInterpolationMode: "monotone",
    },
  },
};

const LeftChart = () => {
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
        labels: LeftLineData.map((item) => item.label),
        datasets: [
          {
            label: "Jobs",
            fill: true,
            backgroundColor: "rgba(29,140,248,0)",
            borderColor: "#283739",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#93deff",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: LeftLineData.map((item) => item.jobs),
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

export default LeftChart;
