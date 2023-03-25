import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import * as React from "react";
import Link from "./Link";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={12} ref={ref} variant="filled" {...props} />;
});

export default function NotifyAlert({ open, setOpen, type, message, hasData }) {
	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				{hasData ? (
					<Link to={hasData.url}>
						<Alert severity={type} sx={{ width: "100%" }}>
							{hasData.message}
						</Alert>
					</Link>
				) : (
					<Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
						{message}
					</Alert>
				)}
			</Snackbar>
		</Stack>
	);
}
