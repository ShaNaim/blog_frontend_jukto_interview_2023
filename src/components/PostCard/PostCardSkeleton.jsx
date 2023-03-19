import React from "react";
import { Stack } from "@mui/system";
import Skeleton from "@mui/material/Skeleton";
export default function PostCardSkeleton() {
	return (
		<Stack direction="column" spacing={1}>
			<Skeleton variant="text" sx={{ fontSize: "2rem" }} />
			<Skeleton animation="wave" variant="rectangular" height={160} />
			<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
			<Skeleton variant="rectangular" width={80} height={40} />
		</Stack>
	);
}
