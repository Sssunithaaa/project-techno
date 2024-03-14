// Home.jsx
import React from "react";
import Topbox from "../../components/topbox/topbox";
import "./home.css";
import TopRightbox from "../../components/toprightbox/toprightbox.jsx";
import BigChart from "../../charts/BigChart/BigChart.jsx";
import LeftChart from "../../charts/leftLinechart/leftlinechart.jsx";

import Shift1Chart from "../../charts/shift1chart/shift1chart.jsx";
import Shift2Chart from "../../charts/shift2chart/shift2chart.jsx";
import Shift3Chart from "../../charts/shift3chart/shift3chart.jsx";
import MeanChart from "../../charts/MeanChart/Meanchart.jsx";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <Topbox />
      </div>
      <div className="box box2">
        SHIFT1
        <Shift1Chart />
      </div>
      <div className="box box3">
        SHIFT2
        <Shift2Chart />
      </div>
      <div className="box box4">
        TOPRIGHT BOX
        <TopRightbox />
      </div>
      <div className="box box5">
        SHIFT3
        <Shift3Chart />
      </div>
      <div className="box box6">
        MEAN SHIFT
        <MeanChart />
      </div>
      <div className="box box7">
        MAINCHART
        <BigChart />
      </div>
      <div className="box box8">
        LEFTCHART
        <LeftChart />
      </div>
      {/* <div className="box box9">
        <BarChart />
      </div> */}
    </div>
  );
};

export default Home;
