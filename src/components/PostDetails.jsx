import React, { useState } from "react";
import { Wrapper, Title, Body, Container } from "./PostCard/PostCard";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { TextButton } from "./UI/Button";
import PostUpdate from "./PostUpdate";
import { useNavigate } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import PostHeader from "./PostCard/PostHeader";
import usePostHandler from "../hooks/posts.hook";
const CustomBody = styled(Body)`
	min-height: auto;
	max-height: 100%;
	padding: 12px;
	line-height: 26pt;
`;

const EditButtonContainer = styled.div`
	background-color: ${(props) => props.theme.color.surface.primary};
	border-radius: 12px;
	margin: 4px;
	padding: 8px;
`;

const TextButtonWithMargin = styled(TextButton)`
	margin-right: 4px;
`;

export default function PostDetails({ post, userId, userName, reFetch }) {
	const [isEdit, setIsEdit] = useState(false);
	const [deleteAlert, setDeleteAlert] = useState(false);
	const router = useNavigate();
	const { deletePost } = usePostHandler();
	function handleEditClick() {
		setIsEdit(true);
	}

	async function handleDelete() {
		deletePost(post.id);
		router("/");
	}

	function handleClick() {
		setDeleteAlert(true);
	}

	return (
		<>
			{isEdit ? (
				<>
					<EditButtons
						userId={userId}
						ownerId={post.userId}
						isEdit={isEdit}
						setIsEdit={setIsEdit}
					/>
					<Wrapper>
						<PostUpdate
							reFetch={reFetch}
							user={{ id: userId, name: userName }}
							post={post}
							setEdit={setIsEdit}
						/>
					</Wrapper>
				</>
			) : (
				<Wrapper>
					<Stack alignItems="flex-start" justifyContent="space-between">
						<Container>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<PostHeader userId={post.userId} />
								<EditButtons
									userId={userId}
									ownerId={post.userId}
									isEdit={isEdit}
									setIsEdit={setIsEdit}
									handleEditClick={handleEditClick}
									handleDelete={handleClick}
								/>
							</Stack>

							<hr />
						</Container>
						<CustomBody>
							<Title>
								{post.title ? post.title : "the title will contaill a max of 50 words not more"}
							</Title>
							{post.body}
						</CustomBody>
					</Stack>
				</Wrapper>
			)}
			<AlertDialog handleSubmit={handleDelete} open={deleteAlert} setOpen={setDeleteAlert} />
		</>
	);
}

const EditButtons = ({ userId, ownerId, isEdit, setIsEdit, handleEditClick, handleDelete }) => {
	return (
		<Stack sx={{ width: "100%" }} direction="row" justifyContent="flex-end">
			{userId === ownerId ? (
				<>
					<EditButtonContainer>
						{isEdit ? (
							<>
								<TextButton onClick={() => setIsEdit(false)} isDanger={true}>
									Cancel
								</TextButton>
							</>
						) : (
							<>
								<TextButtonWithMargin onClick={handleEditClick}>Edit</TextButtonWithMargin>
								<TextButton onClick={handleDelete} isDanger={true}>
									Delete
								</TextButton>
							</>
						)}
					</EditButtonContainer>
				</>
			) : (
				<></>
			)}
		</Stack>
	);
};
