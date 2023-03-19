import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PostList from "./PostList";
import { getPostsByPage } from "../api/posts.api";
import sleep from "../utils/sleep.util";
export default function PaginationList({ listOfPosts }) {
	const [page, setPage] = React.useState(1);
	const handleChange = (event, value) => {
		setPage(value);
	};
	// const [listOfPosts, setListOfPosts] = React.useState([]);

	// async function getData(page) {
	// 	setListOfPosts([]);
	// 	// await sleep(3000);
	// 	const result = await getPostsByPage(page);
	// 	setListOfPosts(result);
	// }

	// React.useEffect(() => {
	// 	getData(page);
	// }, [page]);

	return (
		<Stack
			sx={{ width: "100%" }}
			spacing={8}
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<PostList list={listOfPosts} />

			<Pagination
				disabled={listOfPosts.length !== 0 ? false : true}
				color="secondary"
				count={5}
				page={page}
				onChange={handleChange}
			/>
		</Stack>
	);
}
