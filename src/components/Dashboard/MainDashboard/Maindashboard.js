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
                                        <Link to="/addNurse"><p>Add Nurse</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <GrUpdate size='1.5rem'></GrUpdate>

                                    </div>
                                    <div>
                                    <Link to="/updateAllNurses"><p>Update Nurse</p></Link>
                                    </div>
                                </li>

                                <li>
                                    <div class="list_icon">
                                    <TiUserDeleteOutline size='1.5rem'></TiUserDeleteOutline>

                                    </div>
                                    <div>
                                    <Link to="/deleteNurse"><p>Delete Nurse</p></Link>
                                    </div>
                                </li>

                                
                            </ul>

            </div>

        </section>
    );
};

export default Maindashboard;