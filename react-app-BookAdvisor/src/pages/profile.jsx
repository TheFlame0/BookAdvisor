import './profile.css';
import Navbar from '../HomePage-Components/Navbar';
import Footer from '../HomePage-Components/Footer';
import React, { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import { ref, onValue } from 'firebase/database';


const UserProfile = () => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const bookRef = ref(database, '0'); // Adjust the path as needed
    onValue(bookRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Ensure all fields are strings
        const book = {
          book_authors: String(data.book_authors),
          book_desc: String(data.book_desc),
          book_rating: String(data.book_rating),
          book_rating_count: String(data.book_rating_count),
          book_review_count: String(data.book_review_count),
          book_title: String(data.book_title),
          genres: String(data.genres),
          image_url: String(data.image_url),
        };
        setBookData(book);
        console.log(book)
      } else {
        setBookData(null);
      }
    }, (error) => {
      console.error('Error fetching data: ', error);
    });
  }, []);

  // if (!bookData) {
  //   return <div>Loading...</div>;
  // }
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
      {/* <Footer /> */}
      {/*  */}
{bookData&& <div>
      <h1>{bookData.book_title}</h1>
      <img src={bookData.image_url} alt={bookData.book_title} />
      <p><strong>Authors:</strong> {bookData.book_authors.replace('|', ', ')}</p>
      <p><strong>Description:</strong> {bookData.book_desc}</p>
      <p><strong>Rating:</strong> {bookData.book_rating}</p>
      <p><strong>Rating Count:</strong> {bookData.book_rating_count}</p>
      <p><strong>Review Count:</strong> {bookData.book_review_count}</p>
      <p><strong>Genres:</strong> {bookData.genres.replace('|', ', ')}</p>
    </div>}
   

      

  
    </>

  );
}



export default UserProfile;