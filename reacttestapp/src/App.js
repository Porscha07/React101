import React, { Component } from 'react';
import './App.css';

class Parent extends Component {
  constructor(props){
    super(props);
  }
  render(){
     
    return (
      <div>
        <h1>Hi Kids!</h1>
        {this.props.children}
      </div>
    );
  }
}
class App extends Component {
  render(){
    return(
      <Parent>
      <h2>These are the children!</h2>
      </Parent>
    );
  }
}
export default App; //allows app to be imported into other files.\
//state is passed via functions that can be called via props to other components.
//state is a moment of a 
