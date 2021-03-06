import React from "react";
import EditCardNamesForm from "./EditCardNamesForm";
import useToggleState from "./hooks/useToggleState";
import "./CardNames.css";

function CardNames(props) {
	const { from, to } = props;

	return (
		<div className="names">
			<div className="name">
				<h3>{from}</h3>
				<p>From</p>
			</div>
			<div className="name">
				<h3>{to}</h3>
				<p>To</p>
			</div>
		</div>
	);
}

export default CardNames;
