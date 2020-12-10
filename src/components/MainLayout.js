import React from 'react';
import Dictionary from './Dictionary';
import Typing from 'react-typing-animation';
import TextArea from './TextArea';
import styles from './MainLayout.module.scss'

function MainLayout(props) {
    return (
        <div className={styles.container}>
            <Typing>
                <p>Ezberlemek istediğiniz kelimeleri kaydedebilir ve <br />
                "Game of Word" butonuna basarak ezberini kolaylaştıracak<br />
                oyunumuza gidebilirsin!</p>
            </Typing>
            <TextArea />
            <Dictionary />
        </div>
    );
}

export default MainLayout;