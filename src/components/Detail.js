import React, { Component } from "react";
import { Container } from "reactstrap";
import Navigation from "./Navigation";
import { Col, Row, Button } from "reactstrap";
import Menu from "./Menu";
import { connect } from "react-redux";

class Detail extends Component {
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
              <div>
                <h1>Detalles</h1>
                <p>{this.props.detalles}</p>
                <Button>+</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
let mapStateToProps = state => {
  return {
    detalles: state.appTitle
  };
};
export default connect(
  mapStateToProps,
  null
)(Detail);
