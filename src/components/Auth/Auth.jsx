import React from "react";

import Box from "@mui/material/Box";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";
import NotifyAlert from "../UI/NotifyAlert";
import Authenticate from "./Authenticate";
import useAuthHandler from "../../hooks/auth.hook";
export default function Auth({ login = false, isPage = false }) {
	const router = useNavigate();
	const [isLogin, setIsLogin] = React.useState(login);
	const [hasError, setHasError] = React.useState(false);
	const [errorMessage, setErrorMessage] = React.useState(false);
	// const register = useRegister();
	// const loginUser = useLogin();
	const { loginUser, registerUser } = useAuthHandler();
	const handleSubmit = (user) => {
		try {
			if (isLogin) {
				loginUser(user);
			} else {
				registerUser(user);
			}
		} catch (error) {
			console.error({ error });
			if (error.authError) {
				setHasError(true);
				setErrorMessage(error.message);
			}
		}
	};

	const handleRouteClick = () => {
		if (isPage) {
			return router(isLogin ? "/register" : "/login");
		}
		return setIsLogin((prev) => !prev);
	};
	return (
		<>
			<Box
				sx={{
					width: "100%",
					minHeight: "40vh",
					backgroundColor: "#fff",
					px: { xs: 2, md: 4, lg: 8 },
					py: 4,
					marginTop: "10px",
					borderRadius: "18px",
					boxShadow: `10px 10px 16px -1px ${isLogin ? "#118aa044" : "#0f833244"}`,
				}}
			>
				<Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
					<Stack
						direction="column"
						justifyContent="space-between"
						alignItems="center"
						spacing={4}
						sx={{ width: "100%" }}
					>
						<Authenticate handleSubmit={handleSubmit} isLogin={isLogin} />
						<Typography
							sx={{ fontFamily: "monospace", fontWeight: 700 }}
							id="modal-modal-title"
							variant="caption"
							component="span"
						>
							{isLogin ? "Don't Have an Account ?" : "Already Have an Account ?"}
							<Typography
								sx={{
									color: "#14a0d8",
									"&:hover": { cursor: "pointer" },
									fontSize: "14px",
									ml: 1,
									fontFamily: "monospace",
									fontWeight: 300,
								}}
								variant="caption"
								component="a"
								onClick={handleRouteClick}
							>
								{isLogin ? "Register" : "Login"}
							</Typography>
						</Typography>
					</Stack>
				</Stack>
				<NotifyAlert open={hasError} setOpen={setHasError} type="error" message={errorMessage} />
			</Box>
		</>
	);
}
