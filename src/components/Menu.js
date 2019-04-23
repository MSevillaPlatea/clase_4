import React, { Component } from "react";
import { Navbar, Input, Col } from "reactstrap";

class Menu extends Component {
  render() {
    return (
      <div id="navegacion">
        <Col>
          <Navbar color="dark" light expand="md">
            <Col md="6" xs={12}>
              <Input placeholder="Search" />
            </Col>
          </Navbar>
        </Col>
      </div>
    );
  }
}
export default Menu;
