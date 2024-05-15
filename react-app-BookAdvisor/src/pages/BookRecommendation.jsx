import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
//import { db } from './firebase';

const genre_list = ['Fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Non-Fiction', 'history'];

const BookRecommendation = () => {
  const [userReadList, setUserReadList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [userScore, setUserScore] = useState(Array(genre_list.length).fill(0));
  const [recommendedBook, setRecommendedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userReadSnapshot, bookListSnapshot] = await Promise.all([
          getDocs(collection(db, 'userReadList')),
          getDocs(collection(db, 'bookList')),
        ]);

        const userReadListData = userReadSnapshot.docs.map(doc => doc.data());
        const bookListData = bookListSnapshot.docs.map(doc => doc.data());

        setUserReadList(userReadListData);
        setBookList(bookListData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateUserScore = () => {
      const newUserScore = Array(genre_list.length).fill(0);
      userReadList.forEach(book => {
        book.genres.forEach(genre => {
          const index = genre_list.indexOf(genre);
          if (index !== -1) {
            newUserScore[index] += 1;
          }
        });
      });
      setUserScore(newUserScore);
    };

    if (userReadList.length > 0) {
      updateUserScore();
    }
  }, [userReadList]);

  useEffect(() => {
    const updateBookScores = () => {
      const userBookDict = new Map();

      bookList.forEach(book => {
        let bookScore = 0;
        book.genres.forEach(genre => {
          const index = genre_list.indexOf(genre);
          if (index !== -1) {
            bookScore += userScore[index];
          }
        });
        userBookDict.set(book, bookScore);
      });

      const sortedBooks = Array.from(userBookDict.entries()).sort((a, b) => b[1] - a[1]);
      const recommendedBook = sortedBooks[0] ? sortedBooks[0][0] : null; // Select the top book if available
      setRecommendedBook(recommendedBook);
    };

    if (bookList.length > 0 && userScore.some(score => score > 0)) {
      updateBookScores();
    }
  }, [userScore, bookList]);

  return (
    <div>
      <h1>Recommended Book</h1>
      {recommendedBook ? (
        <div>
          <h2>{recommendedBook.title}</h2>
          <p>{recommendedBook.author}</p>
          {}
        </div>
      ) : (
        <p>No recommendations available</p>
      )}
    </div>
  );
};

export default BookRecommendation;
