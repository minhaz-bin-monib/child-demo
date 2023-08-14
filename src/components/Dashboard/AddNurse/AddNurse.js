import axios from 'axios';
import React, { useState } from 'react';
import Dashboard from "../../Dashboard";
import Maindashboard from '../MainDashboard/Maindashboard';
import "./Addnurse.css"

const AddNurse = () => {

    const [user, setUser] = useState({});
    const [imageURL, setImageURL] = useState(null)

    const handleAddUser = event =>{
        event.preventDefault();
        

        const eventData = {
            name: user.name,
            address: user.address,
            email: user.email,
            designation: user.designation,
            qualification: user.qualification,
            experience: user.experience,
            imageURL: imageURL
        }
        console.log(eventData);

        const url = 'http://localhost:5000/users';

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
                alert('User added successfully');
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


    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key','af4f9ea290484763ba729d92c02b9e6e');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

    }



    return (
        <div>
            <Maindashboard></Maindashboard>
            <div className='text-center w-50' style={{paddingLeft:'500px', paddingTop:'50px'}}>
            <h2 style={{color:'red'}}>Add nurse:</h2>

            <form onSubmit={handleAddUser}>
                <input className="form-control" onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input className="form-control" onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
                <br />
                <input className="form-control" onBlur={handleInputBlur}  type="email" name='email' id="" placeholder='email' required />
                <br />
                <input className="form-control" onBlur={handleInputBlur}  type="text" name='designation' id="" placeholder='designation' required />
                <br />
                <input className="form-control" onBlur={handleInputBlur}  type="text" name='qualification' id="" placeholder='qualification' required />
                <br />
                
                <input className="form-control" onBlur={handleInputBlur}  type="text" name='experience' id="" placeholder='experience' required />
                <br />
                
                <input  name="exampleRequired" type="file" onChange={handleImageUpload} />
                <br/>
                <button className='btn btn-danger mt-3'  type="submit">Add User</button>
            </form>
        </div>
        </div>
    );
};

export default AddNurse;