import React, { Component } from 'react';
import '../App.css'
import { BrowserRouter as Router ,Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
<Router>
  <Route path="/" exact component={Home}/> 
  <Route path="/detail" component={Detail}/>
</Router>
    );
  }
}

export default App;
