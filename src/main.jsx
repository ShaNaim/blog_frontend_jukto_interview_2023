import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorPage from "./error";
import Home from "./pages/Home";
import Root from "./pages/root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "contacts/:contactId",
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
