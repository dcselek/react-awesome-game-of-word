import React, { useContext, useState } from 'react';
import styles from './TextArea.module.scss'
import WordContext from '../contexts//Wordcontext'
import alertify from 'alertifyjs'


const TextArea = () => {
    const { changeDictionary } = useContext(WordContext);
    const [turkce, setTurkce] = useState("")
    const [english, setEnglish] = useState("")



    const handleChange = (word) => {
        if (word.target.name === "turkce") {
            setTurkce(word.target.value.trim())
        }
        else {
            setEnglish(word.target.value.trim())
        }
    }


    const handleClick = () => {


        changeDictionary({
            turkce: turkce,
            english: english
        })

        alertify.notify("Words Saved 🎉" ,'success')

    }



    return (
        <>
            <div className={styles.container}>
                <form className={styles.form}  >
                    <div className={styles.form1}>
                        <label htmlFor="turkce">Türkçe</label>
                        <textarea rows="5" cols="25"
                            id="turkce"
                            name="turkce"
                            placeholder="metin girin"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={styles.form2}>
                        <label htmlFor="english">English</label>
                        <textarea rows="5" cols="25"
                            id="english"
                            name="english"
                            placeholder="enter text"
                            onChange={handleChange}
                        />
                    </div>

                </form>
                <button className={styles.button} onClick={handleClick} type="button">Save!</button>
            </div>

        </>
    );
}


export default TextArea;