import React from "react";
import "./NavBar.css";

const NavBar = props => (
	<ul className="nav">
  	<li class="nav-item">
    	<a class="nav-link" href="/">Rocket Power Memory Game</a>
  	</li>
  	<li class="nav-item">{props.msg}</li>
  	<li class="nav-item">Score: {props.currentScore} | Top Score: {props.topScore}</li>
	</ul>
);

export default NavBar;