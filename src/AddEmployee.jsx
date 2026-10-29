import axios from "axios";
import React from "react";

import { useState } from "react";
function AddEmployee() {

  let[firstname,setFirstname]=useState();
  let[lastname,setLastname]=useState("");
  let[middlename,setMiddlename]=useState("");
  let[email,setemail]=useState("");
  let[contactno,setcontactno]=useState(0);
  let[address,setaddress]=useState("");
  let[gender,setgender]=useState("");
  let[dob,setdob]=useState("");
  let[profile,setprofile]=useState("");
  let[edu,setedu]=useState("");
  let[panno,setpanno]=useState("");
  let[adharno,setadharno]=useState(0);
  let[department,setdepartment]=useState("");
  let[designation,setdesignation]=useState("");
  let[salary,setsalary]=useState(0.0);
  let[exp,setexp]=useState(0.0);
  let[worklocation,setworklocation]=useState("");
  let[joiningdate,setjoiningdate]=useState("");
  let[reportingmanager,setreportingmanager]=useState("");
  let[status,setstatus]=useState("");


  
  let handleprofile = (event) => {
  const file = event.target.files[0];

  if (file) {
    const filepath = URL.createObjectURL(file);
    setprofile(filepath);
  }
};

  let addemp=(event)=>{
    event.preventDefault();
    let employee = {
    firstname,
    middlename,
    lastname,
    email,
    contactno,
    address,
    gender,
    dob,
    profile:"",
    edu,
    panno,
    adharno,
    department,
    designation,
    salary,
    exp,
    worklocation,
    joiningdate,
    reportingmanager,
    status
  };

    axios.post("http://localhost:8080/addemp", employee)
  .then((res) => {
    console.log("Success:", res.data);
    alert("Employee added successfully!");
  })
  .catch((err) => {
    console.error("Message:", err.message);
    console.error("Status:", err.response?.status);
    console.error("Response:", err.response?.data);
  });
  }




  return (
    <div className="container mt-4 mb-4">
      <h2 className="text-center mb-4 bg-primary text-light p-3">
        Add Employee
      </h2>

      <form onSubmit={addemp}>
        <h4 className="mb-3 text-danger">
          Personal Information
        </h4>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>First Name</label>
            <input type="text" className="form-control" 
            onChange={(event)=>{setFirstname(event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Middle Name</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setMiddlename(event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Last Name</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setLastname(event.target.value)}}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Email</label>
            <input type="email" className="form-control"
            onChange={(event)=>{setemail(event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Contact Number</label>
            <input type="tel" className="form-control"
            onChange={(event)=>{setcontactno (event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Date of Birth</label>
            <input type="date" className="form-control" 
            onChange={(event)=>{setdob(event.target.value)}}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Address</label>
            <textarea className="form-control"
            onChange={(event)=>{setaddress(event.target.value)}}
            ></textarea>
          </div>

          <div className="col-md-3">
            <label>Education</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setedu(event.target.value)}}
            />
          </div>

          <div className="col-md-3">
            <label>Gender</label>
            <select
  className="form-control"
  value={gender}
  onChange={(event) => setgender(event.target.value)}
>
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label>PAN Number</label>
            <input type="text" className="form-control" 
            onChange={(event)=>{setpanno(event.target.value)}}
            />
          </div>

          <div className="col-md-6">
            <label>Aadhaar Number</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setadharno(event.target.value)}}
            />
          </div>
        </div>

        <h4 className="mb-3 text-danger">
          Working Details
        </h4>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Department</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setdepartment(event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Designation</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setdesignation(event.target.value)}} />
          </div>

          <div className="col-md-4">
            <label>Salary</label>
            <input type="number" className="form-control" 
            onChange={(event)=>{setsalary(event.target.value)}}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Experience (Years)</label>
            <input
              type="number"
              step="0.1"
              className="form-control"
              onChange={(event)=>{setexp(event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Work Location</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setworklocation(event.target.value)}}
            />
          </div>

          <div className="col-md-4">
            <label>Joining Date</label>
            <input type="date" className="form-control" 
            onChange={(event)=>{setjoiningdate(event.target.value)}}
            />
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label>Reporting Manager</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setreportingmanager(event.target.value)}}
            />
          </div>

          <div className="col-md-6">
            <label>Status</label>
           <select
  className="form-control"
  value={status}
  onChange={(event) => setstatus(event.target.value)}
>
  <option value="">Select Status</option>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
          </div>
        </div>

    <div className="row-mb-4">    
    <div className="col">
      <label> upload profile</label>
      <input type="file" accept="image/*" 
      onChange={(event)=>{handleprofile(event)}}
      className="form-control"></input>

    </div>
    </div>

    <div className="row mt-4">
      <div className="col" >
        <label>Profile preview</label>
    {profile && (
  <img
    src={profile}
    alt="Employee profile"
    className="img-fluid"
    style={{
      height: "150px",
      width: "170px",
      objectFit: "cover"
    }}
  />
)}
      </div>

    </div>

        <div className="text-center mb-4">
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;