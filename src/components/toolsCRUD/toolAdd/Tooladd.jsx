import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

const AddTool = ({ open, handleClose, handleAddTool }) => {
  const [toolName, setToolName] = useState("");
  const [maxLength, setMaxLength] = useState("");
  const [cost, setCost] = useState("");
  const [toolNumber, setToolNumber] = useState(1); // Initialize toolNumber state to 1

  // Function to generate tool numbers dynamically based on tool name
  const generateToolNumbers = (name) => {
    return Array.from({ length: 3 }, (_, i) => `${name}${i + 1}`);
  };

  const handleAdd = () => {
    if (toolName && maxLength && cost && toolNumber) {
      const newTool = {
        id: Math.floor(Math.random() * 1000), // Generate a random ID for the new tool
        name: toolName,
        code: "", // You may need to generate a unique code or handle it differently
        quantity: 0, // Default quantity
        maxLength: parseFloat(maxLength), // Convert to float
        cost: parseFloat(cost), // Convert to float
        toolNumber: toolNumber, // Use the selected toolNumber
      };
      handleAddTool(newTool);
      setToolName("");
      setMaxLength("");
      setCost("");
      handleClose();
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Tool</DialogTitle>
      <DialogContent>
        <TextField
          label="Tool Name"
          value={toolName}
          onChange={(e) => {
            console.log("Tool Name Change Event:", e);
            console.log("Tool Name Value:", e.target.value);
            setToolName(e.target.value);
            // Update toolNumber options dynamically when toolName changes
            setToolNumber(1); // Reset toolNumber to 1
          }}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Max Length"
          value={maxLength}
          onChange={(e) => setMaxLength(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        {toolName ? (
          <FormControl fullWidth margin="normal">
            <InputLabel>Select Tool Number</InputLabel>
            <Select
              value={toolNumber}
              onChange={(e) => {
                console.log("Tool Number Change Event:", e);
                console.log("Tool Number Value:", e ? e.target.value : null); // Check if event object is defined
                setToolNumber(e.target.value);
              }}
              variant="outlined"
            >
              {generateToolNumbers(toolName).map((number) => (
                <MenuItem key={number} value={number}>
                  {number}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ) : (
          <p>Loading...</p>
        )}
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

export default AddTool;
