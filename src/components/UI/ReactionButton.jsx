import React from "react";
import styled from "styled-components";
import LoveReaction from "./LoveReaction";

const ReactionWrapper = styled.div`
	width: 32px;
	height: 32px;
	margin-left: 8px;
	cursor: pointer;
`;

export default function ReactionButton() {
	return (
		<ReactionWrapper>
			<LoveReaction />
		</ReactionWrapper>
	);
}
