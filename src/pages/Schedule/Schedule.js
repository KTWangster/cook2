import React, { Component } from "react";
import Calendar from "../../components/Calendar";
import { Col, Row, Container } from "../../components/Grid";
import "./Schedule.css"

class Schedule extends Component {
 render() {
    return (
      <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Calendar />
                    </Col>
                </Row>
            </Container>
    )
  };
}

export default Schedule;