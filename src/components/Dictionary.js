import React, { Component } from 'react';
import styles from './Dictionary.module.scss'

class Dictionary extends Component {



    render() {

        let td;

        if(this.props.dictionary !== null){
            td = this.props.dictionary.map((word,key) => (
                <tr key={key} >
                    <td>
                        {word.turkce}
                    </td>
                    <td>
                        {word.english}
                    </td>
                </tr>
                ))
        }else {
            <></>
        }

        return (
            <div className={styles.container}>
                <table>
                    <thead>
                        <tr>
                            <th>Türkçe</th>
                            <th>English</th>
                        </tr>
                    </thead>
                    <tbody>
                        {td}       
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Dictionary;