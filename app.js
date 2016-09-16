// MVP:

// Have two random integers (max and min is up to you).

// Show a + sign between them, to signal an addition problem.

// Have 10 digit buttons, numbered 0-9.

// Use a submit button to submit answer.

// Use a clear button to clear your current answer.

// If your answer is wrong, show the actual answer.

// Be sure to include a delay, so the user has time to see the result, before the next problem is displayed. (use setTimeout)

// this.state.numOne

// Use this to get and report the correct answer
  {/*<h4>Correct Answer: {this.state.numOne + this.state.numTwo} </h4>*/} 

let MathGame = React.createClass({

  getInitialState() {
    return {
      numOne: 0,
      numTwo: 0,
      playerGuess: '',
      numberBtn: 0,
      guessMessage: '',
      playerPoints: 0
    }

    let tempNumValue = 0;
  },
  //Creates a random number
  randomNumGenerator() {
    let numOne = Math.floor(Math.random() * (1, 15)) + 1;
    let numTwo = Math.floor(Math.random() * (1, 15)) + 1;
    //Will render only after updating GIS
    this.setState({numOne, numTwo}) 
  },

  //try to get User input
  // onUserInput(e){
  //   this.setState({playerGuess: e.target.value})
  //   console.log(this.state.playerGuess)
  // },

  //Before we render do this first
  componentDidMount(){
    this.randomNumGenerator()
    console.log('I am this 4: ' + this.state.numOne)


    //-------------------

    
  },


  // ============================================================================
  //Resets the game and is called in the _guessMessage function
  _reset: function() {
    // this.state.numberBtn
    this.setState({numOne: Math.floor(Math.random() * (1, 15)) + 1});
    this.setState({numTwo: Math.floor(Math.random() * (1, 15)) + 1});
    this.setState({playerGuess: ''})
    this.setState({numberBtn: 0})
    this.setState({guessMessage: ''})
  },

  //Show Incorrect guess message

  _clear: function() {
    this.setState({numberBtn: 0})
  },

  _myCustomMethod: function(event) {
      this.setState({numberBtn: this.state.numberBtn += parseInt(event.target.getAttribute('data-num'))})
      if(this.state.numberBtn) {
        console.log('do something but what')
      }
   },

  

  _guessMessage: function() {
    // Checks if the player total (numberBtn) is equal to the randomly generated numbers
    if(this.state.numberBtn === (this.state.numOne + this.state.numTwo)){
      this.setState({playerPoints: this.state.playerPoints += 1})
      this.setState({playerGuess: 'Congrats, you get a point for guess the correct answer!'}) 
    } else {
      console.log('Sorry, you guessed incorrectly. Try again.')
    }
    setTimeout(() => {

      this._resetOrClear()
        // this.setState({numOne: Math.floor(Math.random() * (1, 15)) + 1});
        // this.setState({numTwo: Math.floor(Math.random() * (1, 15)) + 1});
        // this.setState({playerGuess: ''})
        // this.setState({numberBtn: 0})
        // this.setState({guessMessage: ''})
      }, 2000);
  },

 
      
  
      
      //turn the data values to a string ( if needed and then add them together if needed and then compare to the Correct Answer)   
 

  






  // ============================================================================

  //Beware that render must finish before invoking anything else
  render() {
    
    //Render a random number -- later store this in a variable to be reused
    // return(<h1>Random Number One: {Math.floor(Math.random() * (1, 15)) + 1}</h1>);
    // Asking if numOne is truthy
    // let numOne = this.state.numOne ? this.state.numOne : this.randomNumGenerator()
    // let numTwo = this.state.numTwo ? this.state.numTwo : this.randomNumGenerator()

     return(
      <div className='random-numbers'>
        <h1>Maths Game</h1>
        <p>TO WIN, MAKE 'YOUR TOTAL' MATCH THE SUM OF THE NUMBERS IN THE GREEN BOXES. THEN CLICK THE 'SUBMIT TOTAL' BUTTON TO ENTER YOUR GUESS</p>
        <h3>You have: <span className='player-score'>{this.state.playerPoints}</span> points. You need <span className='player-score'>10</span> points to win.</h3>
        <span className='numbersMain'>{this.state.numOne}</span>
        <span className='operand'>+</span>
        <span className='numbersMain'>{this.state.numTwo}</span> 
        {/*display the correct answer*/}
        <h3 className="user-guess-total">Your Total: <span className='player-score'>{this.state.numberBtn}</span><button className="clearBtn btn btn-sm btn-danger" onClick={this._clear }>Clear Your Total</button></h3>
        <div className="answerField">
          <div className="form-group">
            <p>If You're Happy With Your Total Click Submit to Place Guess</p>
            <p>Click on the numbers below to add the number you click to your total</p>
            {/*<input className='answerField'type="text"/>*/}
          </div>
        </div>
        {/*____________________________________________________________________*/}
            <div className='num-buttons'>
              <span className="num-button" data-num={0} onClick={this._myCustomMethod}>0</span>
              <span className="num-button" data-num={1} onClick={this._myCustomMethod}>1</span>
              <span className="num-button" data-num={2} onClick={this._myCustomMethod}>2</span>
              <span className="num-button" data-num={3} onClick={this._myCustomMethod}>3</span>
              <span className="num-button" data-num={4} onClick={this._myCustomMethod}>4</span>
              <span className="num-button" data-num={5} onClick={this._myCustomMethod}>5</span>
              <span className="num-button" data-num={6} onClick={this._myCustomMethod}>6</span>
              <span className="num-button" data-num={7} onClick={this._myCustomMethod}>7</span>
              <span className="num-button" data-num={8} onClick={this._myCustomMethod}>8</span>
              <span className="num-button" data-num={9} onClick={this._myCustomMethod}>9</span>
            </div>
            <button className="totalBtn btn btn-lg btn-block btn-danger" onClick={this._guessMessage}>Submit Your Total</button>
        {/*____________________________________________________________________*/}
      </div> 
    )
  }

});

ReactDOM.render(
  <MathGame />,
  document.getElementById('random-numbers')
);