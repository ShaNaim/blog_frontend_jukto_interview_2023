import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useAuthHandler from "../../hooks/auth.hook";

import Skeleton from "@mui/material/Skeleton";
import { Heading } from "./PostCard";
import { Footer } from "./PostCard";
export const Container = styled.div`
	width: 100%;
`;

export default function PostHeader({ userId }) {
	const { getUserById } = useAuthHandler();
	const [user, setUser] = useState(null);
	async function getUserData(id) {
		const data = getUserById(id);

		if (data) setUser(data);
	}
	useEffect(() => {
		if (userId) getUserData(userId);
	}, [userId]);

	return (
		<Container>
			{user ? (
				<>
					<Heading>{user ? user.name : "k"}</Heading>
					<Footer> {user ? user.email : "@"} </Footer>
				</>
			) : (
				<Skeleton variant="text" sx={{ fontSize: "1rem", width: "50%" }} />
			)}
		</Container>
	);
}
