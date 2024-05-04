import Footer from '../HomePage-Components/Footer';
import Navbar from '../HomePage-Components/Navbar';
import './LogIn.css';
const LogIn = () => {
    return (
        <>
           <section className="sign-up-page">
            <div className='content'>
                    <Navbar />
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
                                <form id="signupForm">
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" id="password" name="password" required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <button type="submit">Log In</button>
                                </form>
                                <p className="login-link">Do not you have an account? <a href="/SignUp">Sign Up</a></p>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </section>
        
        </>
    );
}

export default LogIn;
