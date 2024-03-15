import React, { useState, useEffect } from "react";

const JobsAdd = () => {
  const [jobName, setJobName] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [length, setLength] = useState("");
  const [holesCount, setHolesCount] = useState("");
  const [options, setOptions] = useState([]); // State for options

  useEffect(() => {
    // Simulating fetching options from backend or using rough data
    const fetchOptions = async () => {
      // Rough options data
      const roughOptions = ["Option 1", "Option 2", "Option 3"];
      setOptions(roughOptions);
    };

    fetchOptions();
  }, []); // Fetch options only once on component mount

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform job addition logic here
    console.log("Submitted:", { jobName, selectedOption, length, holesCount });
    // Reset form fields after submission
    setJobName("");
    setSelectedOption("");
    setLength("");
    setHolesCount("");
  };

  return (
    <div>
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobName">Job Name:</label>
          <input
            type="text"
            id="jobName"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="option">Select an Option:</label>
          <select
            id="option"
            value={selectedOption}
            onChange={handleOptionChange}
            required
          >
            <option value="">Select</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {selectedOption && (
          <>
            <div>
              <label htmlFor="length">Length:</label>
              <input
                type="number"
                id="length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="holesCount">Number of Holes:</label>
              <input
                type="number"
                id="holesCount"
                value={holesCount}
                onChange={(e) => setHolesCount(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
};

export default JobsAdd;
