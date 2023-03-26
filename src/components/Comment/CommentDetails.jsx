import React, { useEffect, useState } from "react";
import { getUserById } from "../../api/users.api";
import { Heading } from "../PostCard/PostCard";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import { TextButton } from "../UI/Button";
import TextField from "@mui/material/TextField";
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

export default function CommentDetails({ comment, isOwner, userId, handleUpdate, handleDelete }) {
	const [userInfo, setUserInfo] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState(false);

	async function getUserData(id) {
		const userData = await getUserById(id);
		if (userData) setUserInfo(userData);
	}

	function handleEditClick() {
		setEditValue(comment.body);
		setIsEdit(true);
	}
	function handleClick() {
		setIsEdit(false);
		handleUpdate(editValue, comment.id);
	}

	useEffect(() => {
		getUserData(comment.postedBy);
	}, [comment.postedBy]);
	return (
		<>
			{userInfo && (
				<>
					<Wrapper isUser={userId === comment.postedBy}>
						<Stack direction="row" justifyContent="space-between" alignItems="center">
							<div style={{ width: "100%" }}>
								{!isEdit && (
									<>
										<Heading> {userInfo.name} </Heading>
										<TextContainer> {comment.body} </TextContainer>
									</>
								)}
								{isEdit && (
									<TextField
										sx={{ width: "100%", mb: { xs: 1, md: 2 } }}
										value={editValue}
										onChange={(event) => setEditValue(event.target.value)}
										label="comment"
										multiline
										variant="standard"
									/>
								)}
							</div>
						</Stack>

						<Stack sx={{ width: "100%" }} direction="row" justifyContent="flex-end">
							{userId === comment.postedBy ? (
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
							{(isOwner || userId === comment.postedBy) &&
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
						<Hr />
					</Wrapper>
				</>
			)}
		</>
	);
}
