import React, { useState } from 'react';
import styles from './chatBot.module.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user', timestamp: new Date().toLocaleTimeString() }]);
      setMessage('');
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
    </div>
  );
};

export default ChatBot;
