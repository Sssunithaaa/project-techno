import React, { useState, useEffect } from "react";
import Select from "react-select";

const Daily = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedMachines, setSelectedMachines] = useState([]);
  const [machines] = useState([
    { label: "M1", value: "M1" },
    { label: "M2", value: "M2" },
    { label: "M3", value: "M3" },
    { label: "M4", value: "M4" },
    { label: "M5", value: "M5" },
    { label: "M6", value: "M6" },
  ]);

  const [submittedData, setSubmittedData] = useState(null);
  const [targetAchievedArray, setTargetAchievedArray] = useState([]);
  const [meanTargetAchieved, setMeanTargetAchieved] = useState(0);
  const [showHoursInput, setShowHoursInput] = useState(false);

  useEffect(() => {
    const calculateMean = () => {
      if (targetAchievedArray.length > 0) {
        const sum = targetAchievedArray.reduce((acc, curr) => acc + curr, 0);
        const mean = sum / targetAchievedArray.length;
        setMeanTargetAchieved(mean);
      } else {
        setMeanTargetAchieved(0);
      }
    };

    calculateMean();
  }, [targetAchievedArray]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      employeeName,
      selectedShift,
      selectedMachines,
    };

    setSubmittedData(formData);
    setTargetAchievedArray([]);
  };

  const handleMachineChange = (selectedOptions) => {
    setSelectedMachines(selectedOptions);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const targetArray = submittedData.selectedMachines.map(
        (machine) => machine.targetAchieved || 0
      );
      setTargetAchievedArray(targetArray);
    }
  };

  if (submittedData) {
    return (
      <div className="bg-gray-200 min-h-screen py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Daily Submissions</h1>
        <p className="text-lg font-semibold text-center mb-4">Efficiency: {meanTargetAchieved}</p>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-4">
          {submittedData && (
            <>
              <h3 className="text-lg font-semibold mb-2">
                Machine: {submittedData.selectedMachines[0].label}
              </h3>
              <p className="mb-4">Shift: {submittedData.selectedShift}</p>
            </>
          )}
          <div className="space-y-4">
            {submittedData.selectedMachines.map((machine, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                {index === 0 && !submittedData && (
                  <>
                    <h3 className="text-lg font-semibold mb-2">
                      Machine: {machine.label}
                    </h3>
                    <p>Shift: {selectedShift}</p>
                  </>
                )}
                <p>Employee Name: {employeeName}</p>
                <input
                  type="number"
                  placeholder="Target Achieved"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                  onChange={(e) => {
                    const newTargetArray = [...targetAchievedArray];
                    newTargetArray[index] = parseInt(e.target.value) || 0;
                    setTargetAchievedArray(newTargetArray);
                  }}
                />
                <input
                  type="number"
                  placeholder="Total Target "
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
                />
                <label className="mt-2 flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Breakdown
                </label>
              </div>
            ))}
            <label className="flex items-center mt-2">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => setShowHoursInput(!showHoursInput)}
              />
              Partial Shift
            </label>
            {showHoursInput && (
              <input
                type="time"
                placeholder="Number of hours"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-500"
              />
            )}
            <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full px-8 py-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold mb-6 text-center">Daily Entry Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="employeeName" className="block text-lg font-medium text-gray-700">
              Employee Name:
            </label>
            <input
              type="text"
              id="employeeName"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="shift" className="block text-lg font-medium text-gray-700">
              Shift:
            </label>
            <select
              id="shift"
              value={selectedShift}
              onChange={(e) => setSelectedShift(e.target.value)}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
            >
              <option value="">Select Shift</option>
              <option value="shift1">Shift 1</option>
              <option value="shift2">Shift 2</option>
              <option value="shift3">Shift 3</option>
            </select>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">
              Machines:
            </label>
            <Select
              options={machines}
              value={selectedMachines}
              onChange={handleMachineChange}
              isMulti
              placeholder="Select Machines"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-500"
              menuPlacement="auto"
           
              menuPortalTarget={document.body}
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              isSearchable
              isClearable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Daily;

