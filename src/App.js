import React, { Component} from 'react';
import './App.scss'
import TextArea from './components/TextArea';
import Nav from './components/Nav'
import Dictionary from './components/Dictionary';
import Typing from 'react-typing-animation';
import alertify from 'alertifyjs'
import {ThemeProvider} from './contexts/ThemeContext';

class App extends Component {

  state = { dictionary: [] }

  dictionaryCallBack = (data) => {
    let dictionary;

    if (localStorage.getItem("dictionary") === null) {
      dictionary = [];
    } else {
      dictionary = JSON.parse(localStorage.getItem("dictionary"));
    }
    dictionary.push(data)

    localStorage.setItem("dictionary", JSON.stringify(dictionary));

    this.updateDictionary(data);
  }

  removeWord = (elementKey) => {
    let removeElement = this.state.dictionary[elementKey]

    let filterState = this.state.dictionary.filter(word => word !== removeElement)



    this.setState({
      dictionary: filterState
    })

    this.afterRemoveStorage(filterState)
    alertify.notify('Kelime Silindi! / Word Deleted!','error')
  }

  afterRemoveStorage(filterState) {
    localStorage.removeItem("dictionary");
    localStorage.setItem("dictionary", JSON.stringify(filterState));
  }

  updateDictionary(data) {

    if (this.state.dictionary === null) {
      this.setState({
        dictionary: [data]
      })
    } else {
      this.setState({
        dictionary: [...this.state.dictionary, data]
      })
    }

    console.log(this.state.dictionary)

  }



  componentDidMount() {
    this.setState({
      dictionary: JSON.parse(localStorage.getItem("dictionary"))
    })
  }

  render() {


    return (
      <ThemeProvider>
          <div className="App">
              <Nav />
              <Typing>
                <p>Ezberlemek istediğiniz kelimeleri kaydedebilir ve <br />
                "Game of Word" butonuna basarak ezberini kolaylaştıracak<br />
                oyunumuza gidebilirsin!</p>
              </Typing>
              <TextArea callback={this.dictionaryCallBack} />
              <Dictionary dictionary={this.state.dictionary} removeWord={this.removeWord} />
          </div>
      </ThemeProvider>
    );
  }
}



export default App;
