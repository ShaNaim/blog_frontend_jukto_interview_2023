import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard/PostCard";
import PostCardSkeleton from "./PostCard/PostCardSkeleton";
export default function PostList({ list }) {
	const [count, setCount] = useState([1, 2, 3]);
	useEffect(() => {
		list.length !== 0 && setCount([...Array(list.length).keys()]);
	}, [list]);
	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{list.length !== 0 ? (
				<>
					{list.map((post, index) => (
						<Grid item xs={12} sm={4} md={4} key={index}>
							<PostCard post={post} />
						</Grid>
					))}
				</>
			) : (
				<>
					{count.map((_, index) => (
						<Grid item xs={12} sm={4} md={4} key={index}>
							<PostCardSkeleton />
						</Grid>
					))}
				</>
			)}
		</Grid>
	);
}
