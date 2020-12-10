import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Nav from './components/Nav'
import Game from './components/Game'


import { ThemeProvider } from './contexts/ThemeContext';
import WordContext from './contexts/Wordcontext'
import MainLayout from './components/MainLayout';

const App = () => {

  const { setDictionary } = useContext(WordContext);


  useEffect(() => {
    setDictionary(
      JSON.parse(localStorage.getItem("dictionary"))
    )
  }, [setDictionary])

  

  return (
    <ThemeProvider>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={MainLayout} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </div>
    </ThemeProvider>
  );

}



export default App;
