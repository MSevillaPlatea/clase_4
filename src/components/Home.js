import React, { Component } from 'react';
import Gallery from './Gallery';
import Banner from './Banner';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from './Navigation';
import BarraSup from './BarraSup';
import {Col, Row} from 'reactstrap';


class Home extends Component {
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
                        <Gallery/>
                        <Banner/>
                    </Col>
                </Row>
                </Container>

);
}
}
export default Home;

