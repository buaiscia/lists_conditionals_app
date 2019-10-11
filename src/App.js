import React, {Component} from 'react';
import './App.css';
import Validation from './validationComponent/validation';
import CharComponent from './charComponent/charComponent';


class App extends Component {

  constructor() {
    super();
    this.countLetter = this.countLetter.bind(this);
    // this.showChar = this.showChar.bind(this);
    // this.mapFunc = this.mapFunc.bind(this);
    this.deleteChar = this.deleteChar.bind(this);
  }

  state = {
    splitted: [
      {
        // id: 0,
      splittedWord: ''}
    ],
    word: '',
    letterCount: 0
  }


  countLetter = (event) => {

    const word = event.target.value;
    const wordSplit = word.split('');
    let countLetters = (wordSplit.length);
    // let newId = this.state.split[0].id;
    // newId++;
   

    this.setState({
      
      splitted: [
        {
          // id: newId,
          
        splittedWord: wordSplit,
        }
      ],
      word: word, 
      letterCount: countLetters
      })
      
    }

    
  validationFunc = (textToValid) => {
    textToValid = this.state.letterCount;
    if((textToValid) < 5 ) {

    }
  }

  

  deleteChar = (charIndex) => {
    let word = [...this.state.word]
    
    let removed = word.splice(charIndex, 1);
    word = word.join('');
    this.setState( { word : word });
    
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


    let splittedChar = null;
  
    
 
  
    splittedChar = (
      <div>
          {this.state.word.split('').map((char, index) => {
              
            return(
               <div>
                  <CharComponent key={index} singleChar={char} click={() => this.deleteChar(index)} />
               </div>
                  

    
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
