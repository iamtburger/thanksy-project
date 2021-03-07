import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	names: {
		display: "flex",
		justifyContent: "space-between",
	},
	name: {
		margin: "10% 20% 10% 20%",
		display: "flex",
		flexDirection: "column",
		"& h3": {
			borderBottom: "2px solid white",
			width: "170%",
			alignSelf: "center",
			marginBottom: "-20%",
		},
		"& p": {
			fontStyle: "italic",
		},
	},
});

function CardNames(props) {
	const { from, to } = props;
	const classes = useStyles();

	return (
		<div className={classes.names}>
			<div className={classes.name}>
				<h3>{from}</h3>
				<p>From</p>
			</div>
			<div className={classes.name}>
				<h3>{to}</h3>
				<p>To</p>
			</div>
		</div>
	);
}

export default CardNames;
