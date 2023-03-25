// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./user.slice";
// import postSlice from "./post.slice";

// export default configureStore({
// 	reducer: {
// 		user: userSlice,
// 		post: postSlice,
// 	},
// });

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import postSlice from "./post.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	user: userSlice,
	posts: postSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== "production",
	middleware: [thunk],
});

export const persistor = persistStore(store);
