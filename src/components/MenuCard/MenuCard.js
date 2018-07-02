import React from "react";
import "./MenuCard.css"

const MenuCard = (props) => (
  <div className="card">
      <div className="img-container">
        {/* <img alt={props.itemName} src={props.itemImage} /> */}
      </div>
      <div className="content">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
);

export default MenuCard;

// class MenuCard extends Component {
//     render() {
//         return (
//             // <Container>
//             //     <Row>
//             //         <div className="priceTag">
//             //         <Col className="sm-2">$50</Col>
//             //         </div>
//             //     </Row>
//             //     <Row>
//             //         <Col className="sm-12 foodImg"></Col>
//             //     </Row>
//             //     <Row>
//             //         <div className="description">A description of the class.</div>
//             //     </Row>
//             // </Container>
//         //      <div className="jumbotron text-center">
//         //      <div className="overlay">
//         //      </div>
//         //      <div className="background-image">
//         //      </div>
//         //      <div className="caption">
//         //        <h1>Learn to Cook</h1>
//         //        <p>Impress all your friends</p>
//         //      </div>
//         //    </div>

//         )

//     }
// }

// export default MenuCard;