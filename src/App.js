import React, {Component} from 'react';
import './App.css';
import Validation from './validationComponent/validation';


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


  validationFunc = (textToValid) => {
    textToValid = this.state.letterCount;
    if((textToValid) < 5 ) {

    }
  }

  render() {

    let textValidation = null;

    if(this.state.letterCount < 5) {
      textValidation = (
        <div>
          <p>The text is too short</p>
        </div>
      )
      
    }
    else {
      textValidation = (
        <div>
          <p>The text is long enough</p>
        </div>
      )
    }


    return(
      <div className="classApp">
        <h1>Hi this is the lists and conditional app</h1>
        <input type="text" onChange={(event) => this.countLetter(event)} value={this.state.word}></input>
        <p>The above text is long {this.state.letterCount} characters </p>
        <p>The above text is: {this.state.word}  </p>
        <Validation textLength={this.state.letterCount} textValidation={textValidation}/>
      </div>

    )
  } 


}



export default App;
