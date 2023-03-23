import React from "react";
import { Link as Router } from "react-router-dom";
import styled from "styled-components";

const RouterLink = styled(Router)`
	color: inherit;
	text-decoration: none;
	cursor: pointer;
`;
export default function Link(props) {
	return <RouterLink {...props}>{props.children}</RouterLink>;
}
