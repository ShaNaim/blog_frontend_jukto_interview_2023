import React from "react";
import usePostHandler from "../hooks/posts.hook";
import PostForm from "./PostForm";
export default function PostUpdate({ post, setEdit, user, reFetch }) {
	const { updatePost } = usePostHandler();
	async function handleUpdate(data) {
		const updatedPost = await updatePost({
			title: data.title,
			body: data.description,
			userId: user.id,
			id: post.id,
		});
		setEdit(false);
		reFetch((prev) => !prev);
	}
	return (
		<div>
			<PostForm handleSubmit={handleUpdate} updateData={post} />
		</div>
	);
}
