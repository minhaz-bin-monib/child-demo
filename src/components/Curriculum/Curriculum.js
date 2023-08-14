import React from 'react';
import Navbar from '../../layout/Navbar/Navbar';
import Footer from '../../layout/Footer/Footer';
import curriculumPic from './sample-lesson-plan-1024x727.png'


import './Curriculum.css'
import { Link } from 'react-router-dom';

const Curriculum = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="curriculum_main_section container">
                <div className="curriculum_main_div row">
                    <h1>Our Curriculum</h1>

                    <div>
                        <h2>Infants (0-12 months):</h2>
                        <br />
                        <b>Focus Areas:</b>
                        <br />
                        <ul>
                            <li>Physical Development: Encourage motor skill development through gentle exercises and tummy time.</li>
                            <li>Sensory Stimulation: Provide a variety of textures, colors, and sounds to engage their senses.</li>
                            <li>Attachment and Bonding: Create a nurturing environment to build secure attachments with caregivers.</li>
                            <li>Sleep and Feeding Schedule: Follow individualized routines for sleep and feeding.</li>
                            <li>Communication: Respond to coos and babbles, encourage simple interactions.</li>
                        </ul>
                        <br />
                        <b>Sample Activities:</b>
                        <br />
                        <li>Tummy Time Play: Engage infants in tummy time to strengthen neck and upper body muscles.</li>
                        <li>Sensory Play: Introduce soft fabrics, rattles, and mirrors to stimulate sensory development.</li>
                        <li>Nursery Rhymes: Sing soothing songs and rhymes during diaper changes or naptime.</li>
                        <li> Baby Massage: Gently massage infants to promote relaxation and body awareness.</li>
                        <li> Cuddle Time: Provide cuddles, hugs, and nurturing interactions throughout the day.</li>
                    </div>

                    <div>
                        <br />
                        <h2>Toddlers (1-3 years):</h2>
                        <br />
                        <b>Focus Areas:</b>
                        <br />
                        Language Development: Foster vocabulary growth through conversations, storytelling, and reading.
                        Social Interaction: Encourage sharing, taking turns, and playing cooperatively.
                        Motor Skills: Provide activities that enhance gross and fine motor skills.
                        Exploration and Creativity: Offer open-ended art, music, and sensory play opportunities.
                        Routine and Independence: Establish consistent routines and promote self-help skills.
                        <br />
                        <b>Sample Activities:</b>
                        <br />
                        <li>  
                            Story Circle: Read engaging stories and encourage toddlers to discuss the characters and events.
                        </li>
                        
                        <li>  Play Dough Play: Provide play dough for sculpting and fine motor skill development.
                        </li>
                        
                        <li>   Music and Movement: Dance to music, play simple instruments, and engage in action songs.
                        </li>

                        <li>
                            Outdoor Exploration: Take short nature walks, explore textures, and observe plants and insects.
                        </li> 

                        <li> Dress-Up Corner: Offer dress-up clothes and props for imaginative play and role modeling.
                        </li>
                    </div>

                    <div>
                        <br />
                        <h2>Preschoolers (3-5 years):</h2>
                        <br />
                        <b>Focus Areas:</b>
                        <br />

                        <li>Early Literacy and Numeracy: Introduce letters, sounds, basic math concepts, and pre-writing skills.</li>

                        <li>  Problem Solving: Engage in puzzles, games, and activities that promote critical thinking.
                        </li> 

                        <li> Social Skills: Encourage empathy, cooperation, and conflict resolution in group settings.
                        </li> 

                        <li> Imaginative Play: Provide materials for elaborate pretend play scenarios.
                        </li>
                        
                         <li>  Physical Activity: Organize games and exercises that enhance coordination and strength.
                        </li>

                        <br />
                        <b>Sample Activities:</b>
                        <br />

                        <li> Alphabet Exploration: Introduce a letter of the week with related crafts, stories, and activities.
                        </li>  

                         <li>Science Exploration: Conduct simple experiments and nature observations to foster curiosity.

                        </li>

                        <li>Building Blocks: Provide various building materials to encourage creativity and spatial skills.
                        </li>

                        <li>Group Games: Play cooperative games like "Duck, Duck, Goose" to develop social skills.
                        </li>


                        <li> Show and Tell: Allow children to bring and discuss items that are important to them.
                        </li>

                        <li>Field Trips: Organize visits to local museums, parks, or community places to expand learning.
                        </li>

                        <li> Remember that this curriculum should be flexible and adaptable to the needs and interests of each child. Regular observations and communication with parents can help tailor the activities to suit individual children's development and preferences.
                        </li>
                    </div>

                    <img src={curriculumPic} className='img-fluid' alt="" />

                    <Link to='/admission'><p className='text-center'><button className='btn btn-danger  curriculum_button'>Apply Now</button></p></Link>
                </div>

            </section>





            <Footer></Footer>
        </div>
    );
};

export default Curriculum;