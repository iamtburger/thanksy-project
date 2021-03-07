import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	CardTextHolder: {
		color: "white",
		borderRadius: "4px",
		fontSize: "1.5em",
		fontWeight: "500",
		backgroundColor: "rgba(5, 15, 27, 0.7)",
		minWidth: "40%",
		maxWidth: "80%",
		margin: "auto",
		padding: "20px",
	},
	CardTitle: {
		zIndex: "1",
		position: "relative",
	},
	CardText: {
		zIndex: "1",
		display: "flex",
		position: "relative",
		textAlign: "center",
	},
});

function CardTextBox(props) {
	const { title, desc } = props;
	const classes = useStyles();

	return (
		<div className={classes.CardTextHolder}>
			<div className={classes.CardTitle}>
				<h1>{title}</h1>
			</div>

			<>
				<div className={classes.CardText}>
					<p>{desc}</p>
				</div>
			</>
		</div>
	);
}

export default CardTextBox;
