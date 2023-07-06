import React from 'react';
import './MainSections.css'
import bannerImg from '../layout/images/banner.jpg'
import service1Pic from '../layout/images/Rectangle 6.png'
import service2Pic from '../layout/images/course.png'
import service3Pic from '../layout/images/Rectangle 15.png'
import calenderPic from '../layout/images/calendar-outline 2.png'
import seatPic from "../layout/images/Layer 2.png"

import nurse1 from '../layout/images/nurse1.jpg'
import nurse2 from '../layout/images/nurse-2.jpg'
import nurse3 from '../layout/images/nurse-3.jpg'

const MainSections = () => {
    return (
        <div>

            <section class="banner-section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="banner-left">
                                <h2>We Care <br /> Your Babies</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus beatae corporis odio provident, obcaecati voluptate. adipisicing elit. Accusamus beatae corporis odio provident, obcaecati voluptate. </p>
                                <div class="btn btn-danger">Get this Plan</div>
                            </div>
                        </div>

                        <div class="col-md-7">
                            <div class="banner-right">
                                <img src={bannerImg} class="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>





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
                                    <a href="" class="btn btn-course">Buy Now</a>
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
                                    <a href="" class="btn btn-course">Buy Now</a>
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
                                    <a href="" class="btn btn-course">Buy Now</a>
                                    <ul>
                                        <li><i><img src={calenderPic} alt=""/></i> <span class="mrgn">Start 20 April, 2021</span></li>
                                        <li><i><img src={seatPic} alt=""/></i> <span class="mrgn">60 seats</span></li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="nurse-section" id="nurse">
                <div class="container">
                    <div class="row heading">
                        <h1>Our Nurses</h1>
                    </div>

                    <a class="need" href="#">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card" style={{width: '18rem'}}>
                                    <img src={nurse1} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card card-2" style={{width: '18rem'}}>
                                    <div class="card-2-img">
                                        <img src={nurse2} class="card-img-top img-fluid" alt="..."/>
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card" style={{width: '18rem'}}>
                                    <img src={nurse3} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </section>


<div class="more">
  <h1>more sections are coming...</h1>
 </div>


        </div>
    );
};

export default MainSections;