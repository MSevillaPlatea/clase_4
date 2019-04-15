import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';


class BarraSup extends Component {
    render(){
return(
    <div id='navegacion'>
<Navbar color="dark" expand='md'/>
<Input placeholder='Search'/>
    </div>
);
}
}
export default BarraSup;