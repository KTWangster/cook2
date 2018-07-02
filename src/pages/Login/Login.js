import React, { Component } from 'react'
import {Row, Container } from "../../components/Grid";
import { UserInput } from "../../components/UserLog";

class Login extends Component {
    render() {
        return (
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
                            <button className="btn btn-warning loginBtn">Login</button>
                        </form>
                    </div>
                    <a class="g-signin2" href="/auth/google">Sign In with Google</a>
                </Row>
            </Container>
        )
    }
}

export default Login;