import * as React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "../UI/Link";
import Profile from "./Profile";

export default function NavBar() {
	const user = useSelector((state) => state.user.data);
	const [hasUser, sethasUser] = React.useState(false);
	const theme = useTheme();
	React.useEffect(() => {
		if (user && user.email) {
			sethasUser(true);
		} else {
			sethasUser(false);
		}
	}, [user]);
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ background: theme.color.main }} position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link to="/"> Blog </Link>
					</Typography>
					{!hasUser ? (
						<Link to="/login">
							<Button color="inherit">Login</Button>
						</Link>
					) : (
						<Profile user={user} />
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
}
