import React, { useState, useEffect } from "react";
import Topbox from "../../components/topbox/topbox";
import Charts from "../../Charts/BigChart.jsx";
import "./home.css";

import CustomBar from "../../Barchart/bar.jsx";
import TopRightbox from "../../components/toprightbox/toprightbox.jsx";
import { BarChartData } from "../../Charts/chart.js";
import CustomLeftBar from "../../Barchart/leftBar/leftbar.jsx";
import { LeftBarData } from "../../Charts/chart.js";
import BigChart from "../../Charts/BigChart.jsx";
import Shift1Chart from "../../Charts/shift1chart/shift1chart.jsx";
import Shift2Chart from "../../Charts/shift2chart/shift2chart.jsx";

const Home = () => {
  const [userBar, setUserBar] = useState({
    labels: [],
    datasets: [
      {
        label: "ratio",
        data: [],
      },
    ],
  });

  useEffect(() => {
    setUserBar({
      labels: BarChartData.map((bar) => bar.label),
      datasets: [
        {
          label: "Jobs",
          data: BarChartData.map((data) => data.jobs),
        },
      ],
    });
  }, []);

  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        SHIFT1
        <Shift1Chart />
      </div>
      <div className="box box3"></div>
      <div className="box box4">
        <TopRightbox />
      </div>
      <div className="box box5">
        SHIFT2
        <Shift2Chart />
      </div>
      <div className="box box6">box5</div>
      <div className="box box7">
        <BigChart />
      </div>
      <div className="box box8">
        <CustomBar barChartData={userBar} />
      </div>
      <div className="box box9">
        <CustomLeftBar />
      </div>
    </div>
  );
};

export default Home;
