import React from "react";
import useInput from "./hooks/useInputState";

function EditCardNamesForm(props) {
	const [value, handleNameChange, reset] = useInput(props.name);
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.setName(value);
				props.toggle();
			}}
		>
			<input
				type="text"
				value={value}
				onChange={handleNameChange}
				autoFocus
			/>
		</form>
	);
}

export default EditCardNamesForm;
