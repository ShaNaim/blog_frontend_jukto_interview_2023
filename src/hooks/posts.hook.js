import { useDispatch, useSelector } from "react-redux";
import { selectPostsState, setPostState, addPostToState } from "../redux/post.slice";
import useCommentsHandler from "./comments.hook";
import { selectCommentsState } from "../redux/comments.slice";
function usePostHandler() {
	const dispatch = useDispatch();
	const postsList = useSelector(selectPostsState);
	const comments = useSelector(selectCommentsState);
	const { deleteComment } = useCommentsHandler();
	function addPost(postData) {
		console.log({ postData });
		dispatch(addPostToState({ ...postData, id: postsList.length + 1 }));
		return { ...postData, id: postsList.length + 1 };
	}

	function deletePost(postId) {
		const filteredList = postsList.filter((post) => post.id !== postId);
		const commentsList = comments.filter((comment) => comment.postId === postId);
		const commentsIdList = commentsList.map((comment) => comment.id);
		const uniquePostsList = [...new Set(commentsIdList)];
		uniquePostsList.forEach((value) => {
			deleteComment(value);
		});
		dispatch(setPostState(filteredList));
	}

	function updatePost(postData) {
		const index = postsList.findIndex((post) => post.id === postData.id);
		const newComments = [...postsList];
		newComments.splice(index, 1, postData);
		dispatch(setPostState(newComments));
		return postData;
	}

	function getPostById(postId) {
		const filteredList = postsList.filter((post) => post.id === Number(postId));
		if (filteredList.length !== 0) return filteredList[0];
		return [];
	}

	return { addPost, deletePost, updatePost, getPostById };
}

export default usePostHandler;
