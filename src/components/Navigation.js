import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let Navigation = function(props){
return(
    <Router>
<h2>Navegacion</h2>
<ul>
    <li><Link to="/home">Home</Link></li>
    <li><Link to="/detail">Detail</Link></li>
    <li><Link to="/">Gallery</Link></li>
    <li><Link to="/">salir</Link></li>
</ul>
</Router>
)
}
export default Navigation