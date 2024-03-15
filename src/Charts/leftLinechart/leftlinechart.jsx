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
    duration: 20000,
    easing: "easeInOutQuart",
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
            backgroundColor: "rgba(29,140,248,0.2)", // Add gradient effect here
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
          {
            label: "Sales",
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.2)", // Add gradient effect here
            borderColor: "#ff6384",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ff6384",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#ff6384",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: LeftLineData.map((item) => item.sales),
          },
          {
            label: "Expenses",
            fill: true,
            backgroundColor: "rgba(255, 205, 86, 0.2)", // Add gradient effect here
            borderColor: "#e6b800",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#e6b800",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#e6b800",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: LeftLineData.map((item) => item.revenue),
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
