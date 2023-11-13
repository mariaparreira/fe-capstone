import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Sign_Up.css'

import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className="container">
        <form className="form">
            <div className="signup-title" >
                <h1>Sign Up</h1>
            </div>
            <div className="login-text">
                Already a member? <span><Link to="/login" className="login-nav"> Login</Link></span>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="role"><b>Role</b></label>
                <select className="form-select" required>
                    <option selected>Select role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="name"><b>Name</b></label>
                <input className="form-control" type="text" name="name" id="name" placeholder="Enter your name" aria-describedby="helpId" required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="phone"><b>Phone Number</b></label>
                <input className="form-control" type="tel" name="phone" id="phone" placeholder="Enter your phone number" aria-describedby="helpId" required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="email"><b>Email</b></label>
                <input className="form-control" type="email" name="email" id="email" placeholder="Enter your email" aria-describedby="helpId" required />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="password"><b>Password</b></label>
                <input className="form-control" type="password" name="password" id="password" placeholder="Enter your password" aria-describedby="helpId" required />
            </div>
            <div className="btn-group">
                <button type="submit" className="btnSubmit" id="submit">Submit</button>
            </div>
            <div className="btn-group">
                <button type="submit" className="btnReset" id="reset">Reset</button>
            </div>
        </form>
    </div>
    );
};

export default SignUp;