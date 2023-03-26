import React, { useEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import WelcomeHeading from "../components/WelcomeHeading";
import PostForm from "../components/PostForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePostHandler from "../hooks/posts.hook";
export default function CreatePost() {
	const user = useSelector((state) => state.user.data);
	const router = useNavigate();
	const { addPost } = usePostHandler();
	async function handleClick(data) {
		try {
			const newPost = addPost({
				title: data.title,
				body: data.description,
				userId: user.id,
			});
			if (!newPost) throw "Create Falied";
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
