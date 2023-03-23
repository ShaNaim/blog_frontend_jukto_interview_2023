import React from "react";
import Button from "@mui/material/Button";

export default function FunctionButton({ handleClick, children, isLogin }) {
	return (
		<Button
			sx={{
				width: "100%",
				height: "56px",
				mb: "12px",
				backgroundColor: isLogin ? "#118aa0dd" : "#076d29df",
			}}
			variant="contained"
			color={isLogin ? "primary" : "success"}
			onClick={handleClick}
		>
			{children}
		</Button>
	);
}
