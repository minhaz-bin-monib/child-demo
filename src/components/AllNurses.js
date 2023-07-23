import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import NurseDetails from './NurseDetails';
import { Button, Card } from 'react-bootstrap';


const AllNurses = () => {



    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);



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
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayUsers.filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }

                });
        }
    }

    return (

        <div >
            <h1>Total Nurses: {displayUsers.length}</h1>
            <h2>Nurses List:</h2>


            <div className='row' style={{width:'90%', paddingLeft:'100px'}}>
                {
                    displayUsers.map(
                        user =>
                            <div  className='col-md-4' >
                                <p key={user._id}>
                                    {/* <h3>Nurse Name:  {user.name}</h3>
                                    <h3>Nurse Email: {user.email}</h3>
                                    <button className='btn btn-danger' onClick={() => handleDelete(user)}>Delete</button> */}

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={user.imageURL} />
                                        <Card.Body className='text-center'>
                                            <Card.Title>Nurse Name:  {user.name}</Card.Title>
                                            <Card.Text>
                                                She is a top class nurse from our Day Care. 
                                                <p><b>Nurse Email: {user.email}</b></p>
                                            </Card.Text>
                                            <Button variant="danger" onClick={() => handleDelete(user)}>Delete</Button>
                                        </Card.Body>
                                    </Card>

                                </p>

                            </div>

                    )




                }




            </div>
        </div>
    );
};

export default AllNurses;