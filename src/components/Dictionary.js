import React, { Component } from 'react';
import styles from './Dictionary.module.scss'

class Dictionary extends Component {



    render() {

        

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
                        {this.props.dictionary.map((word,key) => (
                            <tr key={key} >
                                <td>
                                    {word.turkce}
                                </td>
                                <td>
                                    {word.english}
                                </td>
                            </tr>
                            ))}       
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Dictionary;