import axios from "axios";
import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import Card from "./Card";
import Navbar from "./Navbar";

const useStyles = createUseStyles({
	container: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
});

function Cards() {
	const [publicCards, setPublicCards] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:5000/cards")
			.then((res) => setPublicCards(res.data))
			.catch((err) => console.log(err));
	}, []);
	const classes = useStyles();
	return (
		<>
			<div className={classes.container}>
				{publicCards.map((card) => {
					return (
						<Card
							desc={card.description}
							title={card.title}
							from={card.sender}
							to={card.receiver}
							background={card.imagePath}
							key={card._id}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Cards;
