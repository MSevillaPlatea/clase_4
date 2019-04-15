import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from './Navigation';
import BarraSup from './BarraSup';
import {Col, Row} from 'reactstrap';


class Detail extends Component {
        render(){
                return(
                <Container>
                    <Row>
                        <Col>
                            <BarraSup/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3}>
                            <Navigation/>
                        </Col>

                    <Col>
                        <div>
                            <h1>Detalles</h1>
                        </div>
                    </Col>
                </Row>
                </Container>

);
}
}
export default Detail;
