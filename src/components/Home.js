import React, { Component } from "react";
import Gallery from "./Gallery";
import Banner from "./Banner";
import { Container } from "reactstrap";
import Navigation from "./Navigation";
import Menu from "./Menu";
import { Col, Row } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Container fluid>
          <Row>
            <Col lg={2}>
              <Navigation />
            </Col>

            <Col>
              <Banner />
              <Gallery />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
