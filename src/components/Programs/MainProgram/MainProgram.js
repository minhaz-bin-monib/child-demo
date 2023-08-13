import React from 'react';
import Navbar from '../../../layout/Navbar/Navbar';
import "./MainProgram.css"
import Footer from '../../../layout/Footer/Footer';
import infant from './MPImages/infant.jpg';
import toddler from './MPImages/toddler.jpg';
import preschool from './MPImages/preschool.jpg'


const MainProgram = () => {
    return (
        <div>
            <Navbar></Navbar>

            <section className='program_main_section'>
                <h1>All Our Programs</h1>
                <div className="row">
                    <div className='col infant_section'>
                        <img src={infant} alt="" />
                        <h2>Infant Program</h2>
                        <h3>(0-1 y.o.)</h3>
                        <button className='btn btn-danger'><a href="http://localhost:3000/infant">Learn More</a></button>
                    </div>
                </div>

                <div className="row">
                <div className='col-md-6 toddler_section'>
                        <img src={toddler} alt="" />
                        <h2>Toddler Program</h2>
                        <h3>(1-2 y.o.)</h3>
                        <button className='btn btn-danger'><a href="http://localhost:3000/toddler">Learn More</a></button>
                    </div>
                    <div className='col-md-6 preschool_section'>
                        <img src={preschool} alt="" />
                        <h2>Preschool Program</h2>
                        <h3>(2-3 y.o.)</h3>
                        <button className='btn btn-danger'><a href="http://localhost:3000/preschool">Learn More</a></button>
                    </div>
                </div>
                
            </section>

            <Footer></Footer>
        </div>
    );
};

export default MainProgram;