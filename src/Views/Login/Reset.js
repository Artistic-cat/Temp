import React from 'react';
import {Link} from 'react-router-dom';

import './Login-reset.css';

/*
 * @Author: Sristi
 *
 * Reset Password Page
 * This view has no implementations coded
 * Needs to have a OTP or Email verification part added to the onclick of login-button.
 *
 */

function Reset() {
    function resetFunction(){
        // Add the password reset request here
    }
    
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-block'>
                    <div className='login-logo'>LOGO</div>
                    <div className='login-form'>
                        <input className='input' type='text' placeholder='Username/Email ID'/>
                        <button className='login-button' type='submit' onClick={resetFunction} >Send Reset Link</button>
                    </div>
                    <Link to='/' className='login-link'>Login?</Link>
                </div>
            </div>
        </div>
    )
}

export default Reset;