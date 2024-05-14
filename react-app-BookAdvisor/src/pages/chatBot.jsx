import { FunctionComponent } from 'react';
import styles from './chatBot.css';


const chatBot = () => {
    return (
        <div className={styles.mensagensParent}>
            <div className={styles.mensagens} />
            <div className={styles.avatar}>
                <div className={styles.avatar1}>
                    <div className={styles.op}>OP</div>
                </div>
            </div>
            <div className={styles.perfil}>
                <div className={styles.perfilChild} />
                <div className={styles.chatBotWrapper}>
                    <b className={styles.chatBot}>CHAT BOT</b>
                </div>
                <img className={styles.avatarIcon} alt="" src="Avatar.png" />
                <img className={styles.filledactioninfoIcon} alt="" src="filled/action/info.svg" />
            </div>
            <div className={styles.envio}>
                <div className={styles.envioChild} />
                <div className={styles.fillededitorattachFileParent}>
                    <img className={styles.fillededitorattachFileIcon} alt="" src="filled/editor/attach-file.svg" />
                    <div className={styles.rectangleParent}>
                        <div className={styles.groupChild} />
                        <img className={styles.filledcontentsendIcon} alt="" src="filled/content/send.svg" />
                    </div>
                    <img className={styles.fillednavigationcheckIcon} alt="" src="filled/navigation/check.svg" />
                </div>
                <div className={styles.digiteAMensagem}>Digite a mensagem</div>
            </div>
            <img className={styles.vectorIcon} alt="" src="Vector.svg" />
            <div className={styles.chat1}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat11}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat12}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat13}>
                <div className={styles.avatar2}>
                    <div className={styles.op}>OP</div>
                </div>
                <div className={styles.pm}>8:00 PM</div>
                <div className={styles.chat1Child} />
                <div className={styles.loremIpsumHas}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat2}>
                <img className={styles.avatarIcon1} alt="" src="Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat21}>
                <img className={styles.avatarIcon1} alt="" src="Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat22}>
                <img className={styles.avatarIcon1} alt="" src="Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.chat23}>
                <img className={styles.avatarIcon1} alt="" src="Avatar.png" />
                <div className={styles.pm4}>8:00 PM</div>
                <div className={styles.chat2Child} />
                <div className={styles.loremIpsumHas4}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
            </div>
            <div className={styles.ellipseParent}>
                <div className={styles.groupItem} />
                <img className={styles.image1Icon} alt="" src="image 1.png" />
            </div>
        </div>);
};

export default chatBot;
