import React from "react";
import "./NavBar.css";

const NavBar = props => (
	<div className="row">
		<div className="col-md-12">
			<ul className="nav">
  			<li className="nav-item">
  		  	<a className="nav-link" href="/">Rocket Power Memory Game</a>
  			</li>
  				<li className="nav-item">{props.msg}</li>
  				<li className="nav-item">Score: {props.currentScore} | Top Score: {props.topScore}</li>
			</ul>
		</div>	
	</div>
);

export default NavBar;