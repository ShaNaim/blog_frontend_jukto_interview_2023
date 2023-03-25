import React from "react";
import PostForm from "./PostForm";
export default function PostUpdate({ post, setEdit }) {
	function handleUpdate(data) {
		console.log(data);
		setEdit(false);
	}
	return (
		<div>
			<PostForm handleSubmit={handleUpdate} updateData={post} />
		</div>
	);
}
