import React, {Component} from 'react';
import { Navbar, Input } from 'reactstrap';


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