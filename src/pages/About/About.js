import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";

class About extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                    <div className="col-md-12 containerBox inputBox">
                            <div className="col-lg-3">
                                <h1>Chef's Name Here</h1>
                            </div>
                            <div className="col-lg-1 hidden-xs hidden-sm hidden-md">
                                <p className="border">&nbsp;</p>
                            </div>
                            <div className="col-lg-8 ">
                                <p className="aboutText">Lorem ipsum dolor amet cardigan glossier XOXO, twee flexitarian before they sold out squid jianbing PBR&B hammock bespoke DIY. Waistcoat biodiesel affogato four dollar toast tote bag food truck kitsch. Wolf vexillologist celiac migas enamel pin raw denim air plant helvetica truffaut pickled glossier. Whatever disrupt gastropub flexitarian yuccie XOXO, swag hella street art.</p>
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;