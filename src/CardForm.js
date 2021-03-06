import React, { useState } from "react";
import axios from "axios";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
	cardForm: {
		marginTop: "20px",
		borderStyle: "solid",
		borderWidth: "0px",
		borderRadius: "10px",
		boxShadow: "0 6px 30px -10px rgba(0, 0, 0, 0.61)",
		height: "fit-content",
		width: "25vw",
		paddingBottom: "20px",
	},
	"@media (max-width: 1260px)": {
		cardForm: {
			width: "40vw",
		},
	},
	"@media (max-width: 1000px)": {
		cardForm: {
			width: "70vw",
		},
	},
	"@media (max-width: 700px)": {
		cardForm: {
			width: "85vw",
		},
	},
	inputFields: {
		padding: "1em",
		fontFamily: "Montserrat",
	},
	textAreaInput: {
		marginTop: "15px",
		width: "100%",
		minHeight: "8em",
		background: "transparent",
		color: "white",
		fontSize: "0.8em",
		outline: "none",
		border: "none",
		borderBottom: "1px solid white",
		overflow: "hidden",
		resize: "none",
		fontFamily: "Montserrat",
		fontWeight: "300",
	},
	textInput: {
		marginTop: "15px",
		fontFamily: "Montserrat",
		border: "0",
		outline: "0",
		background: "transparent",
		borderBottom: "1px solid white",
		color: "white",
		fontSize: "0.8em",
		fontWeight: "300",
		// backgroundColor: "rgba(5, 15, 27, 0.4)",
		backgroundColor: "transparent",
		width: "100%",
	},
	textLabel: {
		fontSize: "0.9em",
		fontWeight: "500",
	},
	inputBox: {
		marginTop: "1em",
	},
	btn: {
		width: "12em",
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
	selectBackground: {
		display: "flex",
		flexDirection: "column",
		margin: "10px",
	},
	chooseBackground: {
		display: "flex",
		justifyContent: "center",
	},
	hiddenRadio: {
		opacity: "0",
		position: "absolute",
		width: "0",
		height: "0",
	},
	checkBox: {
		width: "80%",
		marginLeft: "20px",
	},
	shareLink: {
		border: "1px solid grey",
		borderRadius: "10px",
		margin: "15px",
		fontSize: "0.9em",
		padding: "8px",
		backgroundColor: "white",
		color: "black",
	},
});

function CardForm(props) {
	const [toggle, setToggle] = useState(false);
	const [shareLink, setShareLink] = useState();
	const classes = useStyles();
	function handleSubmit(e) {
		e.preventDefault();
		const card = {
			imagePath: props.background,
			title: props.title,
			desc: props.desc,
			sender: props.sender,
			receiver: props.receiver,
			public: props.publicCard,
		};
		let cardId;

		axios
			.post("http://localhost:5000/card/create", card)
			// .then((res) => setId(res.data))
			.then((res) => (cardId = res.data))
			// .then(() =>
			// 	navigator.clipboard.writeText(
			// 		`http://localhost:3000/card/${cardId}`
			// 	)
			// )
			// .then(() =>
			// 	alert(
			// 		`Link (http://localhost:3000/card/${cardId}) has been copied to clipboard.`
			// 	)
			// )
			.then(() => setShareLink(`http://localhost:3000/card/${cardId}`))
			.then((s) => setToggle(!s))
			.catch((err) => console.log(err));
	}
	function handleCheckbox() {
		props.setPublicCard(!props.publicCard);
	}
	function handleCopy() {
		navigator.clipboard.writeText(shareLink);
	}

	return (
		<div className={classes.cardForm}>
			<form onSubmit={handleSubmit}>
				<h3>Say what's on your mind!</h3>
				<p>
					<sub>But, please be decent!</sub>
				</p>
				<div className={classes.inputFields}>
					<div className={classes.inputBox}>
						<label className={classes.textLabel}>Title</label>
						<input
							className={classes.textInput}
							type="text"
							value={props.title}
							onChange={props.setTitle}
						/>
					</div>
					<div className={classes.inputBox}>
						<label className={classes.textLabel}>Description</label>
						<textarea
							className={classes.textAreaInput}
							type="text-field"
							value={props.desc}
							onChange={props.setDesc}
						/>
					</div>
					<div className={classes.inputBox}>
						<label className={classes.textLabel}>From</label>
						<input
							className={classes.textInput}
							type="text"
							value={props.sender}
							onChange={props.setSender}
						/>
					</div>
					<div className={classes.inputBox}>
						<label className={classes.textLabel}>To</label>
						<input
							className={classes.textInput}
							type="text"
							value={props.receiver}
							onChange={props.setReceiver}
						/>
					</div>
				</div>
				<div
					className={classes.chooseBackground}
					onChange={props.setBackground}
				>
					<div className={classes.selectBackground}>
						<label htmlFor="lights">
							<img
								src="https://images.unsplash.com/photo-1552907634-50d3c1dc6e46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								style={{ width: "60px", height: "60px" }}
							/>
							<input
								className={classes.hiddenRadio}
								id="lights"
								type="radio"
								name="background"
								value="https://images.unsplash.com/photo-1552907634-50d3c1dc6e46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
							/>
						</label>
					</div>
					<div className={classes.selectBackground}>
						<label htmlFor="solid">
							<img
								src="https://images.unsplash.com/photo-1613758513753-0fdd731e2633?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixlib=rb-1.2.1&q=80&w=1000"
								style={{ width: "60px", height: "60px" }}
							/>
							<input
								className={classes.hiddenRadio}
								id="solid"
								type="radio"
								name="background"
								value="https://images.unsplash.com/photo-1613758513753-0fdd731e2633?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixlib=rb-1.2.1&q=80&w=1000"
							/>
						</label>
					</div>
				</div>
				<div className={classes.checkBox}>
					<label htmlFor="public" id="publicText">
						Do you want to show this card on our Cards page?
					</label>
					<input
						className={classes.checkBoxInput}
						type="checkbox"
						id="public"
						name="public"
						onChange={handleCheckbox}
						checked={props.publicCard}
					/>
				</div>
				<button
					type="submit"
					className={classes.btn}
					onSubmit={handleSubmit}
				>
					Share card <i class="fas fa-share-alt"></i>
				</button>{" "}
				<button
					type="button"
					onClick={() =>
						props.exportComponentAsPNG(props.componentRef)
					}
					className={classes.btn}
				>
					Download Card <i class="fas fa-download"></i>
				</button>
			</form>
			{toggle ? (
				<>
					<div className={classes.shareLink}>{shareLink}</div>
					<button onClick={handleCopy} className={classes.btn}>
						Copy URL
					</button>
				</>
			) : (
				""
			)}
		</div>
	);
}

export default CardForm;
