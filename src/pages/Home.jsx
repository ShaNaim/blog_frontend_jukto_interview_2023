import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Button from "../components/UI/Button";
import Heading from "../components/UI/Heading";
import PaginationList from "../components/PaginationList";
import { getAllPosts } from "../api/posts.api";
import PostHeroSection from "../components/PostHero/PostHeroSection";
import Link from "../components/UI/Link";
import FullBleed from "../components/UI/FullBleed";
import { useDispatch, useSelector } from "react-redux";
import { getAllComents } from "../api/comments.api";
import { getAllUsers } from "../api/users.api";

import { selectPostsState, setPostState } from "../redux/post.slice";
import { selectCommentsState, setCommentsState } from "../redux/comments.slice";
import { setUsersListState, selectUsersListState } from "../redux/users.slice";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const postsList = useSelector(selectPostsState);
	const commentsList = useSelector(selectCommentsState);
	const usersList = useSelector(selectUsersListState);
	console.log(usersList);
	const dispatch = useDispatch();

	async function getPostData() {
		const result = await getAllPosts();
		setPosts(result);
		dispatch(setPostState(result));
	}
	async function getCommentsData() {
		console.log("");
		const resultComments = await getAllComents();
		dispatch(setCommentsState(resultComments));
	}
	async function getUsersListData() {
		const list = await getAllUsers();
		dispatch(setUsersListState(list));
	}

	useEffect(() => {
		if (postsList.length === 0) getPostData(); // Getting Posts form JSONServer
		else setPosts(postsList); // If Posts Already Exists
		if (commentsList.length === 0) getCommentsData(); // Getting Comments form JSONServer is dosen't exists
		if (usersList.length === 0) getUsersListData(); // Getting Comments form JSONServer is dosen't exists
	}, [postsList, commentsList, usersList]);
	return (
		<Box
			id="home"
			sx={{
				mt: 1,
				mb: 5,
			}}
		>
			<Stack spacing={1}>
				<Box sx={{ minHeight: "410px" }}>
					<Heading> Trending Posts </Heading>
					<PostHeroSection postsList={posts} />
				</Box>
				<Box sx={{ backgroundColor: "#ceeff584" }}>
					<FullBleed>
						<Stack direction="row" justifyContent="space-between" sx={{ p: 2 }}>
							<Heading> Total Posts | {posts.length}</Heading>
							<Link to="/posts/create">
								<Button size="small" sx={{ m: 1 }}>
									Create Post
								</Button>
							</Link>
						</Stack>
						<PaginationList listOfPosts={posts} />
					</FullBleed>
				</Box>
			</Stack>
		</Box>
	);
}
