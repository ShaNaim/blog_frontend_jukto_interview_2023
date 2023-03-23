import React from "react";
import styled from "styled-components";

const Title = styled.h1`
	background: -webkit-linear-gradient(#eee, #333);
	background: linear-gradient(to top left, #33ccff 15%, ${(props) => props.customColor} 60%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

function stringToColor(string) {
	let hash = 0;
	let i;
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}
	let color = "#";
	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	return color;
}

export default function NameCard({ name }) {
	return (
		<>
			<Title customColor={stringToColor(name)}> {name} </Title>
		</>
	);
}
