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

    createUser = user => {
        var request = new XMLHttpRequest();
        request.open('POST', '/createUser', true);
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
                        <p>First Name</p>
                            <UserInput 
                                name="firstName"
                                placeholder="First Name"
                            />
                        <p>Last Name</p>
                            <UserInput 
                                name="lastName"
                                placeholder="Last Name"
                            />
                        <p>City</p>
                            <UserInput 
                                name="city"
                                placeholder="Philadelphia"
                            />
                        <p>State</p>
                            <UserInput 
                                name="state"
                                placeholder="PA"
                            />
                        <p>Zip Code</p>
                            <UserInput 
                                name="zipCode"
                                placeholder="Zip Code"
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