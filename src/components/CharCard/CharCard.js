import React from "react";
import "./CharCard.css";

const CharCard = props => (
	// cards not algining next to each other. Tried floating and cols. Have a feeling it for image resizing but couldn't figure out why nothing was working.
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