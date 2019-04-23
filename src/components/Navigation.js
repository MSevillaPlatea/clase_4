import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CurrentPlaylist from "./CurrentPlaylist";

class Navigation extends Component {
  render() {
    return (
      <div>
        <h2>Navegación</h2>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Detail">Detail</Link>
          </li>
          <li>Gallery</li>
          <li>salir</li>
        </ul>
        <CurrentPlaylist />
      </div>
    );
  }
}
export default Navigation;

//
// ──────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: H E C H O   C O M O   F U N C I O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//

/* let Navigation = function(props) {
  return (
    <Router>
      <h2>Navegación</h2>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Detail">Detail</Link>
        </li>
        <li>Gallery</li>
        <li>salir</li>
      </ul>
    </Router>
  );
};
export default Navigation; */
