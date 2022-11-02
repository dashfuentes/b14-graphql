import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
			<Link className="navbar-brand" to="/">
				Message App
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Message List
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/new-message">
							Create Message
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
