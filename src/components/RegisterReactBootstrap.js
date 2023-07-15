import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.init'
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';


const auth = getAuth(app)


const RegisterReactBootstrap = () => {

    const [passwordError, setPasswordError] = useState('');

    const[success,setSuccess] = useState(false);
    const {createUser} = useContext(AuthContext);


    const handleRegister=(event) =>{
       
        event.preventDefault();
        setSuccess(false)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setPasswordError('Please provide at least two uppercase');
            return;
        }

        if(password.length < 6){
            setPasswordError('Please Provide at least 6 character');
            return;
        }

        if(!/(?=.*[!@#$&*])/.test(password)){
            setPasswordError('Please provide at least one special character');
            return;
        }
        setPasswordError('');

        createUser( email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setSuccess(true);
            form.reset();
            
        })
        .catch(error =>{
            console.error('error', error);
            setPasswordError(error.message)
        })
    }


    return (
        <div className='w-50 mx-auto mt-5'>

                <h3 className='text-primary'>Please Register !!!</h3>

                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    
                    <p className='text-danger'>{passwordError}</p>

                    {success && <p className='text-success'>User Created Successfully</p> }

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <p><small>New to this website? Please <Link to='/Login'>Log in</Link></small></p>
            </div>
    );
};

export default RegisterReactBootstrap;