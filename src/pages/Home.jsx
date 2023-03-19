import React, { useEffect, useState, useLayoutEffect } from "react";
import { Box, Stack, Paper } from "@mui/material";
import Button from "../components/UI/Button";
import PostCard from "../components/PostCard/PostCard";
import Grid from "@mui/material/Grid";
import PostList from "../components/PostList";
import Heading from "../components/UI/Heading";
import PaginationList from "../components/PaginationList";
import { getPostsByPage, getAllPosts } from "../api/posts.api";
import PostHero from "../components/PostHero";
import PostHeroSection from "../components/PostHero/PostHeroSection";

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	async function getData() {
		const result = await getAllPosts();
		console.log({ data: result });
		setPosts(result);
	}

	useEffect(() => {
		async function effect() {
			await getData();
		}
		effect();
	}, []);

	return (
		<Box
			id="home"
			sx={{
				mt: 1,
				mb: 5,
			}}
		>
			<Stack spacing={4}>
				<Box>
					<Heading> Trending Posts </Heading>
					<PostHeroSection postsList={posts} />
				</Box>
				<Box>
					<Heading> Total Posts | {posts.length}</Heading>
					{/* <PostList /> */}
					<PaginationList listOfPosts={posts} />
				</Box>
			</Stack>
		</Box>
	);
}
