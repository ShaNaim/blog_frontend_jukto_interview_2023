import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import { Stack } from "@mui/system";
import ReactionButton from "../UI/ReactionButton";
const Wrapper = styled.div`
	background: #fff;
	padding: 8px;
	border: 2px solid #776868;
	border-radius: 8px;
	box-shadow: 8px 8px 8px 0 rgba(0, 0, 0, 0.4);
`;

const Heading = styled.div`
	font-size: 16px;
	font-weight: 600;
`;

const Title = styled.div`
	font-size: 14px;
	font-weight: 600;
	margin-bottom: 4px;
`;

const Footer = styled.div`
	font-size: 12px;
	font-weight: 300;
	margin-bottom: 8px;
`;

const Body = styled.div`
	font-size: 16px;
	font-weight: 400;
	margin: 8px 0;
	min-height: 200px;
	max-height: 200px;
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
					<Heading>{post.userName ? post.userName : "John Doe"}</Heading>
					<Footer>{post.feeling ? post.feeling : "feeling Happy"}</Footer>
					<hr />
				</Container>

				<Body>
					<Title>
						{post.title ? post.title : "the title will contaill a max of 50 words not more"}
					</Title>
					{post.body}
				</Body>
				<Container>
					<hr />
					<Stack sx={{ mt: 1 }} direction="row" alignItems="center" justifyContent="space-between">
						<ReactionButton />
						<Button size="small"> See More </Button>
					</Stack>
				</Container>
			</Stack>
		</Wrapper>
	);
}
