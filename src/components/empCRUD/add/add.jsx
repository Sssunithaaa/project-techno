import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import "./add.css";

function Add({ employees, setEmployees, setIsAdding }) {
  const [ssn, setSsn] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!ssn || !name || !phoneNumber || !address) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      ssn,
      name,
      phoneNumber,
      address,
    };

    employees.push(newEmployee);
    setEmployees([...employees]); // Create a new array to trigger a re-render
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${name}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="add-container">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <label htmlFor="ssn">SSN</label>
        <input
          id="ssn"
          type="text"
          ref={textInput}
          name="SSN"
          value={ssn}
          onChange={(e) => setSsn(e.target.value)}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="number"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
