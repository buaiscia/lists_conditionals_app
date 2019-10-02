import React, {Component} from 'react';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.countLetter = this.countLetter.bind(this);
  }

  state = {
    word: '',
    letterCount: 0
  }

  countLetter = (event) => {

    
    let wordSplit = (event.target.value).split('');
    let countLetters = (wordSplit.length);

    this.setState({
      word: wordSplit.join(''),   
      letterCount: countLetters
      })

    }

  render() {
    return(
      <div className="classApp">
        <h1>Hi this is the lists and conditional app</h1>
        <input type="text" onChange={(event) => this.countLetter(event)} value={this.state.word}></input>
        <p>The above text is long {this.state.letterCount} characters </p>
        <p>The above text is  {this.state.word}  </p>
      </div>

    )
  } 


}



export default App;
