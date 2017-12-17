import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email:'', password:'' };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value});
	}

	handleSubmit(e) {
		e.preventDefault();
		let payload = { email:this.state.email, password:this.state.password };
		document.getElementById('submitForm').setAttribute('disabled', 'true');
		this.props.handleSubmit(payload);
		
	}

	render() {
		return (
			<form className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="email" className="col-md-4 control-label">E-Mail Address</label>

					<div className="col-md-6">
						<input required autoFocus
							id="email" type="email" className="form-control" name="email" value={this.state.email}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<label htmlFor="password" className="col-md-4 control-label">Password</label>

					<div className="col-md-6">
						<input required
							id="password" type="password" className="form-control" name="password" value={this.state.password}
							onChange={this.handleInputChange}/>
					</div>
				</div>

				<div className="form-group">
					<div className="col-md-8 col-md-offset-4">
						<button type="submit" className="btn btn-primary" id="submitForm">
							Login
						</button>

						{/* <a className="btn btn-link" href="/">
							Forgot Your Password?
						</a> */}
					</div>
				</div>
                <hr/>
                <div className="form-group">
                    <div className="col-md-8 col-md-offset-4">
                        <a href="/auth/github" target="_self" className="btn btn-default btn-lg">Login using GitHub</a>
                    </div>
                </div>
			</form>
		);
	}
}