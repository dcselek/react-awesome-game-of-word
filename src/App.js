import React, { Component } from 'react';
import './App.scss'
import TextArea from './components/TextArea';
import Nav from './components/Nav'
import Dictionary from './components/Dictionary';

class App extends Component {
  
  state = {dictionary: []}
  
  dictionaryCallBack = (data) => {
    this.setState({dictionary: [...this.state.dictionary,data]})
    localStorage.setItem("turkce",data.turkce)
    localStorage.setItem("english",data.english)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <TextArea callback={this.dictionaryCallBack} />
        <Dictionary dictionary={this.state.dictionary}/>
      </div>
    );
  }
}

export default App;
 