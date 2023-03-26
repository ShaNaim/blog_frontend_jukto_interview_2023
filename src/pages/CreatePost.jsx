import React, { useEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import WelcomeHeading from "../components/WelcomeHeading";
import PostForm from "../components/PostForm";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts.api";
import { addPostToState } from "../redux/post.slice";

export default function CreatePost() {
	const user = useSelector((state) => state.user.data);
	const dispatch = useDispatch();
	const router = useNavigate();
	async function handleClick(data) {
		try {
			const newPost = await createPost({
				title: data.title,
				body: data.description,
				feeling: data.feeling,
				userId: user.id,
				userName: user.name,
			});
			if (!newPost) throw "Create Falied";
			dispatch(addPostToState(newPost));
			router(`/posts/${newPost.id}`);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		if (!user.email) {
			router("/login");
		}
	}, [user]);

	return (
		<Box sx={{ mt: 2 }}>
			<Stack spacing={2}>
				<Paper elevation={2}>
					<WelcomeHeading name={user.name} />
				</Paper>
				<Paper elevation={8} sx={{ px: { xs: 1, md: 4, lg: 8 }, py: { xs: 1, md: 2 } }}>
					<PostForm handleSubmit={handleClick} />
				</Paper>
			</Stack>
		</Box>
	);
}
