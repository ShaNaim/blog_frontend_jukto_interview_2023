import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./error";
import Home from "./pages/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import { ThemeProvider } from "styled-components";
import Login from "./pages/login";
import Register from "./pages/register";
import { Provider } from "react-redux";
import store from "./redux/store";

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
				path: "/posts",
				element: <Home />,
			},
			{
				path: "/posts/create",
				element: <CreatePost />,
			},
		],
	},
]);

const theme = {
	color: {
		surface: {
			main: "#ffffff",
			primary: "##dfe6e9",
			secondary: "#b2bec3",
		},
		main: "#3194e0",
		secondary: "#74b9ff",
		warning: "#fdcb6e",
		error: "#d63031",
		button: {
			success: "#258f3c",
			error: "#d63031",
			update: "#a29bfe",
		},
		text: {
			primary: "#2d3436",
			secondary: "#6c5ce7",
			subtitle: "#bbb5b5",
		},
	},
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
