import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./auth.slice";
import postSlice from "./post.slice";
import commentsSlice from "./comments.slice";
import usersListSlice from "./users.slice";

export default configureStore({
	reducer: {
		user: userSlice,
		posts: postSlice,
		comments: commentsSlice,
		usersList: usersListSlice,
	},
});

// import userSlice from "./auth.slice";
// import postSlice from "./post.slice";
// import commentsSlice from "./comments.slice";
// import usersListSlice from "./users.slice";

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";

// const persistConfig = {
// 	key: "root",
// 	storage,
// };

// const rootReducer = combineReducers({
// 	user: userSlice,
// 	posts: postSlice,
// 	comments: commentsSlice,
// 	usersList: usersListSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
// 	reducer: persistedReducer,
// 	devTools: process.env.NODE_ENV !== "production",
// 	middleware: [thunk],
// });

// export const persistor = persistStore(store);
