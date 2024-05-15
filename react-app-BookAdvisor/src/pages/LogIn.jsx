import { Link, } from 'react-router-dom';
import Footer from '../HomePage-Components/Footer';
import Navbar from '../HomePage-Components/Navbar';
import React, { useState } from 'react';

import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            
        } catch (error) {
            console.error('Error:', error);
            
            alert('Login failed. Please try again.');
        }
    };

    return (
        <>
           <section className="sign-up-page">
            <div className='content'>
                    <div className="container">
                        <div className="left-column">
                            <div className="logo-container">
                                <h1>Book Advisor</h1>
                                <img src="/src/imgs/SignUpLogo.png" alt="Book Advisor Logo" />
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="signup-container">
                                <h2>Sign In</h2>
                                <form id="signupForm" onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <button type="submit">Log In</button>
                                </form>
                                <p className="login-link">Do not you have an account? <Link to="/SignUp">Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        
        </>
    );
}

export default LogIn;
