import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import postSlice from "./post.slice";

export default configureStore({
	reducer: {
		user: userSlice,
		post: postSlice,
	},
});
