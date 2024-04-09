const BookShelf = () => {
    return (
            <article class="article">
                <div>
                    <table class="book-table2">
                        <tr>
                            <th class="row1" colspan="6">
                                <div className="search-container">
                                    <form>
                                        <input id="searchbar" type="text" size="50" placeholder="   Search books..."></input>
                                        <button type="submit"><img id="buttonImage" src="src\imgs\search-interface-symbol.png"  alt="NextBookButton"></img></button>
                                    </form>
                                </div>
                            </th>
                        </tr>
                        
                        <tr>
                            <th colspan="6">Latest Books added</th>
                        </tr>
                        
                        <tr>
                            <td><img src="src\imgs\Book1.jpeg" alt="Book 1"></img></td>
                            <td><img src="src\imgs\Book2.jpeg" alt="Book 2"></img></td>
                            <td><img src="src\imgs\Book3.jpeg" alt="Book 3"></img></td>
                            <td><img src="src\imgs\Book4.jpeg" alt="Book 4"></img></td>
                            <td><img src="src\imgs\Book5.jpeg" alt="Book 5"></img></td>
                            <td><button type="submit"><img id="buttonImage" src="src\imgs\right-arrow.png" alt="NextBookButton"></img></button></td>
                        </tr>
                        
                        <tr>
                            <th colspan="6">Recommended Books</th>
                        </tr>
                        
                        <tr>
                            <td><img src="src\imgs\Book11.png" alt="Book 6"></img></td>
                            <td><img src="src\imgs\Book7.jpeg" alt="Book 7"></img></td>
                            <td><img src="src\imgs\Book8.jpeg" alt="Book 8"></img></td>
                            <td><img src="src\imgs\Book9.jpeg" alt="Book 9"></img></td>
                            <td><img src="src\imgs\Book10.jpeg" alt="Book 10"></img></td>
                            <td><button type="submit"><img id="buttonImage" src="src\imgs\right-arrow.png" alt="NextBookButton"></img></button></td>
                        </tr>
                        
                        <tr>
                            <th colspan="6">New Books</th>
                        </tr>
                        
                        <tr>
                            <td><img src="src\imgs\Book1.jpeg" alt="Book 11"></img></td>
                            <td><img src="src\imgs\Book1.jpeg" alt="Book 12"></img></td>
                            <td><img src="src\imgs\Book1.jpeg" alt="Book 13"></img></td>
                            <td><img src="src\imgs\Book1.jpeg" alt="Book 14"></img></td>
                            <td><img src="src\imgs\Book1.jpeg" alt="Book 15"></img></td>
                            <td><button type="submit"><img id="buttonImage" src="src\imgs\right-arrow.png" alt="NextBookButton"></img></button></td>
                        </tr>

                    </table>
                    
                </div>
            </article>
     );
}
 
export default BookShelf;