import React, { Component } from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import { Col, Row, Button } from "reactstrap";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { getPlaylists } from "../requests";

class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: [],
      form: {
        name: ""
      }
    };
  }
  componentWillMount() {
    getPlaylists().then(response =>
      this.setState({ playlists: response.data })
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.form);
  };

  handleInputChange = e => {
    this.setState({
      form: {
        name: e.target.value
      }
    });
    // console.log(e.target.name, e.target.value);
  };

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
                <h1>Mis Playlists</h1>
                <p>
                  {this.state.playlists.map(p => {
                    return (
                      <Link to={`/playlists/${p.id}`}>
                        <p>{p.name}</p>
                      </Link>
                    );
                  })}
                </p>
                <form>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      onChange={this.handleInputChange}
                      value={this.state.form.name}
                    />
                  </div>
                  <div>
                    <Button onClick={this.handleSubmit}>Crear lista</Button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Playlists;
