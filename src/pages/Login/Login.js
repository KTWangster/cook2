import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Row, Container } from "../../components/Grid";
import { UserInput } from "../../components/UserLog";



class Login extends Component {
    constructor() {
		super()
		this.state = {
			username: "",
			password: "",
			redirectTo: null
        }
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/userprofile'
		})
	}
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container fluid>
                    <Row>
                        <div className="col-sm-6">
                            <form className="login">
                                <p>Username</p>
                                    <UserInput 
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                        name="username"
                                        placeholder="&#xf007;   Username"
                                    />
                                <p>Password</p>
                                    <UserInput 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        name="password"
                                        placeholder="&#xf023;   Password"
                                    />
                                <button className="btn btn-warning loginBtn">Login</button>
                            </form>
                        </div>
                    </Row>
                </Container>
            )
        } 
    }
}

export default Login;