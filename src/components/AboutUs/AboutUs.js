import React, { useState } from 'react';
import Footer from '../../layout/Footer/Footer';

import './AboutUs.css'
import Navbar from '../../layout/Navbar/Navbar';
import { useLoaderData } from 'react-router-dom';

const AboutUs = () => {
    const aboutUsPage = useLoaderData();
    const [aboutUs, setAboutUs] = useState(aboutUsPage);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1>handleImageUpload</h1>

                {
                     aboutUs.map(
                        about => 
                       <>
                        <h1>{about.post_title}</h1>
                        <p>{about.post_topic}</p>
                       </>

                        
                        )
                }
            </div>



            <Footer></Footer>
        </div>
    );
};

export default AboutUs;