import React from 'react';

const Play = () => {
    return (
        <div>
            <h1>Play Program</h1>
            <h3 className='mt-5'>Curriculum:</h3>
            <div style={{display:'flex'}}>
                <div>
                    <p>
                        All of our Little Blessings locations are Christian-based and follow the Frog Street Curriculum. We believe that the combination of Christianity and Frog Street help create and environment of easy learning while also having fun. Frog Street is essential to the development and learning of kids all ages. Here's a link with more information about the Frog Street Curriculum: Frog Street Curriculum

                        Each child is considered an educator, bringing their prior knowledge into the classroom. They are encouraged to expand upon their understanding of different concepts through:

                        Center-based play instruction models. Students will engage in various planned activities with environmental changes to accommodate new content.
                        Center-based instructions and play will evolve, allowing children more complex levels of thoughts and interaction within their environment.
                        Students are encouraged to explore a concept, not memorize it. Project-Based Assessment: Teachers use the arts as a symbolic language through which the child can express their understanding.
                        Child-centered themes: The child's interests will help guide the teachers planning.
                        In our infant rooms we teach and follow basic sign language and communication built on infants cue. (a technique in understanding infants body language and cause/ effect relationships.)
                        Teachers, essentially researchers, pay careful attention to your child's interactions, observing and analyzing their ability to understand, comprehend and build upon a concept.</p>

                </div>
                <div>
                    <img src="https://sunshinehouse.com/media/sy0clqii/georgia-prek-c.jpg" alt="" />
                </div>
            </div>
            <button className='btn btn-danger'><a style={{listStyle:'none', color:'white'}} href="http://localhost:3000/payment">Go For Payment</a></button>
        </div>
    );
};

export default Play;