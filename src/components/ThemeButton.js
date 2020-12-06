import React, {useContext} from 'react';
import ThemeContext from '../contexts/ThemeContext'

const ThemeButton = () => {
    
    const {toggleTheme,theme} = useContext(ThemeContext)
    
    return (
        <div>
            <button onClick={toggleTheme}>Theme {theme === "dark" ?  "light" : "dark"}</button>
        </div>
    );
}

export default ThemeButton;