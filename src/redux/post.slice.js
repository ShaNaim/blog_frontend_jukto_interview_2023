import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
	name: "post",
	initialState: {
		data: [],
	},
	reducers: {
		setPostState: (state, action) => {
			state.data = action.payload;
		},

		deletePostState: (state, action) => {
			state.data = [];
		},
	},
});

export const { setPostState, deletePostState } = postSlice.actions;

export default postSlice.reducer;
