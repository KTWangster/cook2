import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./ClassPkgs.css"

class ClassPkgs extends Component {
    render() {
        return (
            <Container fluid>
            <Row>
                <Jumbotron />
            </Row>
            <Row>
                <Col size="md-12">
                    <div className="col-sm-12 selectClass">
                        <h2>Choose From Our Selection of Packages</h2>
                        <hr className="line" />
                    </div>
                </Col>
            </Row>
                
            </Container>
        )
    }
}

export default ClassPkgs;