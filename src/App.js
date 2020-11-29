import React, { Component } from 'react';
import './App.scss'
import TextArea from './components/TextArea';
import Nav from './components/Nav'
import Dictionary from './components/Dictionary';

class App extends Component {

  state = { dictionary: [], }

  dictionaryCallBack = (data) => {
    let dictionary;

    if (localStorage.getItem("dictionary") === null) {
      dictionary = [];
    } else {
      dictionary = JSON.parse(localStorage.getItem("dictionary"));
    }
    dictionary.push(data)

    localStorage.setItem("dictionary", JSON.stringify(dictionary));

    this.setState( {
      dictionary: [...this.state.dictionary,data]
    })

    let dc = this.state.dictionary;
    console.log({dictionary,dc})
    
  }

  
  

  componentDidMount() {
    this.setState( {
      dictionary: JSON.parse(localStorage.getItem("dictionary"))
    })
  }

  render() {


    return (
      <div className="App">
        <Nav />
        <TextArea callback={this.dictionaryCallBack} />
        <Dictionary dictionary={this.state.dictionary} />
      </div>
    );
  }
}

export default App;
