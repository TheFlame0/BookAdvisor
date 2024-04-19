import './Discover.css';
const Discover = () => {
return (
      <div className="banner-advertise">
            <div className="table-wrapper">
                  <table className="book-table">
                        <tr>
                        <td className="empty-space animation"></td>
                        <td><img className="animation animation-delay-1s" src="src\imgs\Book1.jpeg" alt="Book 1"></img></td>
                        <td><img className="animation animation-delay-2s" src="src\imgs\Book2.jpeg" alt="Book 2"></img></td>
                        <td><img className="animation animation-delay-3s" src="src\imgs\Book3.jpeg" alt="Book 3"></img></td>
                        <td><img className="animation animation-delay-4s" src="src\imgs\Book4.jpeg" alt="Book 4"></img></td>
                        <td><img className="animation animation-delay-5s" src="src\imgs\Book5.jpeg" alt="Book 5"></img></td>
                        </tr>
                        <tr>
                        <td className="empty-space"></td> 
                        <td><img className="animation animation-delay-1s" src="src\imgs\Book11.png" alt="Book 6"></img></td>
                        <td><img className="animation animation-delay-2s" src="src\imgs\Book7.jpeg" alt="Book 7"></img></td>
                        <td><img className="animation animation-delay-3s" src="src\imgs\Book8.jpeg" alt="Book 8"></img></td>
                        <td><img className="animation animation-delay-4s" src="src\imgs\Book9.jpeg" alt="Book 9"></img></td>
                        <td><img className="animation animation-delay-5s" src="src\imgs\Book10.jpeg" alt="Book 10"></img></td>
                        </tr>
                  </table>
            </div>
            <div className="banner-text">
                  <h2> <b> Still you do not know what book you want to read? Then Sign up to get an Advice about what book you would read!</b></h2>
                  <button type="submit"> <b> Sign Up </b></button>
            </div>
      </div>
);
}

export default Discover;