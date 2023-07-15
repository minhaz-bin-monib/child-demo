import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Main.css';
import logo from './images/logo_prev_ui.png';
import UserContext, { AuthContext } from '../contexts/UserContext';
import { EmailContext } from '../components/LoginBootstrap';


const Main = () => {

    const {user, logOut} = useContext(AuthContext)
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
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{marginRight:'450px'}}>
                                <li className="nav-item">
                                    <a className="nav-link " href="#home"><Link className='main-text-style' to='/main'>Home</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">SERVICES</a>
                                    
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#nurse"><Link className='main-text-style' to='/nurses'>Nurses</Link></a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                

                            {user?.uid ?
                        
                        <>
                        <button onClick={logOut} className='btn btn-danger'><Link style={{color:"white"}} className='main-text-style' to='/main'>Logout</Link></button> 
                        <div>
                        <p className='admin_style'><span className='font-style'>Admin</span></p>
                        </div>
                        </>
                            

                            :
                            <button className='btn btn-danger'><Link style={{color:"white"}} className='main-text-style' to='/login'>Login</Link></button>
                            
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
            <Outlet></Outlet>
        </div>
    );
};

export default Main;