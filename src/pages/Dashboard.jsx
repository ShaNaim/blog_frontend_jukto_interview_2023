import React, { useEffect, useState } from "react";
import { Box, Stack, Paper } from "@mui/material";
import WelcomeHeading from "../components/WelcomeHeading";
import PostForm from "../components/PostForm";
import { getUserByEmail } from "../api/users.api";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts.api";
import { setPostState } from "../redux/post.slice";
import PaginationList from "../components/PaginationList";
import { postsUserHaveComentedOn } from "../api/comments.api";
import Button from "../components/UI/Button";
import Chip from "@mui/material/Chip";
import Link from "../components/UI/Link";

export default function Dashboard() {
	const user = useSelector((state) => state.user.data);
	const posts = useSelector((state) => state.posts.data);
	const [postsList, setPostsList] = useState([]);
	const [loadingData, setLoadingData] = useState(true);
	const [commentedPostsList, setCommentedPostsList] = useState([]);
	const [isPostView, setIsPostView] = useState(true);
	const router = useNavigate();

	async function getData() {
		const result = await getAllPosts();

		dispatch(setPostState(result));
	}

	async function getCommentedList() {
		const list = await postsUserHaveComentedOn(user.id);
		const postsListofCommets = [];
		list.forEach((value) => {
			const post = posts.filter((post) => post.id === value);
			postsListofCommets.push(post[0]);
		});
		setCommentedPostsList(postsListofCommets);
		setLoadingData(false);
	}

	useEffect(() => {
		if (!user.email) {
			router("/login");
		}
	}, [user]);

	useEffect(() => {
		if (posts.length === 0) {
			getData();
		} else {
			const usersList = posts.filter((post) => post.userId === user.id);
			setPostsList(usersList);
			getCommentedList();
		}
	}, [posts]);

	return (
		<Box sx={{ mt: 2 }}>
			<Stack spacing={2}>
				<Paper elevation={2}>
					<WelcomeHeading name={user.name} />
				</Paper>
				<Paper elevation={8} sx={{ px: { xs: 1, md: 4, lg: 8 }, py: { xs: 1, md: 2 } }}>
					<Stack direction="row" justifyContent="space-between" alignItems="flex-end" spacing={3}>
						<Box>
							<Stack
								direction={{ xs: "column", md: "row" }}
								justifyContent="space-between"
								spacing={{ xs: 2, md: 0 }}
							>
								<Chip
									color={isPostView ? "success" : "primary"}
									label="Posted by User"
									variant={isPostView ? "filled" : "outlined"}
									onClick={() => setIsPostView(true)}
								/>

								<Chip
									sx={{ ml: 3 }}
									color={!isPostView ? "success" : "primary"}
									label="Commented on by User"
									variant={!isPostView ? "filled" : "outlined"}
									onClick={() => setIsPostView(false)}
								/>
							</Stack>
						</Box>
						<Link to="/posts/create">
							<Button> Create Post </Button>
						</Link>
					</Stack>
				</Paper>
				<Box sx={{ mt: 2 }}></Box>
				<hr />
				{isPostView ? (
					<>
						{!loadingData && postsList.length === 0 ? (
							<>
								<Paper sx={{ p: 2, m: 1 }}> No Posts Yet </Paper>
							</>
						) : (
							<PaginationList listOfPosts={postsList} />
						)}
					</>
				) : (
					<>
						{!loadingData && commentedPostsList.length === 0 ? (
							<>
								<Paper sx={{ p: 2, m: 1 }}> No Posts Yet </Paper>
							</>
						) : (
							<PaginationList listOfPosts={commentedPostsList} />
						)}
					</>
				)}
			</Stack>
		</Box>
	);
}
