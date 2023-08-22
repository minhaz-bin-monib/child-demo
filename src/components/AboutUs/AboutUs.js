import React, { useState } from 'react';
import Footer from '../../layout/Footer/Footer';

import './AboutUs.css'
import Navbar from '../../layout/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';

const AboutUs = () => {
    // const aboutUsPage = useLoaderData();
    // const {post_title, post_topic} = aboutUsPage;
    // const [aboutUs, setAboutUs] = useState(aboutUsPage);
    // console.log(aboutUs.post_title);
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <section class="Services-section" id="services">
        <div class="container">
          
          <div className="row">
          <h1>About US</h1>
          

          <div className='col-md-6'>
            <img src="https://health.clevelandclinic.org/wp-content/uploads/sites/3/2014/09/daycare-901208614-770x553-650x428.jpg" alt="" />
          </div>

          <div className='col-md-6'>
            <p>We provide daytime supervision and childcare for newborns and young children, especially so that their parents can work. Sit amet consectetur adipisicing elit lorem ipsum dolor. Dolores, repellat totam ab eius! Laborum.</p>
          </div>
          </div>
        </div>
      </section>

                {/* {
                     aboutUs.map(
                        about => 
                       <>
                        <h1>{about.post_title}</h1>
                        <p>{about.post_topic}</p>
                       </>

                        
                        )
                } */}
                 
            </div>



            <Footer></Footer>
        </div>
    );
};

export default AboutUs;