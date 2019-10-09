import React, {Component} from 'react';
import './App.css';
import Validation from './validationComponent/validation';
import CharComponent from './charComponent/charComponent';


class App extends Component {

  constructor() {
    super();
    this.countLetter = this.countLetter.bind(this);
    // this.showChar = this.showChar.bind(this);
    this.deleteChar = this.deleteChar.bind(this);
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

  deleteChar = (char) => {
    const split = [...this.state.split]
    split.splice(char, 1);
    this.setState( { split : split });
    alert("delete Called");
    
  }

  // showChar = (event, index) => {
  //   const charIndex = this.state.split.findIndex(p => {
  //     return p.id = index;
  //   });

  //   const char = {...this.state.split[charIndex]}

  //   char.splittedWord = event.target.value;

  //   const splittedWordCopy = [...this.state.split];
  //   splittedWordCopy[charIndex] = char;

  //   this.setState({ chars : char })
  // }




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


    // const splittedWordCopy = [...this.state.split];
    // console.log(splittedWordCopy[0].splittedWord);
    
    // this.setState({splittedWordCopy: splittedWordCopy})
  
    let splittedChar = null;
 
    

    splittedChar = (
      <div>
          {this.state.split.map((char, index) => {
            return(
               <div>
                  <CharComponent key={`char${index}`} singleChar={char.splittedWord} />
               </div>
                  
                  // click={(id) => this.deleteChar(id)}

              
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
