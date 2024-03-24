import { Dialog } from "@mui/material";
import React, { useState, useEffect } from "react";
import Select from "react-select";

const Config = ({ selectedMachine, handleCloseView, openView }) => {
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedTool, setSelectedTool] = useState("");
  const [numTools, setNumTools] = useState(1);

  const machines = [
    { label: "Machine 1", value: "M1" },
    { label: "Machine 2", value: "M2" },
    { label: "Machine 3", value: "M3" },
  ];

  const jobs = [
    { label: "Job 1", value: "J1" },
    { label: "Job 2", value: "J2" },
    { label: "Job 3", value: "J3" },
    { label: "Job 4", value: "J4" },
  ];

  const tools = {
    J1: [
      { label: "Tool 1", value: "T1" },
      { label: "Tool 2", value: "T2" },
      { label: "Tool 3", value: "T3" },
    ],
    J2: [
      { label: "Tool 4", value: "T4" },
      { label: "Tool 5", value: "T5" },
    ],
    J3: [
      { label: "Tool 6", value: "T6" },
      { label: "Tool 7", value: "T7" },
      { label: "Tool 8", value: "T8" },
    ],
    J4: [
      { label: "Tool 9", value: "T9" },
      { label: "Tool 10", value: "T10" },
      { label: "Tool 11", value: "T11" },
      { label: "Tool 12", value: "T12" },
    ],
  };

  useEffect(() => {
    console.log("openView prop in Config:", openView);
  }, [openView]);

  const handleJobChange = (selectedOption) => {
    setSelectedJob(selectedOption);
    setSelectedTool(""); // Reset selected tool when job changes
  };

  const handleToolChange = (selectedOption) => {
    setSelectedTool(selectedOption);
  };

  const handleNumToolsChange = (e) => {
    setNumTools(parseInt(e.target.value) || 1);
  };
  console.log(selectedMachine.id)
  return (
    <Dialog open={openView} onClose={handleCloseView}  maxWidth="md" sx={{
    "& .MuiDialog-paper": {
      width: "70%", // Adjust width as needed
      maxHeight: "130vh", // Adjust height as needed
      paddingInline:"40px",
      padding: "20px", // Add padding
      borderRadius: "10px", // Add border radius
      display: "flex",
      flexDirection:"column",
      rowGap: "20px"

    },
    "& .MuiDialogTitle-root": {
      textAlign: "center", // Center align the title
    },
    "& .MuiDialogActions-root": {
      justifyContent: "center", // Center align the actions
    },
  }} 
  className="font-medium flex flex-col gap-y-4"
  >
      <h2 className="text-center font-bold text-2xl text-gray-800 ">Machine Configuration</h2>
      <p>Selected Machine: {selectedMachine.id}</p>
      <div>
        <label>Select Job:</label>
        <Select options={jobs} value={selectedJob} onChange={handleJobChange} />
      </div>
      {selectedJob && (
        <div>
          <label>Select Tool:</label>
          <Select
            options={tools[selectedJob.value]}
            value={selectedTool}
            onChange={handleToolChange}
          />
        </div>
      )}
      {selectedJob && selectedTool && (
        <div>
          <label>Number of Tools:</label>
          <input
            type="number"
            value={numTools}
            onChange={handleNumToolsChange}
          />
        </div>
      )}
      <button className="px-5 py-2 bg-blue-500 rounded-md hover:bg-blue-700 font-semibold text-white w-[20%] mx-auto" onClick={handleCloseView}>Close Config</button>
    </Dialog>
  );
};

export default Config;
