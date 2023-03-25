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
import { setPostState } from "../redux/post.slice";

export default function Home() {
	const [posts, setPosts] = useState([]);
	const dispatch = useDispatch();
	async function getData() {
		const result = await getAllPosts();
		setPosts(result);
		dispatch(setPostState(result));
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
