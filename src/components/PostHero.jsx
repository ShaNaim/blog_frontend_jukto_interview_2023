import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PostCard from "./PostCard/PostCard";
import PostCardSkeleton from "./PostCard/PostCardSkeleton";
import Slide from "@mui/material/Slide";

const breatheAnimation = keyframes`
 20% { opacity: 0; }
 30% { opacity: 1; transform: translateX(-52%);}
 60% { opacity: 1;
	transform: translateX(-52%);}
 75% {opacity: 1; transform: translateX(-52%);}
 100% { opacity: 1;
		transform: translateX(-52%); }
`;

const Wrapper = styled.div`
	width: 100%;
	margin-left: 50%;
	transform: translateX(-200%);
	animation: ${breatheAnimation} 10s ease-in forwards;
`;

export default function PostHero({ post, checked, setChecked }) {
	// const [checked, setChecked] = useState(true);
	useEffect(() => {
		console.log("mounted");
		setChecked(true);
	}, [post]);
	return (
		<>
			<Slide direction="up" in={checked} timeout={1000}>
				<h1>Hello</h1>
			</Slide>
			<Wrapper>{post ? <PostCard post={post} /> : <PostCardSkeleton />}</Wrapper>;
		</>
	);
}

const Circle = styled.div`
	height: 100px;
	width: 100px;
	border-style: solid;
	border-width: 5px;
	border-radius: 50%;
	border-color: black;
	animation-name: ${breatheAnimation};
	animation-duration: 8s;
	animation-iteration-count: infinite;
`;
