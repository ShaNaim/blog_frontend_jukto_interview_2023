import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	box-shadow: 0 0 0 100vmax #ceeff584;
	clip-path: inset(0 -100vmax);
`;

export default function FullBleed({ children }) {
	return <Wrapper>{children}</Wrapper>;
}
