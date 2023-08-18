import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Maindashboard from "../MainDashboard/Maindashboard";

const Report = () => {
  const users = useLoaderData();
  const [isShowReport, setIsShowReport] = useState(false);
  const [displayUsers, setDisplayUsers] = useState(users);
  const [reportData, setReportData] = useState({});

  const handleAddEnrollment = (event) => {
    event.preventDefault();
    // reportData get from search from

    let getResultByStatus =[];

    console.log(getResultByStatus);

    if(reportData.status == 'All')
    {
        getResultByStatus = users.filter(
            (user) => user.status == "Accepted" || user.status == "Rejected" || user.status == "Onboard" || user.status == "New"
          );
    }
    else{
        getResultByStatus = users.filter(
            (user) => user.status === reportData.status
          );
    }
    const result = getResultByStatus.filter(row => {
      const dbDate = row.currentDate?.split('-').map(Number);
      const startDate = reportData.start?.split('-').map(Number);
      const endDate = reportData.end?.split('-').map(Number);
  
      if (dbDate && startDate && endDate) {
          const [dbYear, dbMonth, dbDay] = dbDate;
          const [startYear, startMonth, startDay] = startDate;
          const [endYear, endMonth, endDay] = endDate;
  
          if (
              dbYear >= startYear && dbYear <= endYear &&
              dbMonth >= startMonth && dbMonth <= endMonth &&
              dbDay >= startDay && dbDay <= endDay
          ) {
              return true;
          }
      }
  
      return false;
  });
  
    console.log(result);
    setDisplayUsers(result);
    setIsShowReport(true);
  };

  const handleServiceBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;

    const newEnrollment = { ...reportData };
    newEnrollment[field] = value;
    console.log(newEnrollment);
    setReportData(newEnrollment);
  };

  return (
    <div>
      <Maindashboard></Maindashboard><span style={{display:'block', height:'82px', width:'1090px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
      <div
        className="container rightMainD"
        style={{
          width: "1000px",
          marginRight: "1px",
          marginLeft: "280px",
          marginTop: "15px",
        }}
      >
        {/* Loop on data  */}
        <h3 className="text-center">Report Show</h3>
        <form onSubmit={handleAddEnrollment} className="mb-3">
         
          <div className="row">
            <div className="from-control col-4 mb-3">
              <label>Date From</label>
              <input
                className="form-control"
                onBlur={handleServiceBlur}
                type="date"
                name="start"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="from-control col-4 mb-3">
              <label>Date To</label>
              <input
                className="form-control"
                onBlur={handleServiceBlur}
                type="date"
                name="end"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-4 mb-3">
              <label>Select Type</label>
              <select
                className="form-control"
                onBlur={handleServiceBlur}
                name="status"
                required
              >
                <option value="" selected disabled>
                  select
                </option>
                <option value="All">All</option>
                <option value="Accepted">Accepted</option>
                <option value="Onboard">Onboard</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
            <div className="d-flex justify-content-center">
            <button className="btn btn-danger w-25 text-center" type="submit">  Show
          </button>
            </div>
            
          </div>
         
          
        </form>

        {isShowReport && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Enroll Id</th>
                <th>Parent</th>
                <th>program</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {displayUsers.map((user) => (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.program}</td>
                  <td>{user.mobile1}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Report;
