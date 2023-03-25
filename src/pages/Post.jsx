import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/posts.api";
import {
	getCommentsByPostId,
	createComment,
	updateComment,
	deleteComment,
} from "../api/comments.api";
import { Box, Stack, Paper } from "@mui/material";
import PostCardSkeleton from "../components/PostCard/PostCardSkeleton";
import PostDetails from "../components/PostDetails";
import CommentDetails from "../components/Comment/CommentDetails";
import CreateComment from "../components/Comment/CreateComment";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import Link from "../components/UI/Link";
import { TextButton } from "../components/UI/Button";
export default function Post() {
	const { postId } = useParams();
	const currentUser = useSelector((state) => state.user.data);

	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [postDetails, setPostDetails] = useState(null);
	const [postComments, setPostComments] = useState([]);
	const [refetch, setRefetch] = useState(false);

	async function getPostData(id) {
		const postData = await getPostById(id);
		if (postData) setPostDetails(postData);
	}

	async function getPostComments(id) {
		const commentsData = await getCommentsByPostId(id);
		if (commentsData) setPostComments(commentsData);
		setLoading(false);
	}
	async function handleCreateComment(commentBody) {
		const newComment = await createComment({
			postId: postDetails.id,
			postedBy: user.id,
			body: commentBody,
		});
		if (newComment) setPostComments((prev) => [newComment, ...prev]);
	}

	function replaceComment(commentId, newComment) {
		const index = postComments.findIndex((comment) => comment.id === commentId);
		const newComments = [...postComments];
		newComments.splice(index, 1, newComment);
		setPostComments(newComments);
	}

	function deleteCommentFromList(commentId) {
		const newList = postComments.filter((comment) => comment.id !== commentId);
		setPostComments(newList);
	}

	async function handleUpdateComment(commentBody, id) {
		const newComment = await updateComment(
			{
				postId: postDetails.id,
				postedBy: user.id,
				body: commentBody,
			},
			id
		);
		if (newComment) {
			replaceComment(id, newComment);
		}
	}

	async function handleDeleteComment(commentId) {
		console.log(commentId);
		const newComment = await deleteComment(commentId);
		if (newComment) {
			deleteCommentFromList(commentId);
		}
	}

	useEffect(() => {
		getPostData(postId);
		getPostComments(postId);
	}, [postId, refetch]);

	useEffect(() => {
		currentUser.email && setUser(currentUser);
	}, [currentUser]);

	return (
		<Box sx={{ mt: 2 }}>
			<Box sx={{ mb: 4 }}>
				{postDetails ? (
					<PostDetails
						reFetch={setRefetch}
						userId={user.id}
						userName={user.name}
						post={postDetails}
					/>
				) : (
					<PostCardSkeleton />
				)}
			</Box>
			<Stack sx={{ mb: 1 }} direction="row" justifyContent="space-between" alignItems="flex-end">
				Comments | {postComments.length}
			</Stack>
			{user.email ? (
				<CreateComment handleSubmit={handleCreateComment} userName={user.name} />
			) : (
				<Paper sx={{ m: 2, p: 1, borderLeft: "3px solid tomato" }}>
					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<span>Login to Comment on the Post</span>
						<Link to="/login">
							<TextButton>Login</TextButton>
						</Link>
					</Stack>
				</Paper>
			)}
			<Box>
				<>
					<Stack spacing={0}>
						{postComments.length !== 0 ? (
							postComments.map((comment, index) => {
								return (
									<div key={index}>
										<CommentDetails
											isOwner={user.id && user.id === postDetails.userId}
											userId={user.id}
											comment={comment}
											handleUpdate={handleUpdateComment}
											handleDelete={handleDeleteComment}
										/>
									</div>
								);
							})
						) : (
							<>
								<Stack spacing={1}>
									{loading ? (
										<>
											{[1, 2].map((v) => (
												<div key={v}>
													<Skeleton variant="text" sx={{ fontSize: "2rem" }} width={210} />
													<Skeleton variant="rectangular" width="100%" height={60} />
													<hr />
												</div>
											))}
										</>
									) : (
										<span> No Comments..... </span>
									)}
								</Stack>
							</>
						)}
					</Stack>
				</>
			</Box>
		</Box>
	);
}
