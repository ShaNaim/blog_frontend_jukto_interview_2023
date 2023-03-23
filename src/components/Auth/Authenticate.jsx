import React from "react";

import Login from "./Login";
import Register from "./Register";

export default function Authenticate({ isLogin = false, handleSubmit }) {
	return (
		<>
			{isLogin ? <Login handleSubmit={handleSubmit} /> : <Register handleSubmit={handleSubmit} />}
		</>
	);
}
