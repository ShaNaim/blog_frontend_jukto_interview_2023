import React, { useState } from "react";
import { Wrapper, Heading, Title, Footer, Body, Container } from "./PostCard/PostCard";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import { TextButton } from "./UI/Button";
import PostUpdate from "./PostUpdate";
const CustomBody = styled(Body)`
	min-height: auto;
	max-height: auto;
`;

const EditButtonContainer = styled.div`
	background-color: ${(props) => props.theme.color.surface.prompt};
	border-radius: 12px;
	margin: 4px;
`;
export default function PostDetails({ post, userId }) {
	const [isEdit, setIsEdit] = useState(false);
	const [editValue, setEditValue] = useState(false);

	function handleEditClick() {
		setIsEdit(true);
	}
	function handleClick() {
		setIsEdit(false);
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
						handleEditClick={handleEditClick}
						handleClick={handleClick}
					/>
					<Wrapper>
						<PostUpdate post={post} setEdit={setIsEdit} />
					</Wrapper>
				</>
			) : (
				<Wrapper>
					<Stack alignItems="flex-start" justifyContent="space-between">
						<Container>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<div>
									<Heading>{post.userName ? post.userName : "John Doe"}</Heading>
									<Footer>Feeling {post.feeling ? post.feeling : "Happy"}</Footer>
								</div>
								<EditButtons
									userId={userId}
									ownerId={post.userId}
									isEdit={isEdit}
									setIsEdit={setIsEdit}
									handleEditClick={handleEditClick}
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
		</>
	);
}

const EditButtons = ({ userId, ownerId, isEdit, setIsEdit, handleEditClick }) => {
	console.log({ userId, ownerId, isEdit });
	return (
		<Stack direction="row" justifyContent="flex-end">
			<EditButtonContainer>
				{userId === ownerId ? (
					<>
						{isEdit ? (
							<>
								<TextButton onClick={() => setIsEdit(false)} isDanger={true}>
									Cancel
								</TextButton>
							</>
						) : (
							<>
								<TextButton onClick={handleEditClick}>Edit</TextButton>
								<TextButton isDanger={true}>Delete</TextButton>
							</>
						)}
					</>
				) : (
					<></>
				)}
			</EditButtonContainer>
		</Stack>
	);
};
