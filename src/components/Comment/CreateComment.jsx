import React from "react";
import Input from "../UI/Input";
import { Wrapper } from "./CommentDetails";
import styled from "styled-components";
import { Stack, Paper } from "@mui/material";
import { TextButton } from "../UI/Button";
import { Heading } from "../PostCard/PostCard";

export const TextField = styled(Input)`
	width: 100%;
`;

export default function CreateComment({ handleSubmit, userName = "" }) {
	const [value, setValue] = React.useState("");
	function handleClick() {
		handleSubmit(value);
		setValue("");
	}
	return (
		<Paper sx={{ mb: 2, borderRadius: 2 }} elevation={4}>
			<Wrapper>
				<Heading>{userName}</Heading>
				<Stack direction="row" justifyContent="space-between">
					<TextField
						value={value}
						onChange={(event) => setValue(event.target.value)}
						label="comment"
					/>
					<TextButton onClick={handleClick}>Send</TextButton>
				</Stack>
			</Wrapper>
		</Paper>
	);
}
