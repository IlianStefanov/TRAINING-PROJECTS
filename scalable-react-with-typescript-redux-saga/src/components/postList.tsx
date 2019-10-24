import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { IApplicationState } from "../state/ducks/index";
import {
	IDispatchToProps,
	IPostRaw,
	IPostState
} from "../state/ducks/post/types";
import Post from "./post";

type AllProps = IPostState & IDispatchToProps;

const PostList: React.FC<AllProps> = ({ data, fetchPosts }: AllProps) => {
	
	useEffect(() => {
		fetchPosts();
		
		
	}, [fetchPosts]);
	
	const isLoading = useSelector((state: IApplicationState) => state.post.loading);
	const displayContent = isLoading ? <div>Loading</div>
	: (
		<div>
			{data.map((post: IPostRaw) => (
					<Post key={post.id} post={post} />
			))}
		</div>
	);

	console.log(isLoading);

	return (
		<div>
			{displayContent}
		</div>
	);
};

export default PostList;
