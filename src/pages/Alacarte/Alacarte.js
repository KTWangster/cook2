import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import ProductList from "../../components/ProductList/ProductList";
import "./Alacarte.css"

class Alacarte extends Component {
  render() {
    const options = [{ title: "Homemade Pasta", description: "The best ever!" }, { title: "Homemade Sausages", description: "Really good!" }, { title: "Charcuterie", description: "Oh man!" }];
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
              <ProductList list={options} /> 
            </Container>
    )
  }
}

export default Alacarte;