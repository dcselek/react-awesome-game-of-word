import React, { Component } from 'react';
import styles from './Dictionary.module.scss'

class Dictionary extends Component {



    render() {
        return (
            <div className={styles.container}>
                <table>
                    <tr>
                        <th>Türkçe</th>
                        <th>English</th>
                    </tr>

                    {this.props.dictionary.map(words => (
                        <tr>
                            <td>
                                {words.turkce}
                            </td>
                            <td>
                                {words.english}
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}

export default Dictionary;