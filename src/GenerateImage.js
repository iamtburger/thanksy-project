import {
	exportComponentAsJPEG,
	exportComponentAsPDF,
	exportComponentAsPNG,
} from "react-component-export-image";
import Card from "./Card";
import "./GenerateImage.css";
import React, { useRef, useState } from "react";
import useInput from "./hooks/useInputState";
import { createUseStyles } from "react-jss";

import CardForm from "./CardForm";

const useStyles = createUseStyles({
	newContainer: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	},
});

const GenerateImage = () => {
	const componentRef = useRef();

	const classes = useStyles();

	const [title, setTitle] = useInput("Thanks a bunch!");
	const [desc, setDesc] = useInput(
		"This description is going to be awesome!"
	);
	const [sender, setSender] = useInput("Tom");
	const [receiver, setReceiver] = useInput("Judy");
	const [background, setBackground] = useInput(
		"https://images.unsplash.com/photo-1552907634-50d3c1dc6e46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
	);
	const [publicCard, setPublicCard] = useState(true);

	return (
		<React.Fragment>
			<div className={(`container`, classes.newContainer)}>
				<CardForm
					title={title}
					setTitle={setTitle}
					desc={desc}
					setDesc={setDesc}
					sender={sender}
					setSender={setSender}
					receiver={receiver}
					setReceiver={setReceiver}
					exportComponentAsPNG={exportComponentAsPNG}
					componentRef={componentRef}
					background={background}
					setBackground={setBackground}
					setPublicCard={setPublicCard}
					publicCard={publicCard}
				/>
				<div className="box">
					<div className="shadow">
						<Card
							ref={componentRef}
							desc={desc}
							title={title}
							from={sender}
							setSender={setSender}
							to={receiver}
							setReceiver={setReceiver}
							background={background}
						/>
					</div>
				</div>
			</div>

			{/* <button
				onClick={() => exportComponentAsPNG(componentRef)}
				className="export-button"
			>
				Export As PNG
			</button> */}
		</React.Fragment>
	);
};

export default GenerateImage;
