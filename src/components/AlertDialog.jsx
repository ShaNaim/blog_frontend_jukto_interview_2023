import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "./UI/Button";
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialog({ open, setOpen, handleSubmit }) {
	const handleAgreeAndClose = () => {
		setOpen(false);
		handleSubmit();
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-delete-description"
				sx={{ borderRadius: "12px" }}
			>
				<DialogTitle>Are You Sure ?</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						This Post will be deleted and all its content removed
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button isDanger={true} onClick={handleAgreeAndClose}>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
