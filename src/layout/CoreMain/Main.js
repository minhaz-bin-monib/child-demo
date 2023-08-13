import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Main.css';

import UserContext, { AuthContext } from '../../contexts/UserContext';
import { EmailContext } from '../../components/LoginBootstrap';
import { Dropdown } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';



const Main = () => {

   
    return (
        <div>
            
            
            <Outlet></Outlet>
        </div>
    );
};

export default Main;