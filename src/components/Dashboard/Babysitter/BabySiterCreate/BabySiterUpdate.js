import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';
import '../../Dashboard-nav.css'
import './BabySiterCreate.css'
const BabySiterUpdate = () => {

    const users = useLoaderData();
    const { _id, name, address, email, number, city, state, language, experience, imageURL, certificate, description } = users;
    console.log(_id, name, address, email, imageURL);
    const [displayUsers, setDisplayUsers] = useState(users);

    const [user, setUser] = useState({});



    const handleUpdateUser = event => {
        event.preventDefault();

        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;


        const eventData = {
            name: user.name,
            address: user.address,
            email: user.email,
            number: user.number,
            city: user.city,
            state: user.state,
            language: user.language,
            currentDate: currentDate,
            imageURL: imageURL,

            experience: user.experience,
            certificate: user.certificate,
            description: user.description
        }
        console.log(eventData);

        const url = `http://localhost:5000/users/${_id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('User updated successfully');
                    event.target.reset();
                    // window.history.pushState('/dashboard/babysiter');
                    window.location.href = '/dashboard/babysiter'
                }
            })
    }


    const handleInputBlur = event => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);

    }
    return (

        <section className="manage_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 manage_service_main_div" >
                    <h2>Update BabySiter: </h2>
                    <form onSubmit={handleUpdateUser}>
                        <input className="form-control" onBlur={handleInputBlur} defaultValue={name} type="text" name='name' placeholder='name' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} defaultValue={address} type="text" name='address' placeholder='address' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} defaultValue={email} type="email" name='email' id="" placeholder='email' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={number} name='number' id="" placeholder='number' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={city} name='city' id="" placeholder='city' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={state} name='state' id="" placeholder='state' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={language} name='language' id="" placeholder='language' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={experience} name='experience' id="" placeholder='experience' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={certificate} name='certificate' id="" placeholder='certificate' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={description} name='description' id="" placeholder='description' />
                        <br />
                        <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={imageURL} name='imageURL' id="" placeholder='imageURL' />
                        <br />

                        <button className='btn btn-warning mt-3' type="submit">Update User</button>
                    </form>





                </div>

            </div>
        </section>
        // <div>
        //      <Maindashboard></Maindashboard> <span style={{display:'block', height:'60px', width:'1100px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
        //     <div className="container rightMainD" style={{
        //         width: '1000px', marginRight: '1px',
        //         marginLeft: '280px', marginTop: '15px'
        //     }}>

        //     </div>
        // </div>
    );
};

export default BabySiterUpdate;