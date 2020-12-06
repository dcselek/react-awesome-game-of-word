import React, {useContext} from 'react';
import ThemeContext from '../contexts/ThemeContext'
import {FiSun,FiMoon} from 'react-icons/fi'

const ThemeButton = () => {
    
    const {toggleTheme,theme} = useContext(ThemeContext)
    
    return (
        <div>
            <button onClick={toggleTheme}>Theme <br/> {theme === "dark" ? <FiMoon/> : <FiSun/>}</button>
        </div>
    );
}

export default ThemeButton;