import React, { useState } from 'react';
<<<<<<< HEAD
import { FunctionComponent } from 'react';
=======
>>>>>>> 6f70732aed4137f2ab6d3c78278c58b395231e9c
import styles from './chatBot.module.css';
import BookRecommendation from './BookRecommendation'; 

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

<<<<<<< HEAD
function chatBot () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div>
            <button onClick={toggleVisibility}>Toggle Chat</button>
            {isVisible &&(
        <div className={styles.mensagensParent}>
            <div id='chatShow' >
            <div className={styles.mensagens} />
            <div className={styles.avatar}>
=======
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
>>>>>>> 6f70732aed4137f2ab6d3c78278c58b395231e9c
                <div className={styles.avatar1}>
                  <div className={styles.op}>OP</div>
                </div>
              </div>
              <div className={styles.chatText}>
                <span>{msg.text}</span>
                <span className={styles.timestamp}>{msg.timestamp}</span>
              </div>
            </div>
<<<<<<< HEAD
            <div className={styles.perfil}>
                <div className={styles.perfilChild} />
                <div className={styles.chatBotWrapper}>
                    <b className={styles.chatBot}>CHAT BOT</b>
                </div>
                <img className={styles.avatarIcon} alt="" src="./src/imgs/Avatar.png" />
                <img className={styles.filledactioninfoIcon} alt="" src="./src/pages/filled/action/info.svg" />
            </div>
            <div className={styles.envio}>
                <div className={styles.envioChild} />
                <div className={styles.fillededitorattachFileParent}>
                    <img className={styles.fillededitorattachFileIcon} alt="" src="./src/pages/filled/editor/attach-file.svg" />
                    <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <img className={styles.filledcontentsendIcon} alt="" src="./src/pages/filled/content/send.svg" />
                    </div>
                    <img className={styles.fillednavigationcheckIcon} alt="" src="./src/pages/filled/navigation/check.svg" />
                </div>
                <div className={styles.digiteAMensagem}>send message</div>
            </div>
            <img className={styles.vectorIcon} alt="" src="./src/pages/filled/Vector.svg" />
            <div className={styles.chat1}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the,</div>
            </div>
            <div className={styles.chat11}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the</div>
            </div>
            <div className={styles.chat12}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the </div>
            </div>
            <div className={styles.chat13}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the</div>
            </div>
            <div className={styles.chat2}>
                <img className={styles.avatarIcon1} alt="" src="./src/imgs/Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the,</div>
            </div>
            <div className={styles.chat21}>
                <img className={styles.avatarIcon1} alt="" src="./src/imgs/Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the,</div>
            </div>
            <div className={styles.chat22}>
                <img className={styles.avatarIcon1} alt="" src="./src/imgs/Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the</div>
            </div>
            <div className={styles.chat23}>
                <img className={styles.avatarIcon1} alt="" src="./src/imgs/Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the</div>
            </div>
            </div>

            <div className={styles.ellipseParent}>
                <div className={styles.groupItem} />
                <button><img className={styles.image1Icon} alt="" src="./src/imgs/image 1.png" /></button>
            </div>
            
        </div>)}
        </div>);
=======
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
>>>>>>> 6f70732aed4137f2ab6d3c78278c58b395231e9c
};

export default ChatBot;
