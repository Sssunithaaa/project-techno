// Jobs component
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

import { JobsData } from "../../data"; // Assuming you have a file containing job data
import JobView from "../../components/JobsCRUD/JobsView/JobsView";

const Jobs = () => {
  const [data, setData] = useState(JobsData);
  const [newJobName, setNewJobName] = useState("");
  const [newJobLength, setNewJobLength] = useState("");
  const [newHolesCount, setNewHolesCount] = useState("");
  const [newToolCode, setNewToolCode] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openView, setOpenView] = useState(false); // State to control the visibility of the JobView dialog
  const [selectedJob, setSelectedJob] = useState(null); // State to store the selected job
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleAddJob = () => {
    const newJob = {
      Job_id: data.length + 1, // Assigning Job_id here
      name: newJobName,
      length: newJobLength,
      holesCount: newHolesCount,
      toolCode: newToolCode,
    };
    setData([...data, newJob]);
    setNewJobName("");
    setNewJobLength("");
    setNewHolesCount("");
    setNewToolCode("");
  };

  const handleDeleteJob = (Job_id) => {
    setData(data.filter((job) => job.Job_id !== Job_id));
  };

  const handleViewJob = (job) => {
    setSelectedJob(job); // Set the selected job
    setOpenView(true); // Open the JobView dialog
  };

  const handleCloseView = () => {
    setOpenView(false); // Close the JobView dialog
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = () => {
    const filteredData = JobsData.filter((job) =>
      job.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredData);
  };

  return (
    <div className="job-container">
      <h1>JOBS MANAGEMENT</h1>
      <div className="text-field-container">
        <Button
          className="add-button"
          variant="contained"
          color="primary"
          onClick={handleAddJob}
        >
          Add Job
        </Button>
        <TextField
          className="text-field"
          label="Search Job Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Job ID</TableCell>{" "}
              {/* Displaying Job ID */}
              <TableCell className="table-header">Job Name</TableCell>
              <TableCell className="table-header">Job Length</TableCell>
              <TableCell className="table-header">No. of Holes</TableCell>
              <TableCell className="table-header">Tool Code</TableCell>
              <TableCell className="table-header">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.Job_id}>
                <TableCell className="table-cell">{row.Job_id}</TableCell>{" "}
                {/* Displaying Job ID */}
                <TableCell className="table-cell">{row.name}</TableCell>
                <TableCell className="table-cell">{row.length}</TableCell>
                <TableCell className="table-cell">{row.holesCount}</TableCell>
                <TableCell className="table-cell">{row.toolCode}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDeleteJob(row.Job_id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginLeft: 10 }}
                    onClick={() => handleViewJob(row)} // Pass the current row to handleViewJob
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
        className="job-pagination"
        rowsPerPageOptions={[2, 4, 10, 15, { label: "All", value: -1 }]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Render the JobView component */}
      <JobView
        open={openView}
        handleClose={handleCloseView}
        selectedJob={selectedJob}
      />
    </div>
  );
};

export default Jobs;
