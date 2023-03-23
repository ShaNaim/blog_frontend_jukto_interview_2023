import React from "react";
import { Stack } from "@mui/material";
import styled from "styled-components";
import NameCard from "./UI/NameCard";
const Wrapper = styled.div`
	width: 100%;
	text-align: center;
	padding: 20px;
`;
const Sub = styled.span`
	color: ${(props) => props.theme.color.text.subtitle};
	font-size: 12px;
`;

export default function WelcomeHeading({ name = "john doe" }) {
	return (
		<Wrapper>
			<Stack>
				Welcome
				<NameCard name={name} />
				<Sub>Share your Feeling</Sub>
			</Stack>
		</Wrapper>
	);
}
