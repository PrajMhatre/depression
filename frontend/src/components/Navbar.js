import * as React from "react";
import logo from "../mental-health.png";
import "./Navbar.css";
export default function Navbar() {
	return (
		<nav className="navbar-container-box">
			<a href="/">
				<img src={logo} className="logoClass" alt="Mental-Health" />
			</a>
			<h2 class="nav-center">Mental Health Prediction </h2>
			<div className="navlinks">
				<a class="nav-link" href="/help">
					Self-help Advice
				</a>
				<a class="nav-link" href="/survey">
					Take Survey
				</a>
			</div>
		</nav>
	);
}
