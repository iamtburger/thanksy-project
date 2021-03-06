import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

function SharedCard(props) {
	const { id } = props.match.params;
	const [text, setText] = useState("");
	const [title, setTitle] = useState("");
	const [sender, setSender] = useState("");
	const [receiver, setReceiver] = useState("");
	const [background, setBackground] = useState(
		"https://images.unsplash.com/photo-1552907634-50d3c1dc6e46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
	);

	useEffect(async () => {
		try {
			const res = await axios.get(`http://localhost:5000/card/${id}`);
			setText(res.data.description);
			setTitle(res.data.title);
			setSender(res.data.sender);
			setReceiver(res.data.receiver);
			setBackground(res.data.imagePath);
		} catch (error) {
			console.log(error);
		}
	});

	return (
		<div className="container">
			<div className="box">
				<div className="shadow">
					<Card
						desc={text}
						title={title}
						from={sender}
						to={receiver}
						background={background}
					/>
				</div>
			</div>
		</div>
	);
}

export default SharedCard;
