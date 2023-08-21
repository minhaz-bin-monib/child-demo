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
            <Maindashboard></Maindashboard> <span className='dashboard_nav'></span>

            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h3 className='mb-2'>All Subscribes: </h3>
                {/* Loop on data  */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Email</th>
                            <th>Date</th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            subscribers.map(
                                (user, index) =>


                                    <tr>
                                        <td>{index+1}</td>
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