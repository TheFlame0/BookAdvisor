import './add_book.css';

const add_book = () => {
    return (
        
        <>
        <div className="layer-book"></div>
        <section className="add-book-card">
            <div className='content'>
                    <div className="card-container">
                        <div className="left-side-card">
                            <div className="book-img-container">
                                <img src="/src/imgs/Book2.jpeg" alt="Book Advisor Logo" />
                                <button id='add-button' type="submit">Create Account</button>
                            </div>
                        </div>
                        <div className="right-side-card">
                            <div className="book-details-container">
                                {/* <h2>book details</h2> */}
                                <form id="book-details">
                                    <div className="detail-group">
                                        <p id="Title" >  The Science of Selling             </p>
                                        <label htmlFor="Title">Title</label>
                                    </div>
                                    <div className="detail-group">
                                        <p id="Author" >     David Hoffeld                   </p>
                                        <label htmlFor="Author">Author’s</label>
                                    </div>
                                    <div className="detail-group">
                                        <p id="Description">        Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.             </p>
                                        <label htmlFor="Description">Description</label>
                                    </div>
                                    <div className="detail-row">
                                        <div className="detail-group">
                                            <p id="Genres">       History - Data - English              </p>
                                            <label htmlFor="Genres">Genres</label>
                                        </div>
                                        <div className="detail-group">
                                            <p id="Location" >                 </p>
                                            <label htmlFor="Location">Location</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        
        
        </>

     );
}
 
export default add_book;