import React, { createContext, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import app from '../firebase/firebase.init';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../contexts/UserContext';

export const EmailContext = createContext();

const auth = getAuth(app);

const LoginBootstrap = ({children}) => {

    const [success, setSuccess] =useState(false)
    const {signIn} = useContext(AuthContext);
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password).then(result => {
            const user = result.user;
            console.log(user);
           
            setSuccess(true);
        })
        .catch(error =>{
            console.log('error',error)
        })


    }

    return (

        
        <div className='w-50 mx-auto'>
            
            <h3 className='text-primary'>Please Login!!</h3>

            <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="formGroupExampleInput" className="form-label">Enter Email</label>
                <input type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" required/>
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Enter Password</label>
                <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your Password" required />
                
            </div> 
            {success && <Navigate to="/dashboard"></Navigate> }
            {!success && <p className='text-danger'>Password is wrong</p> }
            <button className='btn btn-primary' type='submit'>Login</button>
            </form>

        

            <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        </div>
    );
};

export default LoginBootstrap;