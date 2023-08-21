import axios from 'axios';
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { saveAs } from 'file-saver';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../MainDashboard/Maindashboard';

const SearchReport = () => {

    const users = useLoaderData().filter(f => f.status == 'New' || f.status == 'Accepted' || f.status == 'Onboard' || f.status == 'Rejected');;
    const [isShowReport, setIsShowReport] = useState(false);
    const [enrolemnt, setenrolemnt] = useState(users);
    const [reportData, setReportData] = useState({});
  
    const handleAddEnrollment = (event) => {
      event.preventDefault();
      // reportData get from search from
  
        
      let result = users.filter((el)=> el.email == reportData.email);
    
      console.log(result);
      setenrolemnt(result);
      setIsShowReport(true);
      
    };
  
    // report print 
  
    const createAndDownloadPdf = () => {
      axios.post('http://localhost:5000/create-pdf', enrolemnt)
        .then(() => axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
          console.log(pdfBlob);
          saveAs(pdfBlob, 'newPdf.pdf');
        })
    }
    const createAndOpenPdf = () => {
      axios.post('http://localhost:5000/create-pdf', enrolemnt)
        .then(() => axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
         // Create a URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);
  
        // Open the PDF in a new tab
        const newTab = window.open();
        newTab.location.href = pdfUrl;
        })
    }
  
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
      <Maindashboard></Maindashboard><span className='dashboard_nav'></span>
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
        <h5 className="text-center">Search Result</h5>
        <form onSubmit={handleAddEnrollment} className="mb-5" >
         
          <div className="row">
            <div className="from-control col-12 mb-3">
              <label>Enter your email for search</label>
              <input
                className="form-control"
                onBlur={handleServiceBlur}
                type="text"
                name="email"
                placeholder="email"
                required
              />
            </div>
           
         
            <div className="d-flex justify-content-center">
            <button className="btn btn-danger w-25 text-center" type="submit">  Search
          </button>
            </div>
            
          </div>
         
         
        </form>
        {/* {isShowReport &&  <div className="row mb-2">
            <div className="d-flex justify-content-end">
              <button className="btn btn-sm btn-success mx-2" onClick={createAndOpenPdf}>Open to Pdf</button>
              <button className="btn btn-sm btn-success" onClick={createAndDownloadPdf}>Download Pdf</button>
            </div>
          </div>
        }  */}
       
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
              {enrolemnt.map((user) => (
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

export default SearchReport;