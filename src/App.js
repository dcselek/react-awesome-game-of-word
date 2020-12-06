import React, { useEffect,useContext} from 'react';
import './App.scss'
import TextArea from './components/TextArea';
import Nav from './components/Nav'
import Dictionary from './components/Dictionary';
import Typing from 'react-typing-animation';

import {ThemeProvider} from './contexts/ThemeContext';
import WordContext from './contexts/Wordcontext'

const App = () => {

  const { setDictionary } = useContext(WordContext);

  
  useEffect(() => {
    setDictionary(
     JSON.parse(localStorage.getItem("dictionary"))
    )
  }, [])

    return (
      <ThemeProvider>
          <div className="App">
              <Nav />
              <Typing>
                <p>Ezberlemek istediğiniz kelimeleri kaydedebilir ve <br />
                "Game of Word" butonuna basarak ezberini kolaylaştıracak<br />
                oyunumuza gidebilirsin!</p>
              </Typing>
              <TextArea  />
              <Dictionary />
          </div>
      </ThemeProvider>
    );
  
}



export default App;
