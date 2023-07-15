import React, { useState } from 'react';

const AddNurse = () => {

    const [user, setUser] = useState({});

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
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



    return (
        <div className='text-center w-50' style={{paddingLeft:'500px', paddingTop:'50px'}}>
            <h2 style={{color:'red'}}>Add nurse:</h2>

            <form onSubmit={handleAddUser}>
                <input className="form-control" onBlur={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input className="form-control" onBlur={handleInputBlur} type="text" name='address' placeholder='address' required />
                <br />
                <input className="form-control" onBlur={handleInputBlur}  type="email" name='email' id="" placeholder='email' required />
                <br />
                <button className='btn btn-danger'  type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddNurse;