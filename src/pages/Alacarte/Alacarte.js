import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import MenuCard from "../../components/MenuCard";
import "./Alacarte.css"

class Alacarte extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Jumbotron />
                </Row>
                <Row>
                    <Col size="md-12">
                        <div className="col-sm-12 selectClass">
                            <h2>Choose From Our Menu of Individual Classes</h2>
                            <hr className="line" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <MenuCard />
                    <MenuCard />
                    <MenuCard />
                </Row>
            </Container>
        )
    }
}

export default Alacarte;