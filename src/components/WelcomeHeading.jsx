import React from "react";
import styled from "styled-components";

import { Stack } from "@mui/material";
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
const EmailSub = styled.span`
	color: ${(props) => props.theme.color.text.subtitle};
	font-size: 14px;
	font-weight: bold;
`;

export default function WelcomeHeading({ name = "john doe", email = "john@notfound.com" }) {
	return (
		<Wrapper>
			<Stack>
				Welcome
				<NameCard name={name} />
				<EmailSub>{email}</EmailSub>
				<Sub>Share your Feeling</Sub>
			</Stack>
		</Wrapper>
	);
}
