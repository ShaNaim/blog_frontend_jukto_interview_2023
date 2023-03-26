import { getUserByEmail } from "../api/users.api";
import { useDispatch, useSelector } from "react-redux";
import { setUserState } from "../redux/auth.slice";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../api/users.api";
import { addUsersListToState, selectUsersListState } from "../redux/users.slice";
export default function useAuthHandler() {
	const dispatch = useDispatch();
	const usersList = useSelector(selectUsersListState);
	const route = useNavigate();

	function loginUser(data) {
		try {
			const existingUser = usersList.filter((user) => user.email === data.email);
			if (existingUser.lenght === 0)
				throw {
					message: "User Dosen't Exists or Incorrect Email",
					origin: "email",
					authError: true,
				};
			dispatch(setUserState(existingUser[0]));
			route("/");
		} catch (error) {
			console.error({ error });
			throw error;
		}
	}

	function registerUser(user) {
		console.log("Hook", usersList);
		dispatch(
			addUsersListToState({
				email: user.email,
				name: user.name,
				phone: user.phone,
				id: usersList.length + 1,
			})
		);
		dispatch(
			setUserState({
				email: user.email,
				name: user.name,
				phone: user.phone,
				id: usersList.length + 1,
			})
		);
		route("/");
	}

	function checkUserExists(email) {
		const existingUser = usersList.filter((user) => user.email === email);
		return existingUser;
	}

	function getUserById(id) {
		const existingUser = usersList.filter((user) => user.id === id);
		return existingUser[0];
	}

	return { loginUser, registerUser, checkUserExists, getUserById };
}
