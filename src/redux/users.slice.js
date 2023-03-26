import { createSlice } from "@reduxjs/toolkit";

export const usersListSlice = createSlice({
	name: "usersList",
	initialState: {
		data: [],
	},
	reducers: {
		setUsersListState: (state, action) => {
			state.data = action.payload;
		},
		addUsersListToState: (state, action) => {
			state.data = [...state.data, action.payload];
		},
		deleteUsersListState: (state, action) => {
			state.data = [];
		},
	},
});

export const selectUsersListState = (state) => state.usersList.data;
export const { setUsersListState, deleteUsersListState, addUsersListToState } =
	usersListSlice.actions;

export default usersListSlice.reducer;
