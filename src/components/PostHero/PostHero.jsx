import React from "react";
import styled from "styled-components";

import PostCard from "../PostCard/PostCard";
import PostCardSkeleton from "../PostCard/PostCardSkeleton";

const Wrapper = styled.div`
	width: 100%;
`;

export default function PostHero({ post }) {
	return (
		<>
			<Wrapper>{post ? <PostCard post={post} /> : <PostCardSkeleton />}</Wrapper>;
		</>
	);
}
