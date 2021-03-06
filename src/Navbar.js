import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	navContainer: {
		display: "flex",
		alignItems: "center",
		color: "white",
		backgroundColor: "#38393b",
		height: "6vh",
		textDecoration: "none",
		paddingLeft: "20px",
		boxShadow: "0 3px 5px rgba(0, 0, 0, 0.2)",
		"& a:visited, & a:link": {
			fontWeight: "500",
			color: "white",
			textDecoration: "none",
			marginLeft: "10px",
			marginRight: "10px",
		},
		"& h3": {
			fontFamily: "'Bangers', cursive",
			marginRight: "20px",
			fontSize: "2em",
		},
	},
});

function Navbar() {
	const classes = useStyles();
	return (
		<nav className={classes.navContainer}>
			<h3>
				<Link to="/">THANKSY</Link>
			</h3>
			<Link to="/">Home</Link>
			<Link to="/new">Create New Card</Link>
			<Link to="/cards">Public Cards</Link>
		</nav>
	);
}

export default Navbar;
