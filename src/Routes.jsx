import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import App from "./App";
import ErrorPage from "./error";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/login";
import Register from "./pages/register";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/posts/create",
				element: <CreatePost />,
			},
			{
				path: "/posts",
				element: <Posts />,
			},
			{
				path: "/posts/:postId",
				element: <Post />,
			},
		],
	},
]);

export default function Routes() {
	return <RouterProvider router={router} />;
}
