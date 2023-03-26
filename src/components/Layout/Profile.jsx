import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUserState } from "../../redux/auth.slice";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

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

function stringAvatar(name) {
	let nameArray = name.split(" ");
	let value;
	if (nameArray.length > 1) value = `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
	else value = `${name.split(" ")[0][0]}`;
	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: value,
	};
}

export default function Profile({ user }) {
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const dispatch = useDispatch();
	const router = useNavigate();
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleNav = () => {
		setAnchorElUser(null);
		router("/dashboard");
	};

	const handleLogout = async () => {
		console.log("logout");
		setAnchorElUser(null);
		dispatch(deleteUserState());
		router("/login");
	};

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar {...stringAvatar(user.name || "U N")} />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: "45px" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				<MenuItem onClick={handleNav}>
					<Typography textAlign="center"> Dashboard </Typography>
				</MenuItem>
				<MenuItem onClick={handleLogout}>
					<Typography textAlign="center"> Logout </Typography>
				</MenuItem>
			</Menu>
		</Box>
	);
}
