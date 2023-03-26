import { createNewUser } from "../api/users.api";
import { useDispatch } from "react-redux";
import { setUserState } from "../redux/auth.slice";
import { useNavigate } from "react-router-dom";

export default function useRegister() {
	const dispatch = useDispatch();
	const route = useNavigate();
	async function registerUser(user) {
		const newUser = await createNewUser({
			email: user.email,
			name: user.name,
			phone: user.phone,
			password: user.password,
		});
		if (!newUser) throw "Create User Failed";
		dispatch(setUserState(newUser));
		route("/");
	}
	return registerUser;
}
