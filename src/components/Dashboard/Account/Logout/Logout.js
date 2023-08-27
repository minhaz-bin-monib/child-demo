import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/UserContext';
import Maindashboard from '../../MainDashboard/Maindashboard';

const Logout = () => {


    const { user, logOut } = useContext(AuthContext)

    return (
        <section className="add_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 add_service_main_div" >
                    
                        
                    <form  className='form_control'>
                        <h4 className='pt-3'>Your all Session and updates will be saved permanently. <br /> Clik below for Sign out</h4>
                        <br />
                        <button onClick={logOut} className='btn btn-danger'><Link style={{ color: "white" }} className='main-text-style' to='/main'>Sign Out</Link></button>
                        <br />
                        
                                
                        {/* <button className='btn btn-danger mt-3' type="submit">Add</button> */}
                    </form>

                </div>

            </div>
        </section>
    );
};

export default Logout;