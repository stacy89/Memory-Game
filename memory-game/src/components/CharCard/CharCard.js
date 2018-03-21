import React from "react";
import "./CharCard.css";

const CharCard = props => (
	// cards
	<div className="container">
		<div className="card">
			<div className="img-container">
				<a onClick={() => props.guesses(props.id)}>
					<img alt={props.name} src={props.image} />
				</a>
			</div>
		</div>
	</div>
);

export default CharCard;