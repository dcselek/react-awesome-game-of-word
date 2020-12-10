import React, { useContext } from 'react';
import styles from './Dictionary.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import WordContext from '../contexts/Wordcontext'

const Dictionary = () => {

    const { dictionary,removeWord } = useContext(WordContext);
    let td;


    if (dictionary !== null) {
        td = dictionary.map((word, key) => (

            <tr key={key} >
                <td>
                    {word.turkce}
                </td>
                <td>
                    {word.english}
                </td>
                <td><AiOutlineClose onClick={() => removeWord(key)} className={styles.delete} /></td>
            </tr>
        ))
    } else {
        <></>
    }

    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Türkçe</th>
                        <th>English</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {td}
                </tbody>
            </table>
        </div>
    );
}


export default Dictionary;