import React from "react";
import Card from "./Card";

function SharedCard(props) {
	console.log(props.match);
	const { title, from, to } = props.match.params;
	const convertToString = (str) => {
		var hex = str.toString();
		var text = "";
		for (var n = 0; n < hex.length; n += 2) {
			text += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
		}
		return text;
	};
	const text = convertToString(props.match.params.text);
	return (
		<div className="container">
			<div className="box">
				<div className="shadow">
					<Card text={text} title={title} from={from} to={to} />
				</div>
			</div>
		</div>
	);
}

export default SharedCard;
