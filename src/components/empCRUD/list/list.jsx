import React, { useState, useEffect } from "react";
import "./list.css";

function List({ employees, handleEdit, handleDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(7); // Default items per page

  useEffect(() => {
    setItemsPerPage(12); // Set the default items per page
  }, []); // Run this effect only once on component mount

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterEmployees(term);
  };

  const filterEmployees = (term) => {
    const filtered = employees.filter((employee) =>
      Object.values(employee).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(term.toLowerCase())
      )
    );
    setFilteredEmployees(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="contain-table" style={{ display: "block", width: "100%" }}>
      <div className="items-per-page">
        <label>
          Items per page:
          <input
            type="number"
            min="1"
            value={itemsPerPage}
            onChange={(e) =>
              setItemsPerPage(Math.max(1, parseInt(e.target.value, 10)))
            }
          />
        </label>
      </div>
      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div
        className="contain-table clearfix"
        style={{ display: "block", width: "100%" }}
      >
        <table className="stripped-table">
          <thead>
            <tr>
              <th>ID.</th>
              <th>SSN.</th>
              <th>NAME</th>
              <th>Phone number</th>
              <th>Address</th>
              <th>Efficiency</th>
              <th colSpan={2} className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.ssn}</td>
                <td>{employee.name}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.address}</td>
                <td>{employee.efficiency}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="Edit-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="Delete-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={6}>
                {/* Pagination controls */}
                <button
                  onClick={() =>
                    paginate(currentPage > 1 ? currentPage - 1 : 1)
                  }
                  className="pagination-button"
                >
                  {"<"}
                </button>
                {Array.from(
                  {
                    length: Math.ceil(filteredEmployees.length / itemsPerPage),
                  },
                  (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`pagination-button ${
                        index + 1 === currentPage ? "active" : ""
                      }`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    paginate(
                      currentPage <
                        Math.ceil(filteredEmployees.length / itemsPerPage)
                        ? currentPage + 1
                        : currentPage
                    )
                  }
                  className="pagination-button"
                >
                  {">"}
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default List;
