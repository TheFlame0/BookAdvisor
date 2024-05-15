import React, { useState } from 'react';
import styles from './chatBot.module.css';
import BookRecommendation from './BookRecommendation'; 

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  // Sample book list for testing
  const bookList = [
    { title: 'The Art of War', author: 'Sun Tzu' },
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { title: 'The Da Vinci Code', author: 'Dan Brown' }
];

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user', timestamp: new Date().toLocaleTimeString() }]);
      setMessage('');
      const randomIndex = Math.floor(Math.random() * bookList.length);
      const randomBook = bookList[randomIndex];
      setMessages([...messages, { text: `Recommended Book: ${randomBook.title} by ${randomBook.author}`, sender: 'chatbot', timestamp: new Date().toLocaleTimeString() }]);
    }
  };

  return (
    <div className={styles.mensagensParent}>
      <div id='chatShow'>
        <div className={styles.mensagens}>
          {messages.map((msg, index) => (
            <div key={index} className={styles.chatMessage}>
              <div className={styles.avatar}>
                <div className={styles.avatar1}>
                  <div className={styles.op}>OP</div>
                </div>
              </div>
              <div className={styles.chatText}>
                <span>{msg.text}</span>
                <span className={styles.timestamp}>{msg.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.envio}>
          <input
            type="text"
            className={styles.inputField}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button className={styles.sendButton} onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <BookRecommendation />
    </div>
  );
};

export default ChatBot;
