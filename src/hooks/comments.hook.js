import { useDispatch, useSelector } from "react-redux";
import {
	selectCommentsState,
	setCommentsState,
	deleteCommentsState,
	addCommentsToState,
} from "../redux/comments.slice";

function useCommentsHandler() {
	const dispatch = useDispatch();
	const commentsList = useSelector(selectCommentsState);

	function addComment(commentData) {
		dispatch(
			addCommentsToState({
				...commentData,
				id: commentsList.length + 1,
			})
		);
		return {
			...commentData,
			id: commentsList.length + 1,
		};
	}

	function deleteComment(commentId) {
		const filteredList = commentsList.filter((comment) => comment.id !== commentId);
		dispatch(setCommentsState(filteredList));
		return true;
	}

	function updateComment(commentData) {
		const index = commentsList.findIndex((comment) => comment.id === commentData.id);
		const newComments = [...commentsList];
		newComments.splice(index, 1, commentData);
		dispatch(setCommentsState(newComments));
		return commentData;
	}

	function getCommentByPostId(postId) {
		const filteredList = commentsList.filter((comment) => comment.postId === Number(postId));
		if (filteredList.length !== 0) return filteredList;
		return [];
	}

	function postsUserHaveCommentedOn(userEmail) {
		const filteredList = commentsList.filter((comment) => comment.email === userEmail);
		const postsList = filteredList.map((comment) => comment.postId);
		const uniquePostsList = [...new Set(postsList)];
		return uniquePostsList;
	}

	return { addComment, deleteComment, updateComment, getCommentByPostId, postsUserHaveCommentedOn };
}

export default useCommentsHandler;
