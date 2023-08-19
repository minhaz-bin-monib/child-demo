import React, { useState } from 'react';
import Maindashboard from '../MainDashboard/Maindashboard';
import { useLoaderData } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const SubscribeControll = () => {
    const subscribes = useLoaderData();
    const [subscribers, setSubscribers] = useState(subscribes);
    console.log(subscribers);


    return (
        <div>
            <Maindashboard></Maindashboard> <span style={{ display: 'block', height: '60px', width: '1100px', backgroundColor: 'ghostwhite', marginLeft: '256px' }}></span>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h3 className='mb-2'>All Subscribes: </h3>
                {/* Loop on data  */}
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Email</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            subscribers.map(
                                user =>


                                    <tr>

                                        <td>{user.subscribe_email}</td>
                                        <td>{user.currentDate}</td>



                                    </tr>


                            )



                        }








                    </tbody>
                </Table>


            </div>
        </div>
    );
};

export default SubscribeControll;