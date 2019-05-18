import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Playlists from "./Playlists";
import PlaylistDetail from "./PlaylistDetail";
import Register from "./Register";
import { Login } from "./Login";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/detail" component={Detail} />
        <Route path="/playlists" exact component={Playlists} />
        <Route path="/playlists/:id" component={PlaylistDetail} />
      </Router>
    );
  }
}

export default App;
