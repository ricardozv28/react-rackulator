import React from 'react';
import Key from './Key'

class Keypad extends React.Component{
  render(){
    let numbers = this.props.numbers.map (number =>{
      return (<Key id={number} key={number} number={number} pressKey={this.props.pressKey}/>)
    })
    return(
        <div className="col offset-m3 offset-l3 m6 s12 l6">
          {numbers}
        </div>
    );
  }
}

export default Keypad;
