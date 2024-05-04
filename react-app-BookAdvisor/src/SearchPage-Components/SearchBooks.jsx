import Book from './Book.jsx';
import './SearchBooks.css';

const SearchBooks = () => {
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
                        <option value="author">most popular</option>
                        <option value="genre">by genre</option>
                    </select>
                </form> 

        <div className="bookshelf-Search">
                <div className="book-container-search">
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
                       <Book
                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book10.jpeg" altText="Book 11"
                    />
                    <Book
                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                    />  
                     <Book
                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                    /> 
                    <Book
                        title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book8.jpeg" altText="Book 11"
                    />   
            </div>

        </div>

</article>
    );
}

export default SearchBooks;
