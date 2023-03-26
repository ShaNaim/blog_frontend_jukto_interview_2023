import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Stack } from "@mui/system";
import Link from "../UI/Link";
import PostHeader from "./PostHeader";
export const Wrapper = styled.div`
	background: #fff;
	padding: 8px;
	border: 2px solid #776868;
	border-radius: 8px;
	box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.4);
`;

export const Heading = styled.div`
	font-size: 20px;
	font-weight: 600;
`;

export const Title = styled.div`
	font-size: 16px;
	font-weight: 600;
	margin-bottom: 4px;
`;

export const Footer = styled.div`
	font-size: 12px;
	font-weight: 300;
	margin-bottom: 8px;
`;

export const Body = styled.div`
	font-size: 16px;
	font-weight: 400;
	margin: 8px 0;
	min-height: 200px;
	max-height: 200px;
	overflow: hidden;
`;

export const Container = styled.div`
	width: 100%;
`;

export default function PostCard({ post }) {
	return (
		<Wrapper>
			<Stack alignItems="flex-start" justifyContent="space-between">
				<Container>
					<PostHeader userId={post?.userId} />
					<hr />
				</Container>

				<Body>
					<Title>
						{post?.title ? post?.title : "the title will contaill a max of 50 words not more"}
					</Title>
					{post?.body}
				</Body>
				<Container>
					<hr />
					<Stack sx={{ mt: 1 }} direction="row" alignItems="center" justifyContent="flex-end">
						<Link to={`/posts/${post?.id}`}>
							<Button size="small"> See More </Button>
						</Link>
					</Stack>
				</Container>
			</Stack>
		</Wrapper>
	);
}
