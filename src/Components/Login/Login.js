import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './Login.css';

const Login = () => {
    return(
        <div className="container">
            <form className="form">
                <div className="login-title" >
                    <h1>Login</h1>
                </div>
                <div className="signup-text">
                    Not a member? <span><Link to="/signup" className="signup-nav"> Sign up</Link></span>
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
                <div className="forgot-pass">
                    Forgot Password?
                </div>
            </form>
        </div>
    );
};

export default Login;