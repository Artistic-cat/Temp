import React, {useState} from 'react';
import './Login-reset.css';
import {Link} from 'react-router-dom';
import axios from "axios";
import "../../App"
import Home from "../Home/Home";

// import Reset from './Reset';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = async (e) => {
        e.preventDefault();
        //add node functionality here
        const request = new FormData();
        request.append("email", email);
        request.append("password", password);

        try {
            await axios.post(
                // get the ip of the backend server and append path to call login
                global.config.backend_ip + "/login",
                // add the request to be sent to the API
                request,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            ).then((response) => {
                new Home(response.data.apiResponse.data[0]);
                window.location = "/home";
            })
        } catch (error) {
            console.log(error.response);
            alert("An error occurred, please try again.");
            console.log({error});
        }
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-block'>
                    <div className='login-logo'>LOGO</div>
                    <div className='login-form'>
                        <input className='input' type='text' placeholder='Username/Email ID' value={email}
                               onChange={e => setEmail(e.target.value)}/>
                        <input className='input' type='password' placeholder='Password' value={password}
                               onChange={e => setPassword(e.target.value)}/>
                        <button className='login-button' type='submit' onClick={logIn}>Log In</button>
                        {/* Temporary Login Link to home start*/}
                        <Link to='/home' className='reset-link'>Temp Login</Link>
                        {/* Temporary Login Link to home end*/}
                    </div>
                    <Link to='/reset' className='reset-link'>Forgot Password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;