import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Stack } from "@mui/system";
const Wrapper = styled.div`
	padding: 8px;
	border: 2px solid #776868;
	border-radius: 8px;
	box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.4);
`;

const Heading = styled.div`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 8px;
`;

const Footer = styled.div`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 8px;
`;

const Body = styled.p`
	font-size: 16px;
	font-weight: 400;
	margin: 8px 0;
	min-height: 160px;
	max-height: 160px;
	overflow: hidden;
`;

const Container = styled.div`
	width: 100%;
`;

export default function PostCard({ post }) {
	return (
		<Wrapper>
			<Stack alignItems="flex-start" justifyContent="space-between">
				<Container>
					<Heading>{post.userName ? post.userName : "John Doe"}</Heading> {post.id}
					<hr />
				</Container>

				<Body>{post.body}</Body>
				<Container>
					<Footer>{post.feeling ? post.feeling : "John Doe is feeling Happy"} </Footer>
					<hr />
					<Stack sx={{ mt: 1 }} alignItems="center" justifyContent="center">
						<Button size="small"> See More </Button>
					</Stack>
				</Container>
			</Stack>
		</Wrapper>
	);
}
