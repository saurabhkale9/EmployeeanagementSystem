import axios from 'axios';
import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react'

export default function ViewEmployee() {

    let[employees,setemployees]=useState([]);
    let[reload,setreload]=useState(false);
    let[showmodal ,setshowmodal]=useState(false);

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
    let[empid,setempid]=useState(0);

    let handleprofile = (event) => {
    // console.log(event.target.files);
     const file = event.target.files[0];
    console.log(event.name)
    

    let filepath=` ./images/${file.name}`
    console.log(filepath)
    setprofile(filepath);
    };
     useEffect(()=>
    {
        axios.get("http://localhost:8080/findbyemp")
        .then((response)=>{setemployees(response.data)})
        .catch((error)=>{alert(error)});


     },[reload])
let deleteemp =(empid)=>{
  axios.delete(`http://localhost:8080?deletebyempid?empid=${empid}`)
  .then((response)=>
    {alert(response.data)
  setreload(!reload);
    })
    

  .catch((error)=>{alert(error)})



}

let readytoupdate=(emp)=>{

  setshowmodal(true)
  setempid(emp.empid);
  setFirstname(emp.firstname);
  setMiddlename(emp.middlename)
  setLastname(emp.lastname);
  setaddress(emp.address);
  setadharno(emp.adharno);
  setdepartment(emp.department);
  setdesignation(emp.designation);
  setcontactno(emp.contactno);
  setgender(emp.gender);
  setexp(emp.exp);
  setemail(emp.email);
  setedu(emp.edu);
  setdob(emp.dob);
  setjoiningdate(emp.joiningdate);
  setprofile(emp.profile);
  setpanno(emp.panno);
  setsalary(emp.salary);
  setstatus(emp.status);
  setreportingmanager(emp.reportingmanager);
  setworklocation(emp.worklocation)

}
     console.log(employees);

     let updateemp=(event)=>{
      event.preventDefault();
      let employee = 
      {
    firstname, middlename,lastname,email,contactno,address,gender,dob,profile,edu,panno,adharno,department,designation,salary,exp,worklocation,joiningdate,reportingmanager,status
        };
  axios.patch(`udpateemp?empid=&{empid}`,employee)
  .then((response)=>
    {
      alert(response.data);
      setreload(!reload)
    })
  .catch(()=>{})
     }
     
  return (



   
    <div>
       <div className="container-fluid">
        <div className='row'>
          {
            employees.map((emp)=>
                <div className="col-3">

                <div className="card" style={{"width":"18rem"}}>
  <img src={emp.profile} className="card-img-top" alt="..."
   style={{"height":"180px"}}/>
  <div className="card-body">
    <h5 className="card-title">{emp.firstname} {emp.middlename} {emp.lastname}</h5>
    <p className="card-text">
    <strong>Empid</strong>:{emp.empid}<br></br>
    <strong>Department</strong>:{emp.department}
    <strong>Designation</strong>:{emp.designation}
    <strong>Email</strong>:{emp.email}
    <strong>Contact No</strong>:{emp.contactno}
    <strong>Joining Date</strong>:{emp.joiningdate}
    <strong>dob</strong>:{emp.dob}
    </p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}

    <div className='d-flex gap-3'>
      <button className='btn btn-danger' 
      onClick={()=>{deleteemp(emp.empid)}}> 
      Delete</button>

      <button className='btn btn-success'
      onClick={()=>{readytoupdate(emp)}}>
      Update</button>
      
    </div>
  </div>
</div> 

                </div>
            )
          }
        </div>

       </div>
{
  showmodal?<div class="modal d-block" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Employee Update Form</h5>
        <button type="button" class="btn-close" 
        data-bs-dismiss="modal" aria-label="Close"
        onClick={()=>{setshowmodal(false)}}></button>
      </div>
      <div class="modal-body">
        <form onSubmit={updateemp}>
        <h4 className="mb-3 text-danger">
          Personal Information
        </h4>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>First Name</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setFirstname(event.target.value)}}
            value={firstname}
            />
          </div>

          <div className="col-md-4">
            <label>Middle Name</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setMiddlename(event.target.value)}}
            value={middlename}
            />
          </div>

          <div className="col-md-4">
            <label>Last Name</label>
            <input type="text" className="form-control" 
            onChange={(event)=>{setLastname(event.target.value)}}
            value={lastname}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Email</label>
            <input type="email" className="form-control" 
            onChange={(event)=>{setemail(event.target.value)}}
            value={email}/>
          </div>

          <div className="col-md-4">
            <label>Contact Number</label>
            <input type="tel" className="form-control"
            onChange={(event)=>{setcontactno(event.target.value)}} 
            value={contactno}/>
          </div>

          <div className="col-md-4">
            <label>Date of Birth</label>
            <input type="date" className="form-control" 
            onChange={(event)=>{setdob(event.target.value)}}
            value={dob}/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>Address</label>
            <textarea className="form-control"
            onChange={(event)=>{setaddress(event.target.value)}}
            value={address}
            ></textarea>
          </div>

          <div className="col-md-3">
            <label>Education</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setedu(event.target.value)}}
            value={edu} />
          </div>

          <div className="col-md-3">
            <label>Gender</label>
            <select className="form-control"
            onChange={(event)=>{setgender(event.target.value)}}
            value={gender}>
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
            value={panno} />
          </div>

          <div className="col-md-6">
            <label>Aadhaar Number</label>
            <input type="text" className="form-control" 
            onChange={(event)=>{setadharno(event.target.value)}}
            value={adharno} />
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
            value={department} />
          </div>

          <div className="col-md-4">
            <label>Designation</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setdesignation(event.target.value)}}
            value={designation} />
          </div>

          <div className="col-md-4">
            <label>Salary</label>
            <input type="number" className="form-control"
            onChange={(event)=>{setsalary(event.target.value)}}
            value={salary} />
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
              value={exp}
            />
          </div>

          <div className="col-md-4">
            <label>Work Location</label>
            <input type="text" className="form-control"
            onChange={(event)=>{setworklocation(event.target.value)}}
            value={worklocation} />
          </div>

          <div className="col-md-4">
            <label>Joining Date</label>
            <input type="date" className="form-control" 
            onChange={(event)=>{setjoiningdate(event.target.value)}}
            value={joiningdate}/>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <label>Reporting Manager</label>
            <input type="text" className="form-control" 
            onChange={(event)=>{setreportingmanager(event.target.value)}}
            value={reportingmanager}/>
          </div>

          <div className="col-md-6">
            <label>Status</label>
            <select className="form-control"
            onChange={(event)=>{setstatus(event.target.value)}}
            value={status}>
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
        </div>

      <div className='row'>
        <div className='col'>
          <label>Upload Profile</label>
          <input type='file' className='form-control'
          onChange={(event)=>{handleprofile(event)}}
          ></input>

        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <label>Profile preview</label>
         <img src={profile} style={{"height":"200px","width":"200px","objectFit":"cover"}}></img>
        </div>
      </div>
        

        <div className="text-center mb-4">
          <button type="submit" className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </form>
      </div>
  
    </div>
  </div>
</div>:null
}
       
    </div>
  )
}
