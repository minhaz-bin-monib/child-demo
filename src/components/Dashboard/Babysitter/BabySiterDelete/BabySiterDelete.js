import React, { useState } from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BabySiterDelete = () => {


    const users = useLoaderData();
    const {_id, name, address, email, imageURL} = users;
    console.log(_id, name, address, email, imageURL);

    const handleDelete = user => {

        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

        if (agree) {
            

            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                   
                    window.location.href = '/dashboard/babysiter'

                });
        }
    }


    return (
        <div>
             <Maindashboard></Maindashboard>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>

            <h2>Delete BabySiter</h2>
            <div className='row' style={{width:'100%', paddingLeft:'400px'}}>
               
                  

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={imageURL} />
                                        <Card.Body className='text-center'>
                                            <Card.Title>Nurse Name:  {name}</Card.Title>
                                            <Card.Text>
                                                She is a top class nurse from our Day Care. 
                                                <p><b>Nurse Email: {email}</b></p>
                                            </Card.Text>
                                            <Button variant="danger" onClick={() => handleDelete(users)}>Delete</Button>
                                        </Card.Body>
                                    </Card>


            </div>

            </div>
        </div>
    );
};

export default BabySiterDelete;