import React, { useState } from 'react';
import './Enrollment.css'
import Navbar from '../../layout/Navbar/Navbar';

const Enrollment = () => {

    const [enrollment, setEnrollment] = useState({});
    const [isShowForm, setIsShowForm] = useState(false);
    const [enroleId, setEnroleId] = useState();


    const handleAddEnrollment = event => {
        event.preventDefault();
        
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${year}-${month}-${day}`;
        console.log(currentDate); // "2022-05-27"

        const eventData = {
            name: enrollment.name,
            mobile1: enrollment.mobile1,
            mobile2: enrollment.mobile2,
            email: enrollment.email,
            childName: enrollment.childName,
            childBirthDate: enrollment.childBirthDate,
            gender: enrollment.gender,
            program: enrollment.program,
            address: enrollment.address,
            zipcode: enrollment.zipcode,
            city: enrollment.city,
            state: enrollment.state,
            country: enrollment.country,
            landmark: enrollment.landmark,
            currentDate : currentDate,
            status: "New"
        }
        console.log(eventData);

        const url = 'http://localhost:5000/enrollment';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data);
                    setEnroleId(data.insertedId);
                    console.log(enroleId);
                    setIsShowForm(true);
                    alert('enrollment added successfully');
                    event.target.reset();
                }
            })
    }





    const handleServiceBlur = event => {
        const value = event.target.value;
        const field = event.target.name;

        const newEnrollment = { ...enrollment };
        newEnrollment[field] = value;
        console.log(newEnrollment);
        setEnrollment(newEnrollment);

    }
    return (
        <div>
            <Navbar></Navbar>

            <section className="container">
                    {/* Successfully Enrole */}
                    {isShowForm && <h4 className='text-center mb-3'>Enroll Completed your Enroll Id is: {enroleId}</h4>}

                    {/* Enrole Time Open From  */}
                    { !isShowForm && <h4 className='text-center mb-2'>Enroll Now</h4>}
                    

                    { !isShowForm &&  <form onSubmit={handleAddEnrollment}>
                         <h6>Primary Details</h6>
                         <div className="row">
                        <div className='from-control col-6 mb-3'>
                        <label >Your Name</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='name' placeholder='Your Name' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Mobile Number</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='mobile1' placeholder='mobile' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Allternative Mobile Number</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='mobile2' placeholder='mobile' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Email</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='email' placeholder='email' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Child Name</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='childName' placeholder='Child Name' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Child Birth Date</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="date" name='childBirthDate' placeholder='Date of birth' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Gender</label>
                        <select className="form-control" onBlur={handleServiceBlur} name='gender' required >
                            <option value="" selected disabled>select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                           
                        </select>
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Program</label>
                        <select className="form-control" onBlur={handleServiceBlur} name='program' required >
                            <option value="" selected disabled>select</option>
                            <option value="Play Group (1.5-2.5 year)">Play Group (1.5-2.5 year)</option>
                            <option value="Nursery(2.5-3.5 year)">Nursery(2.5-3.5 year)</option>
                            <option value="Lower KG (3.5-4.5 year)">Lower KG (3.5-4.5 year)</option>
                            <option value="Upper KG (4.5-6.5 year)">Upper KG (4.5-6.5 year)</option>
                        </select>
                        </div>
                       
                        <br />
                        <h6>Address Details</h6>
                        <div className='from-control col-6 mb-3'>
                        <label >Address</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='address' placeholder='Address' required />
                        </div>
                      
                        <div className='from-control col-6 mb-3'>
                        <label >Zipcode</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='zipcode' placeholder='ZipCode' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >City</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='city' placeholder='city' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >State</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='state' placeholder='State' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >Country</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='country' placeholder='Country' required />
                        </div>
                        <div className='from-control col-6 mb-3'>
                        <label >LandMark</label>
                        <input className="form-control" onBlur={handleServiceBlur} type="text" name='landmark' placeholder='Country' required />
                        </div>

                        </div>
                        <button className='btn btn-danger mt-3 w-100' type="submit">Enroll</button>
                    </form>
                    }
                
            </section>

        </div>
    );
};

export default Enrollment;