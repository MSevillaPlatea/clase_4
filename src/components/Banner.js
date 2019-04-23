import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Spotifact</h1>
            <p className="lead">Banner</p>
            <img src="https://picsum.photos/700/150/?blur=1" alt="1" />
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Banner;
