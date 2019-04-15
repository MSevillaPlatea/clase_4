import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
let Banner = function(props){
return(
<div id="banner">
<Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
         <img src="https://placedog.net/200" alt="1"/>
        </Container>
      </Jumbotron>

</div>
)
}
export default Banner