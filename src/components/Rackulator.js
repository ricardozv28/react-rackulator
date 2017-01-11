import React from 'react';
import Keypad from './Keypad'
import Display from './Display'
import Racks from './Racks'



class Rackulator extends React.Component{
  constructor(props){
    super(props);
    this.pressKey = this.pressKey.bind(this);
    this.run = this.run.bind(this);
    this.racking = this.racking.bind(this);
    this.list = this.list.bind(this);
    this.state = {
                  num1: "0",
                  total: "0",
                  numbers : ["1","2","3","4","5","6","7","8","9","start","0","reset"],
                  weights:[45,35,25,15,10,5,2.5,2,1.25,1,0.5],
                  racks: [],
                  result: 0
                }
  }
  pressKey(id){
    let total = this.state.total;
    let num = this.state.num1;
    if(id === "start"){
      let weight = this.state.num1;
      this.setState({ result: weight })
      this.run(weight);
    }else if(id === "reset"){
      this.setState({num1: "0" , total: "0", result: 0, racks:[]});
    }else{
      if (total === "0" && num === "0"){
        num = id;
      }else{
        num += id;
      }
      this.setState({num1: num});
    }
  }

  run(weight){
    let aux = parseInt(weight,0);
    let weights = this.state.weights;
    this.racking(aux, 45, weights)
    this.setState({ num1: "0" , total: "0" });
  }

  racking(weight, bar_weight, weights) {
    let toRack = [];
    let left = weight - bar_weight;
    let index = 0;

    if(weight <=44){
      alert('Do you even lift, bro?')
    }else if(weight >500){
      alert("CALM DOWN DUDE!")
    }else{
      while (left > 0) {
        // find largest possible weight to add
        let found = false;
        for(let i=0; i<weights.length; i++) {
          let amt = weights[i]*2;
          if ( amt <= left ) {
            left -= amt;
            toRack[index] = weights[i];
            index++;
            found = true;
            break;
          }
        }
        if (!found) {
          toRack = []
          alert('I cannnot do that, please try less weight');
          break;
        }
      }
    } return this.list(toRack);
  }

  list(toRack){
    return this.setState({racks:toRack});
  }

  render(){

    return (
      <div>
        <div className="row">
          <Display num1={this.state.num1}/>
          <Keypad numbers={this.state.numbers} pressKey={this.pressKey}/>
          <h1 className="col offset-m3 offset-l3 m6 l6 s12">{this.state.result} lbs</h1>
          <Racks racks={this.state.racks}/>
        </div>
      </div>
    );
  }
}

export default Rackulator;
