//import dependencies
//stuff other people made
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data';
import SearchBar from './searchbar'
import ProductTable from './ProductTable'
//custom stuff


class App extends Component {
  constructor(props){
    super(props);
    this.products = props.products
  }
  render() {
    return (
      <div className="app container">
      <SearchBar />
      <ProductTable products
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
