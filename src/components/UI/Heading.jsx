import React from "react";
import styled from "styled-components";
const Title = styled.h4`
	font-size: 20px;
	margin: 8px 0;
	color: ${(props) => props.theme.color.text.secondary};
`;

export default function Heading({ children }) {
	return <Title>{children}</Title>;
}
