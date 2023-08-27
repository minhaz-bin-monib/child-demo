import React from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';

const Profile = () => {
    return (
        <section className="add_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 add_service_main_div" >
                    
                        
                    <form  className='form_control'>
                        <h2 className='mb-5 mt-3'>Your Profile Information</h2>
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Username</b> </label>
                        <input className="form-control" type="text" name='Username' placeholder='Username' defaultValue="admin" required />
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Full Name</b> </label>
                        <input className="form-control" type="text" name='fullname' placeholder='fullname' defaultValue="Minhaz Monib" required />
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Email Address</b> </label>
                        <input className="form-control" type="text" name='email' placeholder='email' defaultValue="admin01@gmail.com" required />
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Mobile number</b> </label>
                        <input className="form-control" type="text" name='Number' placeholder='Number' defaultValue="01703824557" required />
                        <br />
                        <label style={{paddingBottom:'2px'}} htmlFor=""><b>Registration Date</b> </label>
                        <input className="form-control" type="text" name='date' placeholder='date' defaultValue="18-08-23" required />
                        <br />
                        
                                
                        {/* <button className='btn btn-danger mt-3' type="submit">Add</button> */}
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Profile;