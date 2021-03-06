import React from "react";
import "./CardTextBox.css";
import EditCardTitleForm from "./EditCardTitleForm";
import EditCardTextForm from "./EditCardTextForm";
import useToggleState from "./hooks/useToggleState";

function CardTextBox(props) {
	const { title, desc } = props;

	return (
		<div className="CardTextHolder">
			<div className="CardTitle">
				<h1>{title}</h1>
			</div>

			<>
				<div className="CardText">
					<p>{desc}</p>
				</div>
			</>
		</div>
	);
}

export default CardTextBox;
