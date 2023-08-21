import React, { useState } from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';
import './Services.css'
import { useLoaderData } from 'react-router-dom';

const Services = () => {

    const services = useLoaderData();
    const [service, setService] = useState(services);

    return (







        <div>
            <Navbar></Navbar>
            <section className="main_section">

                <div className="container">
                    <h2>Our Given Services</h2>

                    <div className="row">
                        {service.map(
                            service =>
                                <>
                                <div className="col-md-6">
                                    <img src="" alt="" />
                                </div>
                                <div className="col-md-6">
                                    {service.service_name}
                                    {service.service_details}
                                </div></>
                        )

                        }
                    </div>




                    {/* <div className="main_div">
                        <h3>Care of Children</h3>
                        <p> The care of children in the center varies depending on the age group
                            This is a verified and trusted source
                            Kid's Health: Child Care Goto Source .
                            Services provided at centers that cater to infants and toddlers would
                            include feeding, changing diapers and playing with the babies. For older
                            children, services often include reading stories, starting early education,
                            playing with the children and meeting the children's basic needs while parents
                            are at work.</p>

                        <h3>Toys and Games</h3>
                        <p>Our Day Care include toys,
                            games and playing options, regardless of the ages of children.
                            The types of toys and games available will differ for each center.
                            For example, some centers might have a playground while others do not.
                            Playing is important for children's needs, so a center provides toys,
                            games and activities for children that are age appropriate.
                        </p>
                        <h3>Hands-On Learning
                        </h3>
                        <p> Students visiting different educational
                            facilities learn in a more hands-on and interactive
                            manner than they do in school. Science museums, for example,
                            often have displays that children can touch to help them understand
                            the material that is being covered. Zoos, nature centers and botanical
                            gardens show kids animal and plant life up close, and often have areas
                            where kids can touch displays, such as petting zoos and interactive
                            computer programs.</p>

                        <h3>Varieties of Field Trips</h3>
                        <p>Field trips give children a welcome break in routine.
                            Kids can look forward to and prepare for the field trip for several days or weeks

                            This is a verified and trusted source

                            University of Florida IFAS Extension: Enhancing Natural Resource Programs with Field Trips
                            Goto Source
                            . Then, they get to spend the day in a different learning
                            environment and can complete a lesson on the topic covered
                            after the trip is over. Learning in assorted ways can appeal
                            to varied learning styles, helping children to succeed whether
                            they are visual, auditory or kinetic learners.
                        </p>

                        <p className='text-center'><button className='btn btn-danger  apply_now_button'>Apply Now</button></p>
                    </div> */}



                </div>








            </section>


            <Footer></Footer>
        </div>
    );
};

export default Services;