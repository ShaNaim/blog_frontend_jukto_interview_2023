import React, { useEffect, useState } from "react";
import PostHero from "./PostHero";
import Slide from "@mui/material/Slide";
import sleep from "../../utils/sleep.util";
export default function PostHeroSection({ postsList }) {
	const [postList, setPostList] = useState(postsList ? postsList : []);
	const [trendingPost, setTrendingPost] = useState(postsList ? postsList[0] : null);
	const [checked, setChecked] = useState(true);
	async function getRandomPost() {
		setChecked(false);
		await sleep(800);
		setTrendingPost(postList[Math.floor(Math.random() * postList.length + 1)]);
		setChecked(true);
	}

	useEffect(() => {
		if (postsList) {
			setTrendingPost(postsList[0]);
			setPostList(postsList);
		}
	}, [postsList]);

	useEffect(() => {
		const interval = setInterval(getRandomPost, 30000); // 30 seconds in millisecond
		return () => {
			clearInterval(interval);
		};
	}, [postList]);

	return (
		<>
			<Slide direction="right" in={checked} timeout={600} mountOnEnter unmountOnExit>
				<div>
					<PostHero post={trendingPost} />
				</div>
			</Slide>
		</>
	);
}
