import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Maindashboard from '../../MainDashboard/Maindashboard';

const BabySiterUpdate = () => {
    
    const users = useLoaderData();
    const {_id, name, address, email, imageURL} = users;
    console.log(_id, name, address, email, imageURL);
    const [displayUsers, setDisplayUsers] = useState(users);

    const [user, setUser] = useState({});

    

    const handleUpdateUser = event =>{
        event.preventDefault();
        

        const eventData = {
            name: user.name,
            address: user.address,
            email: user.email,
            imageURL: user.imageURL
        }
        console.log(eventData);

        const url = `http://localhost:5000/users/${_id}`;

        fetch(url,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('User updated successfully');
                event.target.reset();
                window.history.push('/dashboard/babysiter');
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
        <div>
             <Maindashboard></Maindashboard>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h2>Update BabySiter</h2>
                  <form onSubmit={handleUpdateUser}>
                                <input className="form-control" onBlur={handleInputBlur} defaultValue={name} type="text" name='name' placeholder='name' />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} defaultValue={address} type="text" name='address' placeholder='address' />
                                <br />
                                <input className="form-control" onBlur={handleInputBlur} defaultValue={email} type="email" name='email' id="" placeholder='email' />
                                <br />

                                <input className="form-control" onBlur={handleInputBlur} type="text" defaultValue={imageURL} name='imageURL' id="" placeholder='imageURL'/>
                                <br />
                                <button className='btn btn-warning mt-3' type="submit">Update User</button>
                            </form>

            </div>
        </div>
    );
};

export default BabySiterUpdate;