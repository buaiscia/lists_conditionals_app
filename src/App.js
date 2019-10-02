import React, {Component} from 'react';
import './App.css';
import Validation from './validationComponent/validation';
import CharComponent from './charComponent/charComponent';


class App extends Component {

  constructor() {
    super();
    this.countLetter = this.countLetter.bind(this);
  }

  state = {
    split: [
      {id: 0,
      splittedWord: ''}
    ],
    word: '',
    letterCount: 0
  }

  countLetter = (event) => {

    
    let wordSplit = (event.target.value).split('');
    let countLetters = (wordSplit.length);
    let newId = this.state.split[0].id;
    newId++;
   

    this.setState({
      
      split: [
        {id: newId,
        splittedWord: wordSplit,
        }
      ],
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

    let splittedWordCopy = [...this.state.split];
    console.log(splittedWordCopy);

    let splittedChar = (
      <div>
          {splittedWordCopy.map((char, index) => {
            return(
              <CharComponent key={index} singleChar={(char) => this.state.splittedWordCopy(char)} />
            )
          })
        
          }
      </div>


    )




      
    


    return(
      <div className="classApp">
        <h1>Hi this is the lists and conditional app</h1>
        <input type="text" onChange={(event, id) => this.countLetter(event, id)} value={this.state.word}></input>
        <p>The above text is long {this.state.letterCount} characters </p>
        <p>The above text is: {this.state.word}  </p>
        <Validation textLength={this.state.letterCount} textValidation={textValidation}/>
        {splittedChar}
      </div>

    )
  } 


}



export default App;
