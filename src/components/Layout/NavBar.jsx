import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "../UI/Link";
import { useTheme } from "styled-components";

export default function NavBar() {
	const theme = useTheme();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ background: theme.color.main }} position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/">{import.meta.env.VITE_APP_NAME}</Link>
					</Typography>
					<Button color="inherit">
						<Link to="/login">Login</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
