import React from 'react';
import logo from './logo.svg';
import './App.css';

import TestAsyncServerCall from './TestAsyncServerCall.react'

const axios = require('axios');

function App() {
  testServerCall();
  return (
    <div className="App">
      <header className="App-header">
        <TestAsyncServerCall url='http://192.168.101.202:20010/index.php?test=abcd'/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 111
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


function testServerCall() {

  // Make a request for a user with a given ID
  axios.get('http://192.168.101.202:20010/index.php?test=abcd')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

export default App;
