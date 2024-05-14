import './SignUp.css';
import Navbar from '../HomePage-Components/Navbar';
import Footer from  '../HomePage-Components/Footer';
import {ref, set } from "firebase/database";
import database from '../fireBaseConfig';
import { Link } from 'react-router-dom';

import React, { useState } from 'react';

const SignUp = () => {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [passconfirm, setpassconfirm] = useState('');

    const handelsubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (password !== passconfirm) {
            alert("Passwords do not match");
            return;
        }

        // Form data to be sent
        const formData = {
            first_name: Fname,
            last_name: Lname,
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:5173/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            alert('Account created successfully!');
            // Optionally, redirect to another page after successful signup
            // window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error:', error);
            alert('Signup failed. Please try again.');
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
                                <h2>Create Account</h2>
                                <form id="signupForm" onSubmit={handelsubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="text" id="first-name" name="first_name" value={Fname} onChange={(e)=> setFname(e.target.value)} required />
                                            <label htmlFor="first-name">First Name</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="last-name" name="last_name" value={Lname} onChange={(e)=> setLname(e.target.value)}required />
                                            <label htmlFor="last-name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" value={email} onChange={(e)=> setemail(e.target.value)} required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" value={password} onChange={(e)=> setpassword(e.target.value)}required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="confirm-password" name="confirm_password" value={passconfirm} onChange={(e)=> setpassconfirm(e.target.value)} required />
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                    </div>
                                    <button type="submit" >Create Account</button>
                                </form>
                                <p className="login-link">Already have an account? <Link to="/LogIn">Login</Link></p>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        </>
    );
};

export default SignUp;
