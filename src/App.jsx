import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Container from "@mui/material/Container";
export default function App() {
	return (
		<>
			<NavBar />
			<Container sx={{ mb: 12 }} id="detail">
				<Outlet />
			</Container>
		</>
	);
}
