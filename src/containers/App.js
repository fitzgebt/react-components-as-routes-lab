import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home}/>
        <Route 
          exact path="/movies" 
          component={Movies} 
          movies={props.movies}/>
        <Route 
          exact path="/directors" 
          component={Directors} 
          directors={props.directors}/>
        <Route 
          exact path="/actors" 
          component={Actors} 
          actors={props.actors}/>
      </div>
    </Router>
  );
};

export default App
