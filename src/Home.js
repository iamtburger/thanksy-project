import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
	},
	logo: {
		fontFamily: "'Bangers', cursive",
		fontSize: "3em",
	},
	intro: {
		width: "30vw",
		alignSelf: "center",
	},
	btn: {
		width: "10em",
		height: "3em",
		marginTop: "20px",
		backgroundColor: "#5e1b00",
		border: "0px solid white",
		borderRadius: "12px",
		color: "white",
		padding: "15px",
		boxShadow: "0 6px 30px -10px rgba(0, 0, 0, 0.61)",
		"&:hover": {
			cursor: "pointer",
		},
		"&:focus": {
			outline: "none",
		},
	},
});

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<h1 className={classes.logo}>THANKSY</h1>
			<h2>You need to say thank you, but don't know how?</h2>
			<h3>We got you covered!</h3>
			<p className={classes.intro}>
				Thanksy is the right tool when you are working in a corporate
				environment, or either in a small company, and want to say
				"Thank you!" to a colleague. But saying thanks in the email just
				does not cut it, but buying a bottle of wine and a box of
				bonbons might be a bit too much. For this occasion you can just
				create a digital version of a Thank you card that you can
				download or share with your colleague!
			</p>
			<h3>Let's say thanks to someone!</h3>
			<i className="fas fa-chevron-down"></i>
			<Link to="/new">
				<button className={classes.btn}>Create Card</button>
			</Link>
		</div>
	);
}

export default Home;
