import './Discover.css';

const Discover = () => {
  return (
    <div className="banner-advertise">
      <div className="table-wrapper">
        <div className="book-cover">
          <img className="animation" src={"/src/imgs/Book1.jpeg"} alt="Book 1" />
          <img className="animation" src={"/src/imgs/Book2.jpeg"} alt="Book 2" />
          <img className="animation" src={"/src/imgs/Book3.jpeg"} alt="Book 3" />
          <img className="animation" src={"/src/imgs/Book4.jpeg"} alt="Book 4" />
          <img className="animation" src={"/src/imgs/Book5.jpeg"} alt="Book 5" />
          <img className="animation" src={"/src/imgs/Book11.png"} alt="Book 6" />
          <img className="animation" src={"/src/imgs/Book7.jpeg"} alt="Book 7" />
          <img className="animation" src={"/src/imgs/Book8.jpeg"} alt="Book 8" />
          <img className="animation" src={"/src/imgs/Book9.jpeg"} alt="Book 9" />
          <img className="animation" src={"/src/imgs/Book10.jpeg"} alt="Book 10" />
        </div>
      </div>

      <div className="banner-text">
        <h2><b>Still you do not know what book you want to read? Then Sign up to get an Advice about what book you would read!</b></h2>
        <a href='/SignUp'><button type="submit">Sign Up</button></a>
      </div>
      
    </div>
  );
}

export default Discover;
