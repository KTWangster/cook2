import React, { Component } from "react";
import { Row, Container } from "../../components/Grid";
import { UserInput } from "../../components/UserLog";

class Register extends Component {
    constructor(props) {
        super(props);
        this.createUser = this.createUser.bind(this);
        this.state = { 
            user: {
                display_name: "Kristian Fidrych",
                username: "kfidrych",
                password: "password",
                location: "Philadelphia, PA 19148"
            // display_name: $("#firstname").val().trim() + " " + $("#lastname").val().trim(),
            // username: $("#username").val().trim(),
            // password: $("#password").val().trim(),
            // location: $("#city").val().trim() + ", " + $("#state").val().trim() + " " + $("#zipcode").val().trim()
            }
        };
    }

//     super(props)
//     this.state = {
//         name: "",
//         username: "",
//         password: "",
//         email: "",
//         address: "",
//         city: "",
//         state: "", 
//         zip: "",
//         phone: "",
//     }
// };

// handleUser = event => {
//     this.setState({
//         user: {
//         name: this.state.user.name,
//         username: event.target.value,
//         password: this.state.user.password,
//         email: this.state.user.email,
//         address: this.state.user.address,
//         city: this.state.user.city,
//         state: this.state.user.state,
//         zip: this.state.user.password,
//         phone: this.state.user.phone
//         }
//     });
// }

    createUser = user => {
        var request = new XMLHttpRequest();
        request.open('POST', '/register', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        let data = {
          display_name: user.display_name,
          username: user.username,
          password: user.password,
          location: user.location
        };
        request.send(data);
        console.log(data);
    }

    render() {
        return (
            <div>
            <Container fluid>
                <Row>
                <div className="col-sm-6">
                    <form className="login">
                            <p>Name</p>
                                <UserInput 
                                    name="name"
                                    placeholder="Name"
                                />
                            <p>Username</p>
                                <UserInput 
                                    name="username"
                                    placeholder="&#xf007;   Username"
                                />
                            <p>Password</p>
                                <UserInput 
                                    name="password"
                                    placeholder="&#xf023;   Password"
                                />
                            <p>Email</p>
                                <UserInput 
                                    name="email"
                                    placeholder="Email"
                                />
                            <p>Address</p>
                            <UserInput 
                                name="address"
                                placeholder="Address"
                            />
                            <p>City</p>
                                <UserInput 
                                    name="city"
                                    placeholder="Philadelphia"
                                />
                            <p>State</p>
                                <UserInput 
                                    name="state"
                                    placeholder="Pennsylvania"
                                />
                            <p>Zip Code</p>
                                <UserInput 
                                    name="zipCode"
                                    placeholder="Zip Code"
                                />
                            <p>Phone Number</p>
                            <UserInput 
                                name="phonne"
                                placeholder="xxx-xxx-xxxx"
                            />
                        <button className="btn btn-warning registerBtn" onClick={() => this.createUser(this.state.user)}>Register</button>
                    </form>
                </div>
                </Row>
            </Container>
        </div>
        )
    }
           
}

export default Register;