import React, { useEffect, useState } from "react";
import PostHero from "../PostHero";
export default function PostHeroSection({ postsList }) {
	const [postList, setPostList] = useState(postsList ? postsList : []);
	const [trendingPost, setTrendingPost] = useState(postsList ? postsList[0] : null);
	const [checked, setChecked] = useState(true);
	async function getRandomPost() {
		setTrendingPost(postList[Math.floor(Math.random() * postList.length + 1)]);
		setChecked(false);
	}

	useEffect(() => {
		if (postsList) {
			getRandomPost(postsList);
			setPostList(postsList);
		}
	}, [postsList]);

	useEffect(() => {
		const interval = setInterval(getRandomPost, 5000);
		return () => {
			clearInterval(interval);
		};
	}, [postList]);

	return (
		<>
			<PostHero setChecked={setChecked} checked={checked} post={trendingPost} />
		</>
	);
}
