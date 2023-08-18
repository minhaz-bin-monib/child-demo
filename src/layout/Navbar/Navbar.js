import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './logo_prev_ui.png';
import  { AuthContext } from '../../contexts/UserContext';

import { Dropdown } from 'react-bootstrap';

const Navbar = () => {


    const { user, logOut } = useContext(AuthContext)
    // console.log(user['uid']);
    return (
        <div>


            <header>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <img src={logo} className="img-fluid nav-img" alt="" />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0" >

                                <li className="nav-item">
                                    <a className="nav-link " href="#"><Link className='main-text-style' to='/main'>Home</Link></a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href='#' ><Link className='main-text-style' to='/allnurses'>Team</Link></a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link" href='#'><Link className='main-text-style' to='/programs'>Programs</Link></a>

                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href='#'><Link className='main-text-style' to='/events'>Events</Link></a>

                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href='#'><Link className='main-text-style' to='/curriculum'>Curriculum</Link></a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='#'><Link className='main-text-style' to='/services'>Services</Link></a>

                                </li>
                                

                                <li className="nav-item">
                                {
                                    
                                    user?.uid === "qyy039iXPlUlcfGTcZa9p4jKarq2"  ? 
                                    <>
                                    <a className="nav-link" ><Link className='main-text-style' to='/dashboard'>Dashboard</Link></a>
                                    </>
                                    :
                                    <span></span>
                                    
                                }
                                </li>



                            </ul>

                            <form className="d-flex">


                                {user?.uid ?

                                    <>
                                        <button onClick={logOut} className='btn btn-danger'><Link style={{ color: "white" }} className='main-text-style' to='/main'>Logout</Link></button>
                                        {/* <div>
                                            <Link to='/dashboard'><p className='admin_style'><span className='font-style'>Admin</span></p></Link>
                                        </div> */}
                                    </>


                                    :
                                    <button className='btn btn-danger'><Link style={{ color: "white" }} className='main-text-style' to='/login'>Login</Link></button>
                                    

                                }
                                {
                                    
                                    user?.uid === "qyy039iXPlUlcfGTcZa9p4jKarq2"  ? 
                                    <>
                                    <div>
                                            <Link to='/dashboard'><p className='admin_style'><span className='font-style'>Admin</span></p></Link>
                                        </div>
                                    </>
                                    :
                                    <span></span>
                                    
                                }
                                
                                


                            </form>

                        </div>
                    </div>
                </nav>
            </header>




            {/* <nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav> */}

        </div>
    );
};

export default Navbar;