import React from 'react';
import Footer from '../../../layout/Footer/Footer';
import Navbar from '../../../layout/Navbar/Navbar';
import './Preschool.css'
import { Link } from 'react-router-dom';

const Preschool = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="main_section container">
                <div className="row">
                    <div className='main_div'>
                        <h2 className='mt-5  text-center'>Preschool Program (2-3 year old)</h2>

                        <h3 className='mb-3 mt-3'>Preschool Daycare: Details of Little Scholars Program</h3>

                        <p className=' mt-3'>Every mother and father wants to see their child as a healthy, well-mannered, sociable person. When parents look for Preschool daycare near me, they choose Little Scholars because of several reasons:</p>
                        <ul className='mb-3 mt-3'>
                            <li>proper care of qualified personnel and educators in love with children since their first days;</li>
                            <li>specially created play areas for crawling, learning to walk, and improving motor skills;</li>
                            <li>healthy food and diapers included;</li>
                            <li>small groups up to eight kids for socialization and communication;</li>
                            <li>various creative activities and learning through play during a full-day;</li>
                            <li>close cooperation with parents and detailed information about the daily schedule;</li>
                            <li>flexible working hours and a payment system.</li>

                        </ul>
                        <p>
                            We provide comfortable conditions that allow you to enroll children from the first week of life to one year old. Preschools study in small groups so everybody gets enough attention and care. They can stay in the nursery for a full day and you have no doubts your baby is safe!
                            <br />
                            <br />
                            If you worry about the newborn daycare cost near me, consider our Universal program. It allows you to attend the daycare for the city-covered cost. Contact our managers to find out more!
                        </p>


                        <h3 className='mb-3 mt-3'>Preschool classroom</h3>
                        <p>
                            In our daycare, we try to prepare children not only for school but for life in society. We give them freedom and teach them to get along with each other from an early age. The environment for Preschools is vital in this process. So, we pay attention to all the details around your baby.
                            <br />
                            <br />
                            Be careful looking for a “day care nursery near me” for kids’ growth and development. It is a second home for an Preschool, it should be warm and cozy. We keep all the most important recommendations at Little Scholars:
                        </p>

                        <ol className='mb-3 mt-3'>
                            <li>You won’t see intense red color which causes aggression, we used different shades of green to cheer up the baby.</li>
                            <li>We painted the playing area with blue, yellow, orange, and green tones to boost activity.</li>
                            <li>Babies will grow in a fairy tale interior to have a feeling of joy and develop imagination</li>
                            <li>The furniture is made of comfortable, durable, and eco-friendly materials to keep Preschools safe.</li>
                            <li>We equip the playroom with all kinds of attractions to train babies’ intelligence.</li>


                        </ol>



                        <h3>Preschool curriculum</h3>
                        <p>Our daycare is an environment for a child to grow and develop with attention and professional care, studying according to unique programs. Little Scholars nursery will be the best Preschool care near me when you look for such a place!
                            <br />
                            <p>The child has just been born but in a few months, his motor skills will reach a high level of development. Learning with us, your baby will surely please parents with achievements. By their first birthday, the Preschool will be able to:</p>

                            control the movements of the hands and legs;
                            change body positions and crawl;
                            walk and then run and jump;
                            play with toys and distinguish them;
                            communicate and interact with other children;
                            talk a little and create new words!
                            We carefully control the development of the baby in the first year of life together with parents. Our caregivers have the same desire to see the first steps and smile of every baby. We will support you and tell you everything about all new skills that are signals about the growth of the child.

                            Our advice is to arrange your baby’s routine at home in such a way that he feels more comfortable in the daycare. Preparing for this period and following the schedule makes the adaptation process easier.</p>

                        <h3>Classroom activities</h3>

                        <p>In the first year of life, babies learn fundamental things like interaction with the world and sharing emotions. The creative teachers in the baby childcare near me that you are trying to find will help with it!
                            <br />
                            When you feel confused about what to do with an Preschool who is very energetic, we designed some funny and useful activities!
                            <br />
                            Babies are playing with different toys while learning movements! It provides the development of logic and intuition.
                            Preschools enjoy playing with mazes and blocks. When kids are interested in the difficulties, they practice problem-solving skills. <br />
                            We repeat the names of everybody thus improving memory and reactions! The caregivers are talking with a baby like an adult and teach to express emotions.
                            Do you have any doubts you found that newborn baby daycare near me? Just make a virtual tour and make sure to start your way with us!</p>



                            <Link to='/enroll'><p className='text-center'><button className='btn btn-danger  apply_now_button'>Apply Now</button></p></Link>










                    </div>




                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Preschool;