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
  const [numTools, setNumTools] = useState(1); // State to track the number of tools
  const [toolNumbers, setToolNumbers] = useState(
    Array.from({ length: 3 }, (_, i) => i + 1)
  );

  // Function to generate tool numbers dynamically based on tool name
  const generateToolNumbers = (name, numTools) => {
    return Array.from({ length: numTools }, (_, i) => `${name}${i + 1}`);
  };

  const handleAdd = () => {
    if (toolName && maxLength && cost && numTools) {
      const newTools = [];
      for (let i = 0; i < numTools; i++) {
        const toolNumber = toolNumbers[i];
        const newTool = {
          id: Math.floor(Math.random() * 1000), // Generate a random ID for the new tool
          name: toolName,
          code: "", // You may need to generate a unique code or handle it differently
          quantity: 0, // Default quantity
          maxLength: parseFloat(maxLength), // Convert to float
          cost: parseFloat(cost), // Convert to float
          toolNumber: toolNumber, // Use the selected toolNumber
        };
        newTools.push(newTool);
      }
      handleAddTool(newTools);
      setToolName("");
      setMaxLength("");
      setCost("");
      setNumTools(1);
      handleClose();
    } else {
      alert("Please fill in all fields");
    }
  };

  const handleNumToolsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setNumTools(value);
      setToolNumbers(Array.from({ length: value }, (_, i) => i + 1));
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
            setToolName(e.target.value);
            setToolNumbers(Array.from({ length: numTools }, (_, i) => i + 1)); // Reset tool numbers when tool name changes
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
        <TextField
          label="Number of Tools"
          type="number"
          value={numTools}
          onChange={handleNumToolsChange}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        {toolName && (
          <>
            {toolNumbers.map((toolNumber) => (
              <FormControl key={toolNumber} fullWidth margin="normal">
                <InputLabel>Select Tool Number {toolNumber}</InputLabel>
                <Select
                  value={toolNumber}
                  onChange={(e) => {}}
                  variant="outlined"
                >
                  {generateToolNumbers(toolName, numTools).map((number) => (
                    <MenuItem key={number} value={number}>
                      {number}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ))}
          </>
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
