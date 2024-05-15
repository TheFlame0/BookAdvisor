import React, { useState } from 'react';
import styles from './chatBot.module.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
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
                <div className={styles.avatar1}>
                  <div className={styles.op}>OP</div>
                </div>
              </div>
              <div className={styles.chatText}>
                <span>{msg.text}</span>
                <span className={styles.timestamp}>{msg.timestamp}</span>
              </div>
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
};

export default ChatBot;
