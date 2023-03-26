import React from "react";
import { ValidateEmail } from "../../utils/validation.util";

import Typography from "@mui/material/Typography";
import PasswordInput from "./PasswordInput";
import EmailInput from "./EmailInput";

export default function Login({ handleSubmit, isLogin }) {
	const [isEmail, setisEmail] = React.useState(true);
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleClick = () => {
		handleSubmit({ email, password });
	};

	const handleEmail = (emailValue) => {
		setEmail(emailValue);
		setisEmail(false);
	};

	const handleEdit = () => {
		if (ValidateEmail(email)) {
			setisEmail(true);
		}
	};
	return (
		<>
			<Typography
				id="modal-modal-title"
				variant="h6"
				component="h2"
				sx={{ fontFamily: "monospace", fontWeight: 700 }}
			>
				Welcome Back
			</Typography>
			{isEmail ? (
				<EmailInput emailValue={email} isLogin={true} handleClick={handleEmail} />
			) : (
				<PasswordInput
					isLogin={true}
					handleClick={handleClick}
					password={password}
					setPassword={setPassword}
					email={email}
					handleEdit={handleEdit}
				/>
			)}
		</>
	);
}
