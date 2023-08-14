import React from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';
import admissionPic from './admission.png'

import './Admission.css'


const Admission = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="adminssion_main_section container">
                <div className="adminssion_main_div row">

                    <h1>Admission Section</h1>
                    <br />
                    <img src={admissionPic} className='img-fluid w-60' alt="" />
                    <h2>Enrollment, Tuition & Policies</h2>
                    <br />
                    <p>The admission process in Child Care Super is based on ongoing enrollment. You may enroll your child at any time throughout the year. Acceptance into any of the classes is based on availability. Little Scholars Interviews each family prior to awarding acceptance into our schools. WE believe in upholding high standards and it is important for us to determine whether the new incoming family and the vision of our school is a great fit. Little Scholars Interviews each family prior to awarding acceptance into our schools. WE believe in upholding high standards and it is important for us to determine whether the new incoming family and the vision of our school is a great fit.</p>

                    <br />
                    <h2>Registration Fee</h2>
                    <br />
                    <p>There is a one-time registration fee and a deposit is required to enroll all children and guarantee placement at the center. The registration fee/deposit may be applied to the waitlist if the classroom requested is unavailable.</p>

                    <br />
                    <h2>Enrollment Forms</h2>
                    <br />
                    <p>If you are interested in sending your child to our childcare centers, please fill out the below registration Form. We have provided the forms below to make your childcare experience the best it can possibly be.</p>
                    <p className='text-center'><button className='btn btn-danger  admission_button'><a href="https://drive.google.com/file/d/1T7N2FGTMWWRXmtl6X8p5Sb2tUW8qyRsv/view?usp=sharing">Apply Now</a></button></p>

                </div>

            </section>

            <Footer></Footer>
        </div>
    );
};

export default Admission;