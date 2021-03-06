import React from "react";
import "./EditCardTextForm.css";
import useInput from "./hooks/useInputState";

function EditCardForm(props) {
	const [value, handleTextChange, reset] = useInput(props.text);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.updateText(value);
				props.toggleEditForm();
			}}
		>
			<textarea
				value={value}
				onChange={handleTextChange}
				className="text-field"
				autoFocus
			/>
			<button className="text-button">It's OK now!</button>
		</form>
	);
}

export default EditCardForm;
