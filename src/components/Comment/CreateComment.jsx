import React from "react";
import styled from "styled-components";

import Input from "../UI/Input";
import { Wrapper } from "./CommentDetails";
import { Stack, Paper, Box } from "@mui/material";
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
			<Wrapper isUser={true}>
				<Heading>{userName}</Heading>
				<Stack direction="row" justifyContent="space-between">
					<TextField
						value={value}
						onChange={(event) => setValue(event.target.value)}
						label="comment"
					/>
					<Box>
						<TextButton onClick={handleClick}>Send</TextButton>
					</Box>
				</Stack>
			</Wrapper>
		</Paper>
	);
}
