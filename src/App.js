import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Employees from "./pages/employees/employee";
import Machines from "./pages/machines/machines";
import Home from "./pages/home/home.jsx";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import React, { useState } from "react";
import Login from "./pages/login/login.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  const Layout = () => {
    return (
      <div className={`main ${theme} `}>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/employees",
          element: <Employees />,
        },
        {
          path: "/machines",
          element: <Machines />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
