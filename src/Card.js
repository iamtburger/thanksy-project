import React from "react";
import CardTextBox from "./CardTextBox";
import CardNames from "./CardNames";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	card: {
		height: "60vh",
		paddingTop: "30px",
		width: "40vw",
		minWidt: "fit-content",
		boxShadow:
			"0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)",
		margin: "40px",
	},
	"@media (max-width: 1300px)": {
		card: {
			fontSize: "0.8em",
		},
	},
	"@media (max-width: 1000px)": {
		card: {
			width: "70vw",
		},
	},
	"@media (max-width: 600px)": {
		card: {
			width: "90vw",
			fontSize: "0.7em",
		},
	},
	cardFooter: {
		display: "flex",
		justifyContent: "flex-start",
		paddingLeft: "30px",
		fontFamily: "'Bangers', cursive",
		fontSize: "2em",
		"& > h3": {
			margin: "20px",
		},
	},
});

const Card = React.forwardRef((props, ref) => {
	const classes = useStyles();
	return (
		<div
			ref={ref}
			className={classes.card}
			style={{ backgroundImage: `url(${props.background})` }}
		>
			{" "}
			<CardTextBox
				title={props.title}
				desc={props.desc}
				updateTitle={props.setTitle}
				updateText={props.setText}
			/>
			<CardNames
				from={props.from}
				setSender={props.setSender}
				setReceiver={props.setReceiver}
				to={props.to}
			/>
			<footer className={classes.cardFooter}>
				<h3>THANKSY</h3>
			</footer>
		</div>
	);
});

export default Card;
