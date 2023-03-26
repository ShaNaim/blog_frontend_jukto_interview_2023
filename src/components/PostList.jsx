import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import PostCard from "./PostCard/PostCard";
import PostCardSkeleton from "./PostCard/PostCardSkeleton";
import Slide from "@mui/material/Slide";
export default function PostList({ list }) {
	const [count, setCount] = useState([1, 2, 3]);
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		setChecked(true);
		list.length !== 0 && setCount([...Array(list.length).keys()]);
	}, [list]);
	return (
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
			{list.length !== 0 ? (
				<>
					{list.map((post, index) => (
						<Slide
							key={index}
							timeout={600}
							direction="right"
							in={checked}
							mountOnEnter
							unmountOnExit
						>
							<Grid item xs={12} sm={4} md={4}>
								{post && <PostCard post={post} />}
							</Grid>
						</Slide>
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
