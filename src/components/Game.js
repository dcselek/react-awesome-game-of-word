import React, { useContext, useState, } from 'react';
import WordContext from '../contexts/Wordcontext';
import styles from './Game.module.scss'

function Game() {

    const [point, setPoint] = useState(0);
    const [count, setCount] = useState(0)
    const { dictionary } = useContext(WordContext);

    let gameWord = "";

    if(dictionary === null || dictionary.length === 0 ){
        gameWord="Add a New Word 😀"
    }else{
        
        if( count === dictionary.length ){
            gameWord = "Words Finish! ✔️"
        }else{
            gameWord = dictionary[count].english
        }
    }

    

    

    return (
        <div className={styles.container}>
            <h2>{gameWord}</h2>
            <span>Point: {point}</span>
            <div className={styles.gameButtons}>
                <button onClick={() => {
                    return (setPoint(point - 5), setCount(count + 1))
                }} className={styles.false}>👎</button>
                <button onClick={() => {
                    return (setPoint(point + 10), setCount(count + 1))
                }} className={styles.true}>👍</button>
            </div>
        </div>
    );
}

export default Game;