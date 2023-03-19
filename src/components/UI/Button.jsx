import React from "react";
import styled from "styled-components";
import { Button as ButtonBody } from "@mui/material";

export default function Button(props) {
	return (
		<ButtonBody color="success" variant="contained" {...props}>
			{props.children}
		</ButtonBody>
	);
}
