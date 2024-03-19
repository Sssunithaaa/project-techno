import React, { useState } from "react";
import "./daily.css";
import { Link } from "react-router-dom"; // Removed BrowserRouter and Route imports
import DailyView from "./dailyview"; // Corrected import statement

const Daily = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedMachines, setSelectedMachines] = useState([]);
  const [machines] = useState(["M1", "M2", "M3", "M4", "M5", "M6"]); // Available machines
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", {
      employeeName,
      selectedShift,
      selectedMachines,
    });
  };

  const handleMachineChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedMachines((prevSelectedMachines) => [
        ...prevSelectedMachines,
        value,
      ]);
    } else {
      setSelectedMachines((prevSelectedMachines) =>
        prevSelectedMachines.filter((machine) => machine !== value)
      );
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="daily-entry-form">
        <h2 className="form-title">Daily Entry Form</h2>
        <form onSubmit={handleSubmit} className="animated-form">
          <div className="form-group animated-form-item">
            <label htmlFor="employeeName" className="animated-label">
              Employee Name:
            </label>
            <input
              type="text"
              id="employeeName"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
              className="animated-input"
            />
          </div>
          <div className="form-group animated-form-item">
            <label htmlFor="shift" className="animated-label">
              Shift:
            </label>
            <select
              id="shift"
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              required
              className="animated-select"
            >
              <option value="">Select Shift</option>
              <option value="shift1">Shift 1</option>
              <option value="shift2">Shift 2</option>
              <option value="shift3">Shift 3</option>
            </select>
          </div>
          <div className="form-group animated-form-item">
            <label className="animated-label">Machines:</label>
            <div className="dropdown">
              <button onClick={toggleDropdown} className="dropdown-toggle">
                {dropdownOpen ? "Close" : "Open"} Machines
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  {machines.map((machine) => (
                    <label key={machine} className="checkbox-option">
                      <input
                        type="checkbox"
                        value={machine}
                        checked={selectedMachines.includes(machine)}
                        onChange={handleMachineChange}
                      />
                      <span className="checkbox-label">{machine}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn animated-button">
            <Link to="/dailyView">Submit</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Daily;
