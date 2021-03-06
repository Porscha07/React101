import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Link} from 'react-router-dom';
import nba from './nba';
import $ from 'jquery';
import Movie from './movie'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gists:[]
    }
  }
  //where you issue the AJAX request  
  componentDidMount() {
    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman',(gists)=>{
      //this.state.gists=gists BAD!!
      console.log(gists)
      this.setState({
        gists:gists.results
      })
    })
  }
  render() {
    if(this.state.gists.length ==0){
      return(<h1>Loading...</h1>)
    }
    console.log(this.state.gists)
    //LOCAL variable called gist.
    //NOT the same thing as this.state.gists.
    const localGists =[];
    this.state.gists.map((gist,index)=>{
        localGists.push(
          <div key={index}>
            <Link to={`/g/${gist.id}`}>{gist.title}</Link>
          </div>
        )
    });
    return (
          <Router>
          {/* the router component goes around EVERYTHING router needs control */}
              <div className="container">
                <h1>Welcome to the gists page</h1>
                  <Route path="/nba" component={nba} />
                  <div className="movie-list col-sm-6">
                        {localGists}
                  </div>
                  <div className="col-sm-6">
                      <Route path="/g/:movieId" component={Movie} />
                  </div>
              </div>
          </Router>
    );
  }
}

export default App;
