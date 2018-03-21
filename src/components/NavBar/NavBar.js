import React from "react";
import "./NavBar.css";

const NavBar = props => (
	<div className="row">
		<div className="col-md-12">
			<ul className="nav font">
  			<li className="nav-item">
  		  	<a className="nav-link text-danger" href="/">Rocket Power Memory Game</a>
  			</li>
  			<li className="nav-item msg mr-auto p-2 text center">{props.msg}</li>
  			<li className="nav-item score p-2">Score: {props.currentScore} | Top Score: {props.topScore}</li>
			</ul>
		</div>	
	</div>
);

export default NavBar;