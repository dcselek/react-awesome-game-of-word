import React,{ useState,createContext} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('dark')
    localStorage.setItem("THEME",theme)

    const toggleTheme = () => {
        if(theme === "dark"){
            setTheme("light")
            localStorage.setItem("THEME",theme)
        }else{
            setTheme("dark")
            localStorage.setItem("THEME",theme)
        }
    }

    const value = {
        theme,
        toggleTheme
    }

    const changeHtmlClass = () => {
        
    const htmlTheme = localStorage.getItem('THEME');
    const $html = document.querySelector('html');
    $html.classList.remove('light')
    $html.classList.remove('dark')
    $html.classList.add(htmlTheme);
    }

    changeHtmlClass();

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext