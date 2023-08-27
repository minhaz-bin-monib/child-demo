import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Maindashboard from '../../MainDashboard/Maindashboard';
import { Button, Form } from 'react-bootstrap';
import app from '../../../../firebase/firebase.init';
import { AuthContext } from '../../../../contexts/UserContext';


const auth = getAuth(app)

const PasswordChange = () => {
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
        <section className="add_service_main_section">
            <div className='row w-100'>
                <div className="col-md-2">
                    <Maindashboard></Maindashboard>
                    <span className='dashboard_nav'></span>
                </div>


                <div className="col-md-10 add_service_main_div" >
                    
                        
                <Form onSubmit={handleRegister} className='form_control'>
                    <h3 className='pt-3'>Change your password</h3>
                    
                    <br />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Rewrite Your Password</Form.Label>
                        <Form.Control type="password" name='rewritepass' placeholder="Password" required/>
                    </Form.Group>
                    <p className='text-danger'>{passwordError}</p>

                    {success && <p className='text-success'>Password Changed Successfully</p> }

                    <Button variant="primary" type="submit">
                        Change Password
                    </Button>
                </Form>

                </div>

            </div>
        </section>
    );
};

export default PasswordChange;