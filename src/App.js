import React, { Component } from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Input />
        <Congrats success={false} />
        <GuessedWords guessedWords={[{
          guessedWord: 'train',
          letterMatchCount: 3
        }, {
          guessedWord: 'apple',
          letterMatchCount: 5
        }]} />
      </div>
    );
  }
}

export default App;
