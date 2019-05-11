import React, { Component } from "react";
import Navigation from "./Navigation";
import Menu from "./Menu";
import { Col, Row, Container } from "reactstrap";
import { getPlaylist } from "../requests";

class PlaylistsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: []
    };
  }
  componentWillMount() {
    getPlaylist(this.props.match.params.id).then(response =>
      this.setState({ playlist: response.data })
    );
  }

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
                <h1>Detalle de Playlist</h1>{" "}
                <h2>Nombre: {this.state.playlist.name}</h2>
                <p>Creada: {this.state.playlist.created_at}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PlaylistsDetail;
