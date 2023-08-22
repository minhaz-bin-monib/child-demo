import React from 'react';
import Webcam from "react-webcam";
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';

const Camera = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Navbar></Navbar>
            <h1 className='text-center mb-5 mt-3' style={{color:'#e52159'}}>Track your Children Activity</h1>
            <Webcam></Webcam>

            <Footer></Footer>
        </div>
    );
};

export default Camera;