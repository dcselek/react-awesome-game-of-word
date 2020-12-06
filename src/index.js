import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'alertifyjs/build/css/alertify.css';
import { WordProvider } from './contexts/Wordcontext';


ReactDOM.render(
  <WordProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WordProvider>,
  document.getElementById('root'),
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
