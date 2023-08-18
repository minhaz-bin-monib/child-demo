import React from 'react';
import './MainSections.css'
import bannerImg from './HmImage/banner.jpg'

import Particle from '../Particle';
import Navbar from '../../layout/Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../../layout/Footer/Footer';
import nurses from "./HmImage/nurses.png"
import { Link } from 'react-router-dom';
import facalitiPic from './HmImage/Childcare-Renovation-Infographic-1-980x1470.png (1).jpg'
import Subscribers from '../Subcribers/Subscribers';

const MainSections = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section class="banner-section">
        {/* <Particle></Particle> */}
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="banner-left">
                <h2>We Care <br /> Your Babies</h2>
                <p>We give supervision and care of infants and young children during the daytime, particularly so that their parents can hold jobs. </p>
                <Link to='/curriculum'><div class="btn btn-danger mt-3">Get this Plan</div></Link>
              </div>
            </div>

            {/* <div class="col-md-7">
              <div class="banner-right">
                <img src={bannerImg} class="img-fluid" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </section>





      <section class="Services-section" id="services">
        <div class="container">
          
          <div className="row">
          <h1>Our Services</h1>
          <div className='col-md-6'>
            <p>We give supervision and care of infants and young children during the daytime, particularly so that their parents can hold jobs. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores totam ab eius! Laborum.</p>
            <Link to='/services'><div class="btn btn-danger">See More</div></Link>
          </div>

          <div className='col-md-6'>
            <img src={nurses} alt="" />
          </div>
          </div>
        </div>
      </section>




    <section className="facilities_seciton">
    <div className="facilities_seciton_main_div container">
    <div className="row">
    <h1>Our facilities</h1>
    <img src={facalitiPic} alt="" />
    </div>
    </div>
    </section>




      


      <ContactUs></ContactUs>


      <Subscribers></Subscribers>

      <Footer></Footer>





      {/* <div class="more">
  <h1>more sections are coming...</h1>
 </div> */}


    </div>
  );
};

export default MainSections;