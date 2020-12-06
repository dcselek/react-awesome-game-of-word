import React, { Component } from 'react';
import styles from './Nav.module.scss'
import ThemeButton from './ThemeButton';

class Nav extends Component {
    render() {
        return (
            <div className={styles.container}>
                <nav>
                    <h1>Words</h1>
                    <button>Game of Words</button>
                    <ThemeButton/>
                </nav>
            </div>
        );
    }
}

export default Nav;