import React,{ useState,createContext,useEffect} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('dark')
        

    const toggleTheme = () => {
        if(theme === "dark"){
            setTheme("light")
            localStorage.setItem("THEME",theme)
        }else if(theme === "light"){
            setTheme("dark")
            localStorage.setItem("THEME",theme)
        }
        else{
            setTheme(localStorage.getItem("THEME"))
        }
    }

    const value = {
        theme,
        toggleTheme
    }

    useEffect(() => {
        changeHtmlClass();
    },[theme])
    const changeHtmlClass = () => {
        
    const htmlTheme = localStorage.getItem('THEME');
    const $html = document.querySelector('html');
    $html.classList.remove('light')
    $html.classList.remove('dark')
    $html.classList.add(htmlTheme);
    }

    

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext