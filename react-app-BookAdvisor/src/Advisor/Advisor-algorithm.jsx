import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const BookRecommendation = () => {
  const genre_list = ['fiction', 'non-fiction', 'fantasy', 'science', 'history']; // Example genres

  const [userReadList, setUserReadList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const [userScore, setUserScore] = useState(Array(genre_list.length).fill(0));
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    // Fetch user read list from Firestore
    const fetchUserReadList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'userReadList'));
        const userReadListData = querySnapshot.docs.map(doc => doc.data());
        setUserReadList(userReadListData);
      } catch (error) {
        console.error('Error fetching user read list:', error);
      }
    };

    // Fetch book list from Firestore
    const fetchBookList = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'bookList'));
        const bookListData = querySnapshot.docs.map(doc => doc.data());
        setBookList(bookListData);
      } catch (error) {
        console.error('Error fetching book list:', error);
      }
    };

    fetchUserReadList();
    fetchBookList();
  }, []);

  useEffect(() => {
    // Function to update user score
    const updateUserScore = () => {
      let newUserScore = Array(genre_list.length).fill(0);
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
    // Function to calculate and update book scores
    const updateBookScores = () => {
      let userBookDict = new Map();
      
      bookList.forEach(book => {
        let bookScore = 0;
        book.genres.forEach(genre => {
          const index = genre_list.indexOf(genre);
          if (index !== -1) {
            bookScore += 1 * userScore[index];
          }
        });
        userBookDict.set(book, bookScore);
      });

      let sortedBooks = Array.from(userBookDict.entries()).sort((a, b) => b[1] - a[1]);
      let recommendations = sortedBooks.slice(0, 10).map(entry => entry[0]);
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
