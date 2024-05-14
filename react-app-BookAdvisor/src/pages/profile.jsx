import './profile.css';
import Book from '../HomePage-Components/Book.jsx';

const UserProfile = () => {
    return ( 

      <>
      {/* <Navbar /> */}
          <div className="main-profile">
            <div className='container-name-img'>
              <div className="imgProfile-container">
                <img src="/src/imgs/prifile-img-cartoon.png" alt="Profile" className="imgProfile"/>
                <p> <b>Hamza Baaqil</b> </p>
              </div>
            </div>
          </div>
          <div className='layer'> </div>
              <div className="bookshelf-Profile">
                  <div className="MyBook-container">
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book2.jpeg" altText="Book 11"
                      />
                            <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book2.jpeg" altText="Book 11"
                      />
                     <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />
                      <Book
                          title="The Science of Selling" author="David Hoffeld" rating="4.2/5" tags={["History", "Data", "English"]} description="Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning." imageSrc="/src/imgs/Book1.jpeg" altText="Book 11"
                      />


                  </div>
              </div>
              
                
      {/* <Footer /> */}
    </>

    );
}

export default UserProfile;