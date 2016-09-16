// MVP:

// Have two random integers (max and min is up to you).

// Show a + sign between them, to signal an addition problem.

// Have 10 digit buttons, numbered 0-9.

// Use a submit button to submit answer.

// Use a clear button to clear your current answer.

// If your answer is wrong, show the actual answer.

// Be sure to include a delay, so the user has time 

// to see the result, before the next problem is displayed. (use setTimeout)

// this.state.numOne

let MathGame = React.createClass({

  getInitialState() {
    return {
      numOne: 0,
      numTwo: 0
    }
  },

  randomNumGenerator() {
    console.log('I am this 1: ' + this.state.numOne)
    let numOne = Math.floor(Math.random() * (1, 15)) + 1;
    let numTwo = Math.floor(Math.random() * (1, 15)) + 1;
    console.log('I am this 2: ' + this.state.numOne)

    //Will render only after updating GIS
    this.setState({numOne, numTwo}) 
    console.log('I am this 3: ' + this.state.numOne)

  },
  //Before we render do this first
  componentDidMount(){
    this.randomNumGenerator()
    console.log('I am this 4: ' + this.state.numOne)
  },

  //Beware that render must finish before invoking anything else
  render() {
    console.log('I am this 5: ' + this.state.numOne)
    //Render a random number -- later store this in a variable to be reused
    // return(<h1>Random Number One: {Math.floor(Math.random() * (1, 15)) + 1}</h1>);
    // Asking if numOne is truthy
    // let numOne = this.state.numOne ? this.state.numOne : this.randomNumGenerator()
    // let numTwo = this.state.numTwo ? this.state.numTwo : this.randomNumGenerator()

     return(
      <div className='random-numbers'>
        <span className='numbersMain'>{this.state.numOne}</span>
        <span className='operand'>+</span>
        <span className='numbersMain'>{this.state.numTwo}</span>
      </div>  
    )
  }

});

ReactDOM.render(
  <MathGame />,
  document.getElementById('random-numbers')
);