import React from "react";
import PostForm from "./PostForm";
import { updatePost } from "../api/posts.api";
export default function PostUpdate({ post, setEdit, user, reFetch }) {
	async function handleUpdate(data) {
		const updatedPost = await updatePost(
			{
				title: data.title,
				body: data.description,
				feeling: data.feeling,
				userId: user.id,
				userName: user.name,
			},
			post.id
		);
		setEdit(false);
		reFetch((prev) => !prev);
	}
	return (
		<div>
			<PostForm handleSubmit={handleUpdate} updateData={post} />
		</div>
	);
}
