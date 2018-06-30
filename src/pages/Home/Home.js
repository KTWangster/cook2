import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Footer from "../../components/Footer";
import "./Home.css"

class Home extends Component {
    // Sets component's initial state
    state = {

    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <Jumbotron />
                </Row>
                <Row>
                    <Col size="md-12">
                    </Col>
                </Row>
                <Footer />
            </Container>
        )
    }
}

export default Home