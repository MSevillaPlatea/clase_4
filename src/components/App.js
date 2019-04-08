import React, { Component } from 'react';
import Navigation from './Navigation'
import Gallery from './Gallery'
import Banner from './Banner';
import Home from './Home';

class App extends Component {
  render() {
    return (
<div>
      <Navigation/>
      <Home/>
</div>
    );
  }
}

export default App;
