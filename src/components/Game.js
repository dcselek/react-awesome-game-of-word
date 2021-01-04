import {Link} from "react-router-dom"
import React, { useContext, useState, } from 'react';
import WordContext from '../contexts/Wordcontext';
import styles from './Game.module.scss'

function Game() {

    const [point, setPoint] = useState(0);
    const [count, setCount] = useState(0)
    const { dictionary } = useContext(WordContext);

    let gameWord = "";

    if(dictionary === null || dictionary.length === 0 ){
        gameWord="First add a new word 😀"
        //Return to "Main Page: / " if no words added.
        return (
            <div className={styles.container}>
                <h2>{gameWord}</h2>
                <div className={styles.gameButtons}>
               <Link to="/" className={styles.link}><button>Click me!</button></Link>
               
                </div>
            </div>
        );
    }else{
        
        if( count === dictionary.length ){
            gameWord = "Words Finish! ✔️"
            //After finishing the game, it will ask if you want to add more words. 
            //Thus, redirects to main page to add more words if a person wants.
            return (
                <div className={styles.container}>
                    <h2>{gameWord}</h2>
                    <h1>Want to add more words ?</h1>
                    
                    
                    <div className={styles.gameButtons}>
                   <Link to="/" className={styles.link}><button>Click me!</button></Link>
                   
                    </div>
                </div>
            );
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