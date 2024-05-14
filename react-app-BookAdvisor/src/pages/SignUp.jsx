import './SignUp.css';
// import Navbar from '../HomePage-Components/Navbar';
// import Footer from  '../HomePage-Components/Footer';
const SignUp = () => {
    return (
        <>
           <section className="sign-up-page">
            <div className='content'>
                    {/* <Navbar /> */}
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
                                <form id="signupForm">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <input type="text" id="first-name" name="first_name" required />
                                            <label htmlFor="first-name">First Name</label>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" id="last-name" name="last_name" required />
                                            <label htmlFor="last-name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="confirm-password" name="confirm_password" required />
                                        <label htmlFor="confirm-password">Confirm Password</label>
                                    </div>
                                    <button type="submit">Create Account</button>
                                </form>
                                <p className="login-link">Already have an account? <a href="/LogIn">Login</a></p>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <Footer /> */}
        </section>
        
        </>
    );
}

export default SignUp;
