import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		data: {},
	},
	reducers: {
		setUserState: (state, action) => {
			state.data = action.payload;
		},

		deleteUserState: (state, action) => {
			state.data = {};
		},
	},
});

// export

export const { setUserState, deleteUserState } = userSlice.actions;

export default userSlice.reducer;
