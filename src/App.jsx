import React from "react";
import { Outlet, Link } from "react-router-dom";
import NavBar from "./components/Layout/NavBar";
import Container from "@mui/material/Container";
export default function App() {
	return (
		<>
			<NavBar />
			<Container id="detail">
				<Outlet />
			</Container>
		</>
	);
}
