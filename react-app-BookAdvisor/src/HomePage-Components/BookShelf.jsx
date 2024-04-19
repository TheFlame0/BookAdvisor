import React from 'react';
import Book from './Book';
const BookShelf = () => {
    return (
                <article className="article">
            <table className="book-table2">
            <thead>
                <tr>
                    <th className="row1" colSpan="6">
                        <div className="search-container">
                            <form>
                                    <input id="searchbar" type="text" placeholder="Search books..." />
                                    <button type="submit">
                                    <img id="buttonImage" src="src/imgs/search-interface-symbol.png" alt="Search Button"/>
                                    </button>
                            </form>
                        </div>
                    </th>
                </tr>
            </thead>

                <tbody>
                    <tr>
                        <th colSpan="6">Latest Books added</th>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <div className='scrollable-content'>
                                <table>
                                    <tr>
                                    <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book1.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book2.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book3.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book4.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        
                                        <td><button type="submit"><img id="buttonImage" src="src/imgs/right-arrow.png" alt="Next Book Button"/></button></td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="6">Recommended Books</th>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <div className='scrollable-content'> 
                                <table>
                                    <tr>
                                    <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book5.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book7.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book9.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        
 
                                        <td><button type="submit"><img id="buttonImage" src="src/imgs/right-arrow.png" alt="Next Book Button"/></button></td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan="6">New Books</th>
                    </tr>
                    <tr>
                        <td colSpan="6">
                            <div className='scrollable-content'> 
                                <table>
                                    <tr>
                                    <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book10.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book1.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book3.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book2.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        <td>        
                                            <Book
                                                    title="The Science of Selling"
                                                    author="David Hoffeld"
                                                    rating="4.2/5"
                                                    tags={["History", "Data", "English"]}
                                                    description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning."
                                                    imageSrc="src/imgs/Book8.jpeg"
                                                    altText="Book 11"
                                                />
                                        </td>
                                        
 
                                        <td><button type="submit"><img id="buttonImage" src="src/imgs/right-arrow.png" alt="Next Book Button"/></button></td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </article>
    );
}
 
export default BookShelf;
