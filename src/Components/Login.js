import React, {useState} from 'react';
import '../Components/Login.css';
//import {Link} from 'react-router-dom';

function Login() {
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');

    const logIn = e => {
        e.preventDefault();
        //add node (express is fine na?) functionality here
    }

    return(
        <div className='login'>
            <div className='background-image'></div>
            <div className='login-block'>
                <div className='logo'>LOGO</div>
                <form className='login-form'>
                    <input className='input' type='text' placeholder='Username/Email ID' value={email} onChange={e => setEmail(e.target.value)} />
                    <input className='input' type='password' placeholder='Password' value={password} onChange={e=> setPassword(e.target.value)} />
                    <button class='login-button' type='submit' onClick={logIn} >LOG IN</button>
                </form>
                <div className='login-block-background'></div>
            </div>
            
        </div>
    )
}

export default Login;