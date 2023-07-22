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
import Particle from '../components/Particle';

const MainSections = () => {
    return (
        <div>

            <section class="banner-section">
            <Particle></Particle>
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


            <section class="our-price">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="heading text-center">
          <h2>Our Pricing Plan</h2>
        
          <p>Corem ipsum dolor what a amet, consectetuer adipiscing elit diam an nonummy laoreet dolore magna aliquam erat volutpat.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="price-content">
          <div class="price-head">
            <h2>Business Plan</h2>
            <p>For Super Professional</p>
          </div>
          <div class="price-package">
            <h1><span>$</span>19.99</h1>
            <p>Per month</p>
          </div>
          <div class="package">
            <ul >
              <li>Unimited Pizza</li>
              <li>Daft punk Every Evenings</li>
              <li>Full Access Pizza</li>
              <li>2 Free Farks Every Months</li>
              <li>Unlimited Burger</li>
            </ul>
            <a href="#"><button class="price-btn">SING UP</button></a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="price-content">
          <div class="price-head">
            <h2>Enterprise Plan</h2>
            <p>For Super Professional</p>
          </div>
          <div class="price-package">
            <h1><span>$</span>39.99</h1>
            <p>Per month</p>
          </div>
          <div class="package">
            <ul >
              <li>Unimited Pizza</li>
              <li>Daft punk Every Evenings</li>
              <li>Full Access Pizza</li>
              <li>2 Free Farks Every Months</li>
              <li>Unlimited Burger</li>
            </ul>
            <a href="#"><button class="price-btn">SING UP</button></a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="price-content">
          <div class="price-head">
            <h2>Professional Plan</h2>
            <p>For Super Professional</p>
          </div>
          <div class="price-package">
            <h1><span>$</span>49.99</h1>
            <p>Per month</p>
          </div>
          <div class="package">
            <ul >
              <li>Unimited Pizza</li>
              <li>Daft punk Every Evenings</li>
              <li>Full Access Pizza</li>
              <li>2 Free Farks Every Months</li>
              <li>Unlimited Burger</li>
            </ul>
            <a href="#"><button class="price-btn">SING UP</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<div class="contact_form_container">
  <div class="card">
    <div class="left">
      <img src="https://www.cadence-education.com/wp-content/uploads/2020/08/NAU_51110-1030x580.jpg"/>
    </div>
    <div class="right">
      <h2>Contact Us</h2>
      <div class="contact">
        <div class="form-container">
          <form class="form">
            <div class="username">
              <input type="text" placeholder="Enter your Name"/>
            </div>
            <div class="useremail">
              <input type="email" placeholder="Enter your email" required/>
            </div>
            <div class="usermessage">
              <textarea placeholder="Enter your message" required></textarea>
            </div>
            <div class="usersubmit">
              <input type="submit" value="Contact Us"/>
            </div>
          </form>
        </div>
        <div class="address">
          <div class="email">
            <h4>Contact</h4>
            <p>hi@example.com</p>
          </div>
          <div class="location">
            <h4>Based in</h4>
            <p>Los Angeles,<br/>California</p>
          </div>
          <div class="social">
            <span><a href="#"><i class="fab fa-facebook"></i></a></span>
            <span><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></span>
            <span><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <p>Millions of people of all ages and from around
          the world are improving their lives with us</p>
      </div>
      <div class="col-md-8 footer-control">
        <div class="row ">
          <div class="col-md-4">
            <ul>
              <li><b class="bold">Course</b></li>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>Business</li>
              <li>Marketing</li>
              <li>Engineering</li>

            </ul>

          </div>
          <div class="col-md-4">
            <ul>
              <li><b class="bold">Terms</b></li>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>Business</li>
              <li>Marketing</li>
              <li>Engineering</li>
            </ul>

          </div>
          <div class="col-md-4">
            <ul>
              <li><b class="bold">Useful Link</b></li>
              <li>Graphic Design</li>
              <li>Web Design</li>
              <li>Business</li>
              <li>Marketing</li>
              <li>Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row copyright">
      <p>Copyright © 2022 eGrow Plants | Powered by eGrow Plants</p>
    </div>
  </div>
</footer>


{/* <div class="more">
  <h1>more sections are coming...</h1>
 </div> */}


        </div>
    );
};

export default MainSections;