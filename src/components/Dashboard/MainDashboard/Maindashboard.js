import React from 'react';
import './MainDashboard.css'
import Navbar from '../../../layout/Navbar/Navbar';
import Footer from '../../../layout/Footer/Footer';
import dashboardImg from './images/logo_prev_ui.png'
import { LiaUserNurseSolid } from 'react-icons/lia';
import { GrUpdate } from 'react-icons/gr';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';




const Maindashboard = () => {
    return (
        <section className="dashboard_main_section">
            <div className="dashboard_main_div container">


            <Link to='/main'><img src={dashboardImg} alt="" className='img-fluid mt-2'/></Link>

            <span className=''></span>

            <ul>
                              <li>
                                    <div class="list_icon">
                                    <LiaUserNurseSolid size='2rem'></LiaUserNurseSolid>
                                    </div>
                                    <div>
                                        <Link to="/dashboard"><p>Dashboard</p></Link>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_icon">
                                    <LiaUserNurseSolid size='2rem'></LiaUserNurseSolid>
                                    </div>
                                    <div>
                                        <Link to="/dashboard/createbabysiter"><p>Add BabySiter</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <GrUpdate size='1.5rem'></GrUpdate>

                                    </div>
                                    <div>
                                    <Link to="/dashboard/addService"><p>Service</p></Link>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_icon">
                                    <GrUpdate size='1.5rem'></GrUpdate>

                                    </div>
                                    <div>
                                    <Link to="#"><p>Enrolement</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <GrUpdate size='1.5rem'></GrUpdate>

                                    </div>
                                    <div>
                                    <Link to="#"><p>Suscriber</p></Link>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_icon">
                                    <GrUpdate size='1.5rem'></GrUpdate>

                                    </div>
                                    <div>
                                    <Link to="#"><p>Query</p></Link>
                                    </div>
                                </li>
                                <li>
                                    <div class="list_icon">
                                    <GrUpdate size='1.5rem'></GrUpdate>

                                    </div>
                                    <div>
                                    <Link to="/dashboard/report"><p>Report</p></Link>
                                    </div>
                                </li>


                                <li>
                                    <div class="list_icon">
                                    <TiUserDeleteOutline size='1.5rem'></TiUserDeleteOutline>

                                    </div>
                                    <div>
                                    <Link to="/deleteNurse"><p>Curriculum</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <TiUserDeleteOutline size='1.5rem'></TiUserDeleteOutline>

                                    </div>
                                    <div>
                                    <Link to="/deleteNurse"><p>Update Curriculum</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <TiUserDeleteOutline size='1.5rem'></TiUserDeleteOutline>

                                    </div>
                                    <div>
                                    <Link to="/deleteNurse"><p>Delete Curriculum</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <TiUserDeleteOutline size='1.5rem'></TiUserDeleteOutline>

                                    </div>
                                    <div>
                                    <Link to="/deleteNurse"><p>Activities</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <TiUserDeleteOutline size='1.5rem'></TiUserDeleteOutline>

                                    </div>
                                    <div>
                                    <Link to="/deleteNurse"><p>Update Activities</p></Link>
                                    </div>
                                </li>

                                
                            </ul>

            </div>

        </section>
        
    );
};

export default Maindashboard