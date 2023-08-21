import React, { useState } from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';
import axios from 'axios';
import '..//..//Dashboard-nav.css';
import './BabySiterCreate.css'
// Mehedi 
// Minhaz
// Mehedi 1
const BabySiterCreate = () => {

    const [user, setUser] = useState({});
    const [imageURL, setImageURL] = useState(null)

    const handleAddUser = event => {
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

        const url = 'http://localhost:5000/users';

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    window.location.href = '/dashboard/babysiter'
                    alert('Babysitter added successfully');
                    event.target.reset();
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


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'af4f9ea290484763ba729d92c02b9e6e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
                window.history.push('/dashboard/babysiter');
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <section className="add_babysitter_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 add_babysitter_main_div" >
                    <h2>Add BabySiter</h2>
                    <form className='add_babysitter_form' onSubmit={handleAddUser}>
                        <div className="row">
                            <div className="col-md-5 first_col">
                                <h4 className='pb-2'>Personal Info: </h4>
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="email" name='email' id="" placeholder='email' required />

                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="number" name='number' id="" placeholder='number' required />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='city' id="" placeholder='city' required />

                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='state' id="" placeholder='state' required />
                                <br />
                                
                                
                                
                                
                                <label htmlFor="">Profile Picture</label>
                                <input placeholder='profile picture' name="exampleRequired" type="file" onChange={handleImageUpload} />
                                <br />
                            </div>
                            <div className="col-md-5 second_col">
                                <h4 className='pb-2'>Professional Info: </h4>
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='language' id="" placeholder='language' required />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='experience' id="" placeholder='experience' />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} type="text" name='certificate' id="" placeholder='certificate' required />
                                <br />
                                <textarea  className="form-control" rows="6" onBlur={handleInputBlur} type="text" name='description' placeholder='description(if any)' required />
                                <br />
                                
                                <button className='btn btn-danger mt-3' type="submit">Add</button>

                            </div>
                        </div>
                    </form>





                </div>

            </div>
        </section>


        //         <div>
        //              <Maindashboard></Maindashboard> <span style={{display:'block', height:'60px', width:'1100px', backgroundColor:'ghostwhite',marginLeft:'256px'}}></span>
        //             <div className="container rightMainD" style={{
        //                 width: '1000px', marginRight: '1px',
        //                 marginLeft: '280px', marginTop: '15px'
        //             }}>
        //                 <h2>Add BabySiter</h2>
        // <form onSubmit={handleAddUser}>
        //                 <input className="form-control" onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
        //                 <br />
        //                 <input className="form-control" onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
        //                 <br />
        //                 <input className="form-control" onBlur={handleInputBlur}  type="email" name='email' id="" placeholder='email' required />
        //                 <br />
        //                 <input className="form-control" onBlur={handleInputBlur}  type="text" name='designation' id="" placeholder='designation' required />
        //                 <br />
        //                 <input className="form-control" onBlur={handleInputBlur}  type="text" name='qualification' id="" placeholder='qualification' required />
        //                 <br />

        //                 <input className="form-control" onBlur={handleInputBlur}  type="text" name='experience' id="" placeholder='experience' required />
        //                 <br />

        //                 <input  name="exampleRequired" type="file" onChange={handleImageUpload} />
        //                 <br/>
        //                 <button className='btn btn-danger mt-3'  type="submit">Add</button>
        //             </form>
        //             </div>
        //         </div>
    );
};

export default BabySiterCreate;