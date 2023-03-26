import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
	name: "comments",
	initialState: {
		data: [],
	},
	reducers: {
		setCommentsState: (state, action) => {
			state.data = action.payload;
		},
		addCommentsToState: (state, action) => {
			state.data = [...state.data, action.payload];
		},
		deleteCommentsState: (state, action) => {
			state.data = [];
		},
	},
});

export const selectCommentsState = (state) => state.comments.data;
export const { setCommentsState, deleteCommentsState, addCommentsToState } = commentsSlice.actions;

export default commentsSlice.reducer;
