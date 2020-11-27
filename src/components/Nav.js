import React, { Component } from 'react';
import styles from './Nav.module.scss'

class Nav extends Component {
    render() {
        return (
            <div className={styles.container}>
                <nav>
                    <h1>Words</h1>
                    <button>Game of Words</button>
                </nav>
            </div>
        );
    }
}

export default Nav;