import { getUserByEmail } from "../api/users.api";
import { useDispatch } from "react-redux";
import { setUserState } from "../redux/auth.slice";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
	const dispatch = useDispatch();
	const route = useNavigate();
	async function loginUser(user) {
		try {
			const existingUser = await getUserByEmail(user.email);
			if (!existingUser)
				throw {
					message: "User Dosen't Exists or Incorrect Email",
					origin: "email",
					authError: true,
				};
			// if (existingUser.password === user.password)
			// 	throw { message: "Incorrect Password", origin: "password", authError: true };
			dispatch(setUserState(existingUser));
			route("/");
		} catch (error) {
			throw error;
		}
	}
	return loginUser;
}
