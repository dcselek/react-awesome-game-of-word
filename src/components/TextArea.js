import React, { Component } from 'react';
import styles from './TextArea.module.scss'

class TextArea extends Component {

    state = { turkce: "", english: "", }

    handleChange = (word) => {
        this.setState({ [word.target.name]: word.target.value.trim() })
    }


    handleClick = () => {
        
        
        this.props.callback({
            turkce: this.state.turkce,
            english: this.state.english
        })
    }

    render() {
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
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className={styles.form2}>
                            <label htmlFor="english">English</label>
                            <textarea rows="5" cols="25"
                                id="english"
                                name="english"
                                placeholder="enter text"
                                onChange={this.handleChange}
                            />
                        </div>
                        
                    </form>
                    <button className={styles.button} onClick={this.handleClick} type="button">Save!</button>
                </div>

            </>
        );
    }
}

export default TextArea;