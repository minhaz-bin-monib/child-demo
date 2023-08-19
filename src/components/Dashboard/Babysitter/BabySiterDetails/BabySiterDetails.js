import React from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';
import { Card, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BabySiterDetails = () => {

    const users = useLoaderData();
    const { _id, name, address, email, imageURL,qualification } = users;
    console.log(_id, name, address, email, imageURL);
    return (
        <div>
            <Maindashboard></Maindashboard> <span style={{ display: 'block', height: '60px', width: '1100px', backgroundColor: 'ghostwhite', marginLeft: '256px' }}></span>
            <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h2>Details BabySiter</h2>
                {/* Loop on data  */}
                <Card className='cardDesing blue' style={{width:'450px'}}>
                    <Card.Body style={{width:'30rem', display:'flex'} } className='row'>

                        <div className='col-md-4'>
                            <img src={imageURL} className='img-fluid' alt="" />
                        </div>
                        <div  className='col-md-8'>
                            <h5 className="card-title">Name: {name}</h5>
                            <p className="card-text">Address: {address}</p>
                            <p className="card-text">Qualification: {qualification}</p>
                            <p className="card-text">Email: {email}</p>
                        </div>

                    </Card.Body>
                </Card>


            </div>
        </div>
    );
};

export default BabySiterDetails;