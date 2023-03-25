import React from "react";
import styled from "styled-components";

const CustomButton = styled.button`
	padding: 8px;
	border-radius: 8px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	box-shadow: 0 6px #99999983;
	transition: border 1s, color 1s, background-color 0.6s;
	margin-bottom: 4px;

	&:active {
		box-shadow: 0 2px #666666a4;
		transform: translateY(4px);
	}
`;

const SuccessButton = styled(CustomButton)`
	background-color: ${(props) => props.theme.color.surface.main};
	color: ${(props) => props.theme.color.button.success};
	border: 3px solid ${(props) => props.theme.color.button.success};
	&:hover {
		color: ${(props) => props.theme.color.surface.main};
		background-color: ${(props) => props.theme.color.button.success};
	}
`;

const UpdateButton = styled(CustomButton)`
	background-color: ${(props) => props.theme.color.surface.main};
	color: ${(props) => props.theme.color.button.update};
	border: 3px solid ${(props) => props.theme.color.button.update};
	&:hover {
		color: ${(props) => props.theme.color.surface.main};
		background-color: ${(props) => props.theme.color.button.update};
	}
`;

const DangerButton = styled(CustomButton)`
	background-color: ${(props) => props.theme.color.surface.main};
	color: ${(props) => props.theme.color.button.error};
	border: 3px solid ${(props) => props.theme.color.button.error};
	&:hover {
		color: ${(props) => props.theme.color.surface.main};
		background-color: ${(props) => props.theme.color.button.error};
	}
`;

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
	if (props.isUpdate) {
		return <UpdateButton {...props}>{props.children}</UpdateButton>;
	}
	if (props.isDanger) {
		return <DangerButton {...props}>{props.children}</DangerButton>;
	}
	return <SuccessButton {...props}>{props.children}</SuccessButton>;
}

export function TextButton(props) {
	return <TextButtonStyle {...props}>{props.children}</TextButtonStyle>;
}
// ${(props) => (props.isUpdate ? "border: 4px solid red" : "")};
