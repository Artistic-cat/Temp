import React, {useState} from 'react';
import './Login.css';
//import {Link} from 'react-router-dom';

function Login() {

    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');

    const logIn = e => {
        e.preventDefault();
        //add node functionality here
    }

    return(
        <div className='login'>
            <div className='login-block'>
                <div className='login-logo'>LOGO</div>
                <div className='login-form'>
                    <input className='input' type='text' placeholder='Username/Email ID' value={email} onChange={e => setEmail(e.target.value)} />
                    <input className='input' type='password' placeholder='Password' value={password} onChange={e=> setPassword(e.target.value)} />
                    <button className='login-button' type='submit' onClick={logIn} >Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Login;