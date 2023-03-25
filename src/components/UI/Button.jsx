import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
	background-color: ${(props) => props.theme.color.surface.main};
	color: ${(props) => props.theme.color.button.success};
	padding: 8px;
	border-radius: 8px;
	border: 3px solid ${(props) => props.theme.color.button.success};
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0 6px #99999983;
	transition: border 1s, color 1s, background-color 0.6s;
	margin-bottom: 4px;
	&:hover {
		color: ${(props) => props.theme.color.surface.main};
		background-color: ${(props) => props.theme.color.button.success};
	}

	&:active {
		box-shadow: 0 2px #666666a4;
		transform: translateY(4px);
	}
`;

const SuccessButton = styled(CustomButton)``;

const TextButtonStyle = styled.button`
	border: none;
	background-color: ${(props) => props.theme.color.surface.main};
	color: ${(props) =>
		props.isDanger ? props.theme.color.button.error : props.theme.color.button.success};
	padding: 8px;
	margin: 8px;
	border-radius: 8px;
	transition: background-color 1s, color 0.8s;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.color.main};
		color: ${(props) => props.theme.color.surface.main};
	}
`;

export default function Button(props) {
	return <CustomButton {...props}>{props.children}</CustomButton>;
}

export function TextButton(props) {
	return <TextButtonStyle {...props}>{props.children}</TextButtonStyle>;
}
// ${(props) => (props.isUpdate ? "border: 4px solid red" : "")};
