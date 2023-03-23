import Typography from "@mui/material/Typography";
import React from "react";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

export default function Register({ handleSubmit, isLogin }) {
	const [isEmail, setisEmail] = React.useState(true);
	const [email, setEmail] = React.useState("");
	const [name, setName] = React.useState("");
	const [contact, setContact] = React.useState("");
	const [password, setPassword] = React.useState("");

	const handleClick = () => {
		handleSubmit({
			email: email,
			name: name,
			password: password,
			passwordConfirmation: password,
			phone: contact,
		});
	};

	const handleEmail = (emailValue, nameValue, contactValue) => {
		setEmail(emailValue);
		setName(nameValue);
		setContact(contactValue);
		setisEmail(false);
	};

	const handleEdit = () => {
		setisEmail(true);
	};

	return (
		<>
			<Typography
				id="modal-modal-title"
				variant="h6"
				component="h2"
				sx={{ fontFamily: "monospace", fontWeight: 700 }}
			>
				Create Your Account
			</Typography>
			{isEmail ? (
				<EmailInput emailValue={email} nameValue={name} isLogin={false} handleClick={handleEmail} />
			) : (
				<PasswordInput
					isLogin={false}
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
