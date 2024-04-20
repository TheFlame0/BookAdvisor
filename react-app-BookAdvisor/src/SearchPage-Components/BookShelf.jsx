

import Book from './Book.jsx';
import './BookShelf.css';
import NavButton from './NavButton';
const BookShelf = () => {
    return (
        <article className="article">

                <form className="search-bar">
                <select name="filters" id="filters">
                <option value="" disabled selected hidden>filters</option>
                    <option value="name">by name</option>
                 <option value="author">by author</option>
                <option value="genre">by genre</option>
                </select>
                <select name="sort" id="sort">
                <option value="" disabled selected hidden>sort by</option>
                    <option value="name">latest</option>
                 <option value="author">most populer</option>
                <option value="genre">by genre</option>
                </select>
                    
                </form> 

            <div className="bookshelf">
                <div className="section">
                    <h2><b> Latest Books added </b></h2>
                </div>

                <div className="book-container">
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />


 
                </div>

                <div className="section">
                    <h2><b> Recommended Books </b></h2>
                </div>

                <div className="book-container">
                <NavButton imageSrc={"/src/imgs/left-arrow.png"} altText={"Next Book Button"} />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />    
                                    <NavButton imageSrc={"/src/imgs/right-arrow.png"} altText={"Next Book Button"} />
               </div>

                <div className="section">
                    <h2><b> New Books </b></h2>
                </div>

                <div className="book-container">
                      
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />  
                                    {/* <NavButton imageSrc={"/src/imgs/right-arrow.png"} altText={"Next Book Button"} /> */}

                                    
                </div>
            </div>

    </article>

    );
}
export default BookShelf;
