import React from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';
import { Card, Table } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const BabySiterDetails = () => {

    const users = useLoaderData();
    const {_id, name, address, email, imageURL} = users;
    console.log(_id, name, address, email, imageURL);
    return (
        <div>
               <Maindashboard></Maindashboard>
             <div className="container rightMainD" style={{
                width: '1000px', marginRight: '1px',
                marginLeft: '280px', marginTop: '15px'
            }}>
                <h2>Details BabySiter</h2>
                {/* Loop on data  */}
                <Card className='cardDesing blue'>
                        <Card.Body>
                        
                        <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">Address: {address}</p>
          <p className="card-text">Email: {email}</p>
         
                        </Card.Body>
                    </Card>


            </div>
        </div>
    );
};

export default BabySiterDetails;