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
  Grid,
} from "@mui/material";

const AddJob = ({ open, handleClose, handleAddJob }) => {
  const [jobId, setJobId] = useState("");
  const [jobName, setJobName] = useState("");
  const [tools, setTools] = useState([{ tool: "", length: "", holes: "" }]);

  const handleAdd = () => {
    // Validate if all required fields are filled
    if (
      jobId &&
      jobName &&
      tools.every((tool) => tool.tool && tool.length && tool.holes)
    ) {
      const newJob = {
        jobId,
        jobName,
        tools,
      };
      handleAddJob(newJob);
      // Reset fields after adding
      setJobId("");
      setJobName("");
      setTools([{ tool: "", length: "", holes: "" }]);
      handleClose();
    } else {
      // Handle validation error, show error message or prevent submission
      alert("Please fill in all fields");
    }
  };

  const handleToolChange = (index, event) => {
    const newTools = [...tools];
    newTools[index][event.target.name] = event.target.value;
    setTools(newTools);
  };

  const addTool = () => {
    setTools([...tools, { tool: "", length: "", holes: "" }]);
  };

  const removeTool = (index) => {
    const newTools = [...tools];
    newTools.splice(index, 1);
    setTools(newTools);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle>Add New Job</DialogTitle>
      <DialogContent>
        <TextField
          label="Job ID"
          value={jobId}
          onChange={(e) => setJobId(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        <TextField
          label="Job Name"
          value={jobName}
          onChange={(e) => setJobName(e.target.value)}
          variant="outlined"
          fullWidth
          size="large"
          margin="normal"
        />
        {tools.map((tool, index) => (
          <Grid container spacing={2} key={index}>
            <Grid item xs={4}>
              <FormControl fullWidth margin="normal">
                <InputLabel>select tool</InputLabel>
                <Select
                  value={tool.tool}
                  onChange={(e) => handleToolChange(index, e)}
                  name="tool"
                  variant="outlined"
                >
                  <MenuItem value="Hammer">Hammer</MenuItem>
                  <MenuItem value="Screwdriver">Screwdriver</MenuItem>
                  {/* Add more MenuItem components for additional tools */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                label={`Length of the ${tool.tool}`}
                value={tool.length}
                onChange={(e) => handleToolChange(index, e)}
                name="length"
                variant="outlined"
                fullWidth
                size="large"
                margin="normal"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label={`Number of Holes for the ${tool.tool}`}
                value={tool.holes}
                onChange={(e) => handleToolChange(index, e)}
                name="holes"
                variant="outlined"
                fullWidth
                size="large"
                margin="normal"
              />
            </Grid>
            <Grid item xs={1}>
              <Button
                onClick={() => removeTool(index)}
                color="primary"
                top="50px"
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        ))}
        <Button onClick={addTool}>Add Tool</Button>
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

export default AddJob;
