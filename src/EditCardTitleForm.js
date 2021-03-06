import React from "react";
import useInput from "./hooks/useInputState";

function EditCardForm(props) {
	const [value, handleTitleChange, reset] = useInput(props.title);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				props.updateTitle(value);
				props.toggleEditForm();
			}}
		>
			<input
				type="text"
				value={value}
				onChange={handleTitleChange}
				autoFocus
			/>
		</form>
	);
}

export default EditCardForm;
