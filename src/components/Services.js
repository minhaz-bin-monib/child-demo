import React from 'react';
import './Services.css'


import service1Pic from '../layout/images/Rectangle 6.png'
import service2Pic from '../layout/images/course.png'
import service3Pic from '../layout/images/Rectangle 15.png'
import calenderPic from '../layout/images/calendar-outline 2.png'
import seatPic from "../layout/images/Layer 2.png"
import { Link } from 'react-router-dom';






const Services = () => {
    return (
        <section class="Services-section" id="services">
                <div class="container">
                    <div class="row heading">
                        <h1>Our Services</h1>
                    </div>

                    <div class="row">
                        <div class="col-md-4">
                            <div class="single-course">
                                <img src={service1Pic} class="img-fluid" alt=""/>

                                    <h1>Day Care</h1>
                                    <p>Designation</p>
                                    <Link to='/glogin'><a href="" className="btn btn-warning">Buy Now</a></Link>
                                    <ul>
                                        <li><i><img src={calenderPic} alt=""/></i> <span class="mrgn">Start 20 April, 2021</span></li>
                                        <li><i><img src={seatPic} alt=""/></i> <span class="mrgn">60 seats</span></li>
                                    </ul>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="single-course">
                                <img src={service2Pic} class="img-fluid" alt=""/>

                                    <h1>Night Care</h1>
                                    <p>Designation</p>
                                    <Link to='/glogin'><a href="" className="btn btn-warning">Buy Now</a></Link>
                                    <ul>
                                        <li><i><img src={calenderPic} alt=""/></i> <span class="mrgn">Start 20 April, 2021</span></li>
                                        <li><i><img src={seatPic} alt=""/></i> <span class="mrgn">60 seats</span></li>
                                    </ul>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="single-course">
                                <img src={service3Pic} class="img-fluid" alt=""/>

                                    <h1>Whole Day</h1>
                                    <p>Designation</p>
                                    <Link to='/glogin'><a href="" className="btn btn-warning">Buy Now</a></Link>
                                    <ul>
                                        <li><i><img src={calenderPic} alt=""/></i> <span class="mrgn">Start 20 April, 2021</span></li>
                                        <li><i><img src={seatPic} alt=""/></i> <span class="mrgn">60 seats</span></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Services;