import './add_book.css';

const add_book = () => {
    return (
        
        <>
           <section className="add-book-card">
            <div className='content'>
                    {/* <Navbar /> */}
                    <div className="card-container">
                        <div className="left-side-card">
                            <div className="book-img-container">
                                <h1>Book Advisor</h1>
                                <img src="/src/imgs/SignUpLogo.png" alt="Book Advisor Logo" />
                            </div>
                        </div>
                        <div className="right-side-card">
                            <div className="book-details-container">
                                <h2>Create Account</h2>
                                <form id="book-details">
                                    <div className="detail-row">
                                        <div className="detail-group">
                                            <input type="text" id="first-name" name="first_name" required />
                                            <label htmlFor="first-name">First Name</label>
                                        </div>
                                        <div className="detail-group">
                                            <input type="text" id="last-name" name="last_name" required />
                                            <label htmlFor="last-name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="detail-group">
                                        <input type="email" id="email" name="email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="detail-group">
                                        <input type="password" id="password" name="password" required />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="detail-group">
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
 
export default add_book;