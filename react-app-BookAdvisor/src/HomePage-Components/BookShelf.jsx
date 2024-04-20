

import Book from './Book';
import './BookShelf.css';
import NavButton from './NavButton';
const BookShelf = () => {
    return (
        <article className="article">

                <form className="search-bar">
                    {/* <input id="searchbar" type="text" placeholder="  Search books..." />
                    <button type="submit">
                        <img id="buttonImage" src="/src/imgs/search-interface-symbol.png" alt="Search Button"/>
                    </button> */}
                </form> 

            <div className="bookshelf">
                <div className="section">
                    <h3> Latest Books added </h3>
                </div>

                <div className="book-container">
                                {/* <NavButton imageSrc={"/src/imgs/left-arrow.png"} altText={"Next Book Button"} /> */}

        
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book2.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book3.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book4.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book5.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    />
                                    
                                <NavButton imageSrc={"/src/imgs/right-arrow.png"} altText={"Next Book Button"} />
                </div>

                <div className="section">
                    <h3> Recommended Books </h3>
                </div>

                    <div className="book-container">
                                    {/* <NavButton imageSrc={"/src/imgs/left-arrow.png"} altText={"Next Book Button"} /> */}
                                        <Book
                                            title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book7.jpeg" altText="Book 11"
                                        />
                                        <Book
                                            title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book5.jpeg" altText="Book 11"
                                        />
                                        <Book
                                            title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book9.jpeg" altText="Book 11"
                                        />
                                        <Book
                                            title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book10.jpeg" altText="Book 11"
                                        />
                                        <Book
                                            title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                                        />   
                                        <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                        />  
                                    <NavButton imageSrc={"/src/imgs/right-arrow.png"} altText={"Next Book Button"} />
                    </div>

                <div className="section">
                    <h3> New Books </h3>
                </div>

                <div className="book-container">
                                {/* <NavButton imageSrc={"/src/imgs/left-arrow.png"} altText={"Next Book Button"} /> */}
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book2.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book4.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book9.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book10.jpeg" altText="Book 11"
                                    />
                                    <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                                    />  
                                     <Book
                                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                                    /> 
                                <NavButton imageSrc={"/src/imgs/right-arrow.png"} altText={"Next Book Button"} />
                </div>
            </div>

    </article>

    );
}
export default BookShelf;
