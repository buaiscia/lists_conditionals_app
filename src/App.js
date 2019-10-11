import React, {Component} from 'react';
import './App.css';
import Validation from './validationComponent/validation';
import CharComponent from './charComponent/charComponent';


class App extends Component {

  constructor() {
    super();
    this.countLetter = this.countLetter.bind(this);
    // this.showChar = this.showChar.bind(this);
    this.mapFunc = this.mapFunc.bind(this);
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
      // word : wordSplit.join(''),  
      word: word, 
      letterCount: countLetters
      })
      
    }

    


  validationFunc = (textToValid) => {
    textToValid = this.state.letterCount;
    if((textToValid) < 5 ) {

    }
  }

  mapFunc = () =>{
    let spl = [...this.state.splitted]
    let spl2 = spl[0].splittedWord;
    
    return spl2;
  }

  deleteChar = (charIndex) => {
    const word = [...this.state.word]
    word.splice(charIndex, 1);
    this.setState( { word : word });
    
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
    // let spl = this.state.word.split('')
    // let splTest = this.mapFunc();
    
    
 
  
    splittedChar = (
      <div>
          {/* {console.log(splTest.split(''))} */}
          {this.state.word.map((char, index) => {
              
            return(
               <div>
                  <CharComponent key={index} singleChar={char} click={() => this.deleteChar(index)} />
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
