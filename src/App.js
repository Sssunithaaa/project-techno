import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { useStateContext } from "./context/ContextProvider";
import Navbarr from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home/home";
import Toolchart from "./pages/Toolchart/toolchart";
import Employee from "./pages/employees/employees";
import Machine from "./pages/machines/machine";
import Job from "./pages/jobs/job";
import Tool from "./pages/tools/tool";
import BreakDown from "./pages/breakdown/breakdowns";
import Homepage from "./pages/home/homepage";
import ToolCharts from "./pages/Toolchart/ToolCharts";
import Jobs from "./pages/jobs/jobs";
const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className="flex relative bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 ">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "bg-main-dark-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div className="fixed md:static bg-main-dark-bg navbar w-full ">
              <Navbarr />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/toolchart" element={<ToolCharts />}></Route>
                <Route path="/employees" element={<Employee />}></Route>
                <Route path="/machines" element={<Machine/>}></Route>
                <Route path="/jobs" element={<Job/>}></Route>
                <Route path = "/tools" element={<Tool/>}></Route>
                <Route path="/breakdown" element={<BreakDown/>}></Route>
                <Route path ="/home" element={<Homepage/>}></Route>
                <Route path="/job" element={<Jobs/>}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
