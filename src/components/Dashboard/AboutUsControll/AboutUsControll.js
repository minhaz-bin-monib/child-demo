import React, { useState } from 'react';
import Maindashboard from '../MainDashboard/Maindashboard';
import "../Dashboard-nav.css";
import "./AboutUsControll.css";



const AboutUsControll = () => {



    const [user, setUser] = useState({});


    const handleAddUser = event =>{
        event.preventDefault();
        

        const eventData = {
            post_title: user.post_title,
            post_topic: user.post_topic,
            
        }
        console.log(eventData);

        const url = 'http://localhost:5000/aboutUs';

        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Post Updated successfully');
                event.target.reset();
            }
        })
    }



    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
        
    }












    return (
        <section className="about_us_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 about_us_main_div" >
                    
                        
                    <form onSubmit={handleAddUser} className='form_control'>
                        <h2 className='mb-5 mt-3'>Add New Post </h2>
                        <input className="form-control" onBlur={handleInputBlur} type="text" name='post_title' placeholder='Post Title' required />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" name='post_topic' placeholder='Post Topic' required />

                        <br />
                        <button className='btn btn-danger mt-3' type="submit">Add</button>
                    </form>

                </div>

            </div>
        </section>
    );
};

export default AboutUsControll;