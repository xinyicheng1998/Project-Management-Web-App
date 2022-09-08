import React, { Component } from "react";
import { Link } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class HeaderComponent extends Component {
	render() {
		const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

		return (
			<header>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark">
					<div><a href="" className="navbar-brand">🍊</a></div>
					<ul className="navbar-nav">
						{isUserLoggedIn && <li><Link className="nav-link font-weight-bold" to="/welcome/test123">Home</Link></li>}
						{isUserLoggedIn && <li><Link className="nav-link font-weight-bold" to="/todos">Todos</Link></li>}
					</ul>
					<ul className="navbar-nav navbar-collapse justify-content-end">
						{!isUserLoggedIn && <li><Link className="nav-link font-weight-bold" to="/login">Login</Link></li>}
						{isUserLoggedIn && <li><Link className="nav-link font-weight-bold" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
					</ul>
				</nav>
			</header>
		);
	}
}

export default HeaderComponent