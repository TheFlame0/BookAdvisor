import './profile.css';
import Navbar from '../HomePage-Components/Navbar';
import Footer from '../HomePage-Components/Footer';
import React, { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import { ref, onValue } from 'firebase/database';

import Book from '../HomePage-Components/Book.jsx';

const UserProfile = () => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const bookRef = ref(database, '2'); // Adjust the path as needed
    onValue(bookRef, (snapshot) => {
      const data = snapshot.val();
      setBookData(data);
    }, (error) => {
      console.error('Error fetching data: ', error);
    });
  }, []);
  return (

    <>
      {/* <Navbar /> */}

      <div className="main-profile">

        <div className='container-name-img'>
          <div className="imgProfile-container">
            <img src="/src/imgs/prifile-img-cartoon.png" alt="Profile" className="imgProfile" />
            <p>Hamza Baaqil </p>
          </div>
        </div>
      </div>
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
      {/*  */}

      <h1>{bookData.book_title}</h1>
      <img src={bookData.image_url} alt={bookData.book_title} />
      <p><strong>Authors:</strong> {bookData.book_authors.replace('|', ', ')}</p>
      <p><strong>Description:</strong> {bookData.book_desc}</p>
      <p><strong>Rating:</strong> {bookData.book_rating}</p>
      <p><strong>Rating Count:</strong> {bookData.book_rating_count}</p>
      <p><strong>Review Count:</strong> {bookData.book_review_count}</p>
      <p><strong>Genres:</strong> {bookData.genres.replace('|', ', ')}</p>

      {/*  */}
    </>

  );
}



export default UserProfile;