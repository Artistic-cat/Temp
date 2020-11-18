import React from 'react';
import './Login-reset.css';
import {Link} from 'react-router-dom';

function Reset() {
    return(
        <div className='login'>
            <div className='login-container'>
                <div className='login-block'>
                    <div className='login-logo'>LOGO</div>
                    <div className='login-form'>
                        <input className='input' type='text' placeholder='Username/Email ID' />
                        <button className='login-button' type='submit'>Send Reset Link</button>
                    </div>
                    <Link to='/' className='login-link'>Login?</Link>
                </div>
            </div>
        </div>
    )
}

export default Reset;