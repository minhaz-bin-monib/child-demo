import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NurseDetails from './NurseDetails';


const AllNurses = () => {

    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

   const userContext = createContext(displayUsers);

    const handleDelete = user => {

        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

        if (agree) {
            // console.log('deleting user with id: ', user._id);

            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    //console.log(data)
                    if(data.deletedCount >0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                
                });
        }
    }

    return (
    
        <div>
            <h1>Total Nurses: {displayUsers.length}</h1>
            <h2>Nurses List:</h2>
            

            <div >
                {
                    displayUsers.map(user => <div style={{border:'2px solid red', marginBottom:'5px'}}><p key={user._id}> 
                        <h3>Nurse Name:  {user.name}</h3> <h3>Nurse Email: {user.email}</h3> <button className='btn btn-danger' onClick={() => handleDelete(user)}>Delete</button>
 
                     </p></div> )
                }
               

                
                
            </div>
        </div>
    );
};

export default AllNurses;