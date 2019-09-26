import React, { Component } from 'react';
import Display from './components/display/display';
import Keys from './components/inputs/inputs';
import './App.css';

class App extends Component {

  state ={
    displayAction: '',
    prevInput: 0,
    operatorSign: '',
    prevOperatorSign:  ''
  }

  showValue = (event) => {
    console.log(event);
    this.setState({displayAction: this.state.displayAction.concat(event)});
    
  }



  checkOperator = (operator) => {
    //check in the past
    if(this.state.prevOperatorSign && this.state.prevOperatorSign.length > 0){
      if(this.state.prevOperatorSign === 'div') {
        const answer = Number(this.state.prevInput ,10) / Number(this.state.displayAction);
        console.log(Number(this.state.prevInput ,10)+ '/' + Number(this.state.displayAction) + ' Answer = '+answer);
        this.setState({
          operatorSign: operator,
          prevInput: answer
        });
      }

      if(this.state.prevOperatorSign === 'mul') {
        const answer = Number(this.state.prevInput ,10) * Number(this.state.displayAction);
        console.log(Number(this.state.prevInput ,10)+ '*' + Number(this.state.displayAction) + ' Answer = '+answer);
        this.setState({
          operatorSign: operator,
          prevInput: answer
        });
      }

      if(this.state.prevOperatorSign === 'plus') {
        const answer = Number(this.state.prevInput ,10) + Number(this.state.displayAction);
        console.log(Number(this.state.prevInput ,10)+ '+' + Number(this.state.displayAction) + ' Answer = '+answer);
        this.setState({
          operatorSign: operator,
          prevInput: answer
        });
      }

      if(this.state.prevOperatorSign === 'minus') {
        const answer = Number(this.state.prevInput ,10) - Number(this.state.displayAction);
        console.log(Number(this.state.prevInput ,10)+ '-' + Number(this.state.displayAction) + ' Answer = '+answer);
        this.setState({
          operatorSign: operator,
          prevInput: answer
        });
      }

    } else {
      console.log('Can not find operator' );
      //not find pass op, take present op to prev op
      this.setState({
        prevOperatorSign: operator,
      });
    }

  }

  checkPrev = (sign) => {
    if(this.state.prevInput && this.state.prevInput.length > 0) {
      console.log('It has number!');
      return this.state.prevInput;
    }
    else {
      console.log('No previous number');
      this.setState({
          prevInput: this.state.displayAction,
          //operatorSign: sign
      });
    }
  }



  multiplyNum = () => {
    this.checkPrev('mul');
    this.checkOperator('mul', this.state.currentInput);
    this.setState({displayAction: ''});
  }

  devideNum = () => {
  
    this.checkPrev('div');
    this.checkOperator('div', this.state.currentInput);
    this.setState({displayAction: ''});
  }

  plusNum = () => {
    this.checkPrev('plus');
    this.checkOperator('plus', this.state.currentInput);
    this.setState({displayAction: ''});
  }

  minusNum = () => {
    this.checkPrev('minus');
    this.checkOperator('minus', this.state.currentInput);
    this.setState({displayAction: ''});
  }

  answer = () => {
    this.checkPrev();
    //this.setState({operatorSign: [this.state.prevOperatorSign]});
    if(this.state.operatorSign === 'div'||this.state.prevOperatorSign === 'div') {
      const answer = Number(this.state.prevInput ,10) / Number(this.state.displayAction);
      console.log('Final Answer = '+answer);
      this.setState({
        operatorSign: '',
        prevInput: answer,
        displayAction: answer,
        prevOperatorSign: ''
      });
    }
    if(this.state.operatorSign === 'mul'||this.state.prevOperatorSign === 'mul') {
      const answer = Number(this.state.prevInput ,10) * Number(this.state.displayAction);
      console.log('Final Answer = '+answer);
      this.setState({
        operatorSign: '',
        prevInput: answer,
        displayAction: answer,
        prevOperatorSign: ''
      });
    }
    if(this.state.operatorSign === 'plus'||this.state.prevOperatorSign === 'plus') {
      const answer = Number(this.state.prevInput ,10) + Number(this.state.displayAction);
      console.log('Final Answer = '+answer);
      this.setState({
        operatorSign: '',
        prevInput: answer,
        displayAction: answer,
        prevOperatorSign: ''
      });
    }
    if(this.state.operatorSign === 'minus'||this.state.prevOperatorSign === 'minus') {
      const answer = Number(this.state.prevInput ,10) - Number(this.state.displayAction);
      console.log('Final Answer = '+answer);
      this.setState({
        operatorSign: '',
        prevInput: answer,
        displayAction: answer,
        prevOperatorSign: ''
      });
    }
  }


  render() {

    return(
      <div className="App">
        <Display>
          <p>{this.state.prevOperatorSign}  {this.state.displayAction}</p>
        </Display>
        <Keys 
              id={new Date()}
              plus={this.plusNum}
              minus={this.minusNum}
              mul={this.multiplyNum}
              div={this.devideNum}
              ans={this.answer}
              reset= {() => this.setState({displayAction: '', operatorSign: '', prevOperatorSign:'', prevInput: ''})}
              value= {(event) => this.showValue(event)}/>
              {/*<p>Operator : {this.state.operatorSign}</p>
              <p>PrevOperator : {this.state.prevOperatorSign}</p>
              <p>currentInput : {this.state.displayAction}</p>
              <p>prevInput : {this.state.prevInput}</p>*/}
           
      </div>
    );
  }
}

export default App;
