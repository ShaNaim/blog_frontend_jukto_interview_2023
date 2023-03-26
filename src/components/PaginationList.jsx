import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PostList from "./PostList";
import sleep from "../utils/sleep.util";
const PAGE_SIZE = 9;
export default function PaginationList({ listOfPosts }) {
	const [page, setPage] = React.useState(1);
	const [paginatedList, setPaginatedList] = React.useState([]);

	const handleChange = (event, value) => {
		setPage(value);
	};

	async function paginateList(array, page_number, page_size = 9) {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	}

	async function getData(array, page_number, page_size) {
		setPaginatedList([]);
		await sleep(80);
		const result = await paginateList(array, page_number, page_size);
		setPaginatedList(result);
	}

	React.useEffect(() => {
		if (listOfPosts.length !== 0) {
			getData(listOfPosts, page, PAGE_SIZE);
		}
	}, [page, listOfPosts]);

	return (
		<Stack
			sx={{ width: "100%" }}
			spacing={8}
			direction="column"
			alignItems="center"
			justifyContent="center"
		>
			<PostList list={paginatedList} />
			<Pagination
				disabled={paginatedList.length !== 0 ? false : true}
				color="secondary"
				count={Math.ceil(listOfPosts.length / PAGE_SIZE)}
				page={page}
				onChange={handleChange}
			/>
		</Stack>
	);
}
