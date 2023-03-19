import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./error";
import Home from "./pages/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		index: <Home />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "posts",
				element: <Home />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
