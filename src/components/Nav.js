import React, { Component } from 'react';
import styles from './Nav.module.scss'
import ThemeButton from './ThemeButton';
import {Link} from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className={styles.container}>
                <nav>
                    <Link to="/" className={styles.link}><h1>Words</h1></Link>
                    <Link to="/game"><button>Game of Words</button></Link>
                    <ThemeButton/>
                </nav>
            </div>
        );
    }
}

export default Nav;