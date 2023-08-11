import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const GuardianLogin = () => {
    return (
        <div className='w-50 mx-auto mt-5'>

            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>



                <Button variant="primary" type="submit">
                 <a style={{listStyle:'none', color:'white'}} href="http://localhost:3000/payment">Login</a>
                </Button>
            </Form>

        </div>
    );
};

export default GuardianLogin;