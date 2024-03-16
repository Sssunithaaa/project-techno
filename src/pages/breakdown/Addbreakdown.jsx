import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const AddBreakdown = ({ open, handleClose, handleAddBreakdown }) => {
  const [employee, setEmployee] = useState("");
  const [minutesIntoShift, setMinutesIntoShift] = useState("");
  const [targetAchieved, setTargetAchieved] = useState("");
  const [machine, setMachine] = useState("");
  const [tool, setTool] = useState("");
  const [replacementTool, setReplacementTool] = useState("");
  const [reason, setReason] = useState("");

  const handleAdd = () => {
    // Validate if all required fields are filled
    if (
      employee &&
      minutesIntoShift &&
      targetAchieved &&
      machine &&
      tool &&
      replacementTool &&
      reason
    ) {
      const breakdownInfo = {
        employee,
        minutesIntoShift,
        targetAchieved,
        machine,
        tool,
        replacementTool,
        reason,
      };
      handleAddBreakdown(breakdownInfo);
      // Reset fields after adding
      setEmployee("");
      setMinutesIntoShift("");
      setTargetAchieved("");
      setMachine("");
      setTool("");
      setReplacementTool("");
      setReason("");
      handleClose();
    } else {
      // Handle validation error, show error message or prevent submission
      alert("Please fill in all fields");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Breakdown Information</DialogTitle>
      <DialogContent>
        <TextField
          label="Which Employee?"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Number of minutes into shift?"
          value={minutesIntoShift}
          onChange={(e) => setMinutesIntoShift(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Target Achieved in 90mins?"
          value={targetAchieved}
          onChange={(e) => setTargetAchieved(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Which Machine?"
          value={machine}
          onChange={(e) => setMachine(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Which Tool?"
          value={tool}
          onChange={(e) => setTool(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Replaced with which tool?"
          value={replacementTool}
          onChange={(e) => setReplacementTool(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBreakdown;
