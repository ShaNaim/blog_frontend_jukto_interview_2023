import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import WelcomeHeading from "../components/WelcomeHeading";
import PostForm from "../components/PostForm";
import { getUserByEmail } from "../api/users.api";

export default function CreatePost() {
	async function handleClick() {
		const user = await getUserByEmail("lee@jukto.com");
		console.log({ user });
	}

	return (
		<Box sx={{ mt: 2 }}>
			<Stack spacing={2}>
				<Paper elevation={2}>
					<WelcomeHeading />
				</Paper>
				<Paper elevation={8} sx={{ px: { xs: 1, md: 4, lg: 8 }, py: { xs: 1, md: 2 } }}>
					<PostForm handleSubmit={handleClick} />
				</Paper>
			</Stack>
		</Box>
	);
}
