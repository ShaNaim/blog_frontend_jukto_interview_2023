import React from "react";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FunctionButton from "./FunctionButton";
import { boxSxObject, inputSxObject } from "./styles";
export default function PasswordInput({
	handleClick,
	password,
	setPassword,
	email,
	handleEdit,
	isLogin,
}) {
	const [showPassword, setShowPassword] = React.useState(false);
	const [passwordError, setPasswordError] = React.useState(false);

	const [passwordConfirm, setPasswordConfirm] = React.useState("");
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const [passwordConfirmError, setPasswordConfirmError] = React.useState(false);

	const handleSubmit = () => {
		if (password === "") return setPasswordError(true);
		if (password !== passwordConfirm && !isLogin) {
			setPasswordError(true);
			setPasswordConfirmError(true);
			return;
		}
		return handleClick();
	};

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Box sx={boxSxObject}>
				<FormControl sx={inputSxObject} variant="outlined">
					<InputLabel htmlFor="editable-email-input">Email</InputLabel>
					<OutlinedInput
						id="editable-email-input"
						type="email"
						endAdornment={
							<InputAdornment position="end">
								<Button onClick={handleEdit}>EDIT</Button>
							</InputAdornment>
						}
						label="Email"
						value={email}
					/>
					<FormControl sx={{ ...inputSxObject, marginTop: "20px" }} variant="outlined">
						<InputLabel htmlFor="password-label">Password</InputLabel>
						<OutlinedInput
							error={passwordError}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							id="password-label"
							type={showPassword ? "text" : "password"}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
						{passwordError && !passwordConfirmError ? (
							<span style={{ color: "red" }}>Password Can't Be Empty</span>
						) : (
							<></>
						)}
					</FormControl>
					{!isLogin ? (
						<FormControl sx={{ ...inputSxObject, marginTop: "-8px" }} variant="outlined">
							<InputLabel htmlFor="confirm-password-label">Confirm Password</InputLabel>
							<OutlinedInput
								error={passwordConfirmError}
								value={passwordConfirm}
								onChange={(e) => setPasswordConfirm(e.target.value)}
								id="confirm-password-label"
								type={showConfirmPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowConfirmPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
										>
											{showConfirmPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Confirm Password"
							/>
							{passwordConfirmError ? (
								<span style={{ color: "red" }}>Passwords Don't Match</span>
							) : (
								<></>
							)}
						</FormControl>
					) : (
						<></>
					)}
				</FormControl>

				<FunctionButton isLogin={isLogin} handleClick={handleSubmit}>
					{isLogin ? "Login" : "Create Account"}
				</FunctionButton>
			</Box>
		</>
	);
}
