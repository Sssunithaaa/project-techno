import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  TablePagination,
} from "@mui/material";

import { ToolsData } from "../../data";
import ToolView from "../../components/toolsCRUD/ToolView/ToolView";
import "./tools.css";

const Tools = () => {
  const [data, setData] = useState(ToolsData);
  const [newToolName, setNewToolName] = useState("");
  const [newToolCode, setNewToolCode] = useState("");
  const [newQuantity, setNewQuantity] = useState("");
  const [newMaxLength, setNewMaxLength] = useState("");
  const [newCost, setNewCost] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [openView, setOpenView] = useState(false); // State to control the visibility of the ToolView dialog
  const [selectedTool, setSelectedTool] = useState(null); // State to store the selected tool
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleAddItem = () => {
    const newTool = {
      id: data.length + 1,
      name: newToolName,
      code: newToolCode,
      quantity: newQuantity,
      maxLength: newMaxLength,
      cost: newCost,
    };
    setData([...data, newTool]);
    setNewToolName("");
    setNewToolCode("");
    setNewQuantity("");
    setNewMaxLength("");
    setNewCost("");
  };

  const handleDeleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleViewTool = (tool) => {
    setSelectedTool(tool); // Set the selected tool
    setOpenView(true); // Open the ToolView dialog
  };

  const handleCloseView = () => {
    setOpenView(false); // Close the ToolView dialog
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = () => {
    const filteredData = ToolsData.filter((tool) =>
      tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="tool-container">
      <h1>TOOLS MANAGEMENT</h1>
      <div className="text-field-container">
        <Button
          className="add-button"
          variant="contained"
          color="primary"
          onClick={handleAddItem}
        >
          Add Item
        </Button>
        <TextField
          className="text-field"
          label="Search Tool Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">ID</TableCell>
              <TableCell className="table-header">Tool Name</TableCell>
              <TableCell className="table-header">Tool Code</TableCell>
              <TableCell className="table-header">Quantity</TableCell>
              <TableCell className="table-header">Max Length</TableCell>
              <TableCell className="table-header">Cost</TableCell>
              <TableCell className="table-header">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell className="table-cell">{row.id}</TableCell>
                <TableCell className="table-cell">{row.name}</TableCell>
                <TableCell className="table-cell">{row.code}</TableCell>
                <TableCell className="table-cell">{row.quantity}</TableCell>
                <TableCell className="table-cell">{row.maxLength}</TableCell>
                <TableCell className="table-cell">{row.cost}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDeleteItem(row.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 10 }}
                    onClick={() => handleViewTool(row)} // Pass the current row to handleViewTool
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        className="tool-pagination"
        rowsPerPageOptions={[2, 4, 10, 15, { label: "All", value: -1 }]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Render the ToolView component */}
      <ToolView
        open={openView}
        handleClose={handleCloseView}
        selectedTool={selectedTool}
      />
    </div>
  );
};

export default Tools;
