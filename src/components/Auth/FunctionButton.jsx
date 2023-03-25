import React from "react";
// import Button from "@mui/material/Button";
import styled from "styled-components";
import Button from "../UI/Button";

const SubmitButton = styled(Button)`
	width: 100%;
	height: 52px;
	background-color: ${(props) =>
		props.isLogin ? props.theme.color.button.secondary : props.theme.color.button.success};
	color: ${(props) => props.theme.color.surface.main};
	border: 1px solid
		${(props) =>
			props.isLogin ? props.theme.color.button.secondary : props.theme.color.button.success};
	transition: background-color 1.4s;
	&:hover {
		border: 1px solid ${(props) => props.theme.color.button.update};
		background-color: ${(props) => props.theme.color.button.update};
	}
`;

export default function FunctionButton({ handleClick, children, isLogin }) {
	return (
		<SubmitButton isLogin={isLogin} onClick={handleClick}>
			{children}
		</SubmitButton>
	);
}
