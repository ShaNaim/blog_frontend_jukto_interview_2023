import React, { useEffect, useState } from "react";
import { getUserById } from "../../api/users.api";
import { Heading } from "../PostCard/PostCard";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import { TextButton } from "../UI/Button";
import { TextField, Box } from "@mui/material";

const TextContainer = styled.p``;

export const Wrapper = styled.div`
	background: ${(props) => props.theme.color.surface.primary};
	padding: 12px;
	border-radius: 8px;
	margin-bottom: 24px;
	box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.4);
	border-left: 4px solid
		${(props) =>
			props.isUser ? props.theme.color.text.secondary : props.theme.color.button.secondary};
`;

const Hr = styled.hr`
	margin-top: 12px;
`;

export default function CommentDetails({
	comment,
	isOwner,
	userEmail,
	handleUpdate,
	handleDelete,
}) {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState(false);

	function handleEditClick() {
		setEditValue(comment.body);
		setIsEdit(true);
	}

	function handleClick() {
		setIsEdit(false);
		handleUpdate(editValue, comment.id);
	}

	return (
		<>
			{comment && (
				<>
					<Wrapper isUser={userEmail === comment.email}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<Box sx={{ width: "100%" }}>
								{!isEdit && (
									<>
										<Heading> {comment.email} </Heading>
										<TextContainer> {comment.body} </TextContainer>
									</>
								)}
								{isEdit && (
									<TextField
										variant="standard"
										multiline
										value={editValue}
										onChange={(event) => setEditValue(event.target.value)}
										label="comment"
										sx={{ width: "100%" }}
									/>
								)}
							</Box>
						</Stack>
						<Stack direction="row" justifyContent="flex-end">
							{userEmail === comment.email ? (
								<>
									{isEdit ? (
										<TextButton onClick={handleClick}>Save</TextButton>
									) : (
										<TextButton onClick={handleEditClick}>Edit</TextButton>
									)}
								</>
							) : (
								<></>
							)}
							{(isOwner || userEmail === comment.email) &&
								(!isEdit ? (
									<TextButton onClick={() => handleDelete(comment.id)} isDanger={true}>
										Delete
									</TextButton>
								) : (
									<TextButton onClick={() => setIsEdit(false)} isDanger={true}>
										Cancel
									</TextButton>
								))}
						</Stack>
						{!isEdit && <Hr />}
					</Wrapper>
				</>
			)}
		</>
	);
}
