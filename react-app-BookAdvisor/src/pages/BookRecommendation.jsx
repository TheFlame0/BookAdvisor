import React, { useState, useEffect, useMemo } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const genre_list = ['Fiction', 'Mystery', 'Science Fiction', 'Fantasy', 'Non-Fiction'];

const BookRecommendation = () => {
  const [userReadList, setUserReadList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [userScore, setUserScore] = useState(Array(genre_list.length).fill(0));
  const [recommendationList, setRecommendationList] = useState([]);

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
      const recommendations = sortedBooks.slice(0, 10).map(entry => entry[0]);
      setRecommendationList(recommendations);
    };

    if (bookList.length > 0 && userScore.some(score => score > 0)) {
      updateBookScores();
    }
  }, [userScore, bookList]);

  return (
    <div>
      <h1>Recommended Books</h1>
      <ul>
        {recommendationList.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookRecommendation;
