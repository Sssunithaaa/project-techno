import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";
import "./toolchart.css";

const tool_chart1_2_options = {
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
        display: true,
      },
      borderColor: "white",
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

const tool_generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
};

const Toolchart = () => {
  const tool_chartRef = useRef();
  const tool_chartInstance = useRef(null);

  useEffect(() => {
    const ctx = tool_chartRef.current.getContext("2d");
    let ToolChart;

    if (tool_chartInstance.current) {
      tool_chartInstance.current.destroy();
    }

    ToolChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
        ],
        datasets: [
          {
            label: "Jobs",
            fill: true,
            backgroundColor: "rgba(29,140,248,0.2)",
            borderColor: "rgba(29,140,248,1)",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#1f8ef1",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#1f8ef1",
            pointBorderWidth: 20,
            pointHoverRadius: 2,
            pointHoverBorderWidth: 10,
            pointRadius: 4,
            data: tool_generateRandomData(), // Using rough data generator
          },
        ],
      },
      options: tool_chart1_2_options,
    });

    tool_chartInstance.current = ToolChart;

    return () => {
      if (ToolChart) {
        ToolChart.destroy();
      }
    };
  }, []);

  return (
    <div className="tool-chart-container text-gray-100 flex flex-col w-[100%] h-auto overflow-x-hidden ">
      {/* <div className="additional-info flex w-[100%] h-[30%]">
        <h1 className="tool-information">Tool Information</h1>
        <p className="tool-name">
          {" "}
          <h3>Tool Name:</h3> Example Tool
        </p>
        <p className="tool-code">
          <h3>Tool Code:</h3> XYZ123
        </p>
        <p className="length-of-cut">
          <h3>Length of Cut:</h3> 10 inches
        </p>
        <p className="cost">
          <h3>Cost:</h3> $100
        </p>
      </div> */}
      <div className="h-[100%] bg-[#33373E] p-5 flex flex-col">
        <h2 className="text-3xl uppercase font-bold my-5">Tool Information</h2>
        <div className="flex flex-col gap-y-5">
          <p>Tool name:</p>
        <p>Tool code:</p>
        <p>Length of cut:</p>
        <p>Cost:</p>
        </div>
      </div>
      <div className="w-[90%] h-[100%]">
        <canvas className="tool-chart" ref={tool_chartRef}></canvas>
      </div>
      
    </div>
  );
};

export default Toolchart;
