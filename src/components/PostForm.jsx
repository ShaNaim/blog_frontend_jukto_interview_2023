import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Input from "./UI/Input";
import Button from "./UI/Button";
import styled from "styled-components";
import Heading from "./UI/Heading";
import NotifyAlert from "./UI/NotifyAlert";
import { validatePostData } from "../utils/validation.util";

import { MAX_FEELING, MAX_TITLE } from "../utils/const.provider";

const SubmitButton = styled(Button)`
	width: 100px;
	height: 40px;
`;

export default function PostForm({ handleSubmit, updateData }) {
	const [title, setTitle] = useState(updateData && updateData.title ? updateData.title : "");
	const [description, setDescription] = useState(
		updateData && updateData.body ? updateData.body : ""
	);
	const [feeling, setFeeling] = useState(
		updateData && updateData.feeling ? updateData.feeling : ""
	);
	const [alertMessage, setAlertMessage] = useState("");

	const [titleError, setTitleError] = useState(false);
	const [descriptionError, setDescriptionError] = useState(false);
	const [feelingError, setFeelingError] = useState(false);
	const [alert, setAlert] = useState(false);

	function handleSetTitle(event) {
		setTitleError(false);
		setTitle(event.target.value);
		if (title.split("").length > MAX_TITLE) {
			setTitleError(true);
		}
	}
	function handleSetFeeling(event) {
		setFeelingError(false);
		if (feeling.split("").length > MAX_FEELING) {
			setFeelingError(true);
		}
		setFeeling(event.target.value);
	}

	async function handleClick() {
		const validated = validatePostData(title, feeling, description);
		if (!validated.success) {
			if (validated.origin === "title") setTitleError(true);
			if (validated.origin === "feeling") setFeelingError(true);
			if (validated.origin === "desc") setDescriptionError(true);
			setAlertMessage(validated.message);
			setAlert(true);
		} else {
			handleSubmit({ title, feeling, description });
			setTitle("");
			setDescription("");
			setFeeling("");
		}
	}

	return (
		<>
			<Stack spacing={2}>
				<Heading> {updateData ? "Update" : "Create"} Post </Heading>
				<Input
					error={titleError}
					id="filled-basic"
					label="Title"
					sx={{ width: { xs: "100%", md: "50%" } }}
					value={title}
					onChange={handleSetTitle}
					helperText={`Max ${MAX_TITLE} char`}
				/>
				<Input
					error={feelingError}
					id="filled-basic"
					label="Feeling"
					sx={{ width: { xs: "100%", sm: "40%", md: "30%", lg: "20%" } }}
					value={feeling}
					onChange={handleSetFeeling}
					helperText={`Max ${MAX_FEELING} char`}
				/>
				<Input
					error={descriptionError}
					id="filled-basic"
					label="Description"
					multiline
					variant="outlined"
					row={4}
					value={description}
					onChange={(event) => {
						setDescription(event.target.value);
					}}
					onClick={(e) => setDescriptionError(false)}
				/>
			</Stack>
			<Stack sx={{ width: "100%", mt: 1 }} justifyContent="flex-end" alignItems="flex-end">
				<SubmitButton isUpdate={updateData} onClick={handleClick}>
					{updateData ? "Update" : "Create"}
				</SubmitButton>
			</Stack>
			<NotifyAlert open={alert} setOpen={setAlert} type="error" message={alertMessage} />
		</>
	);
}
