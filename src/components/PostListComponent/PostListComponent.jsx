import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../api/apiCalls";
import PostListItem from "./PostListItem";

import "./PostListComponent.css";


const PostListComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadAllPosts();
  }, []);

  const loadAllPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response.data);
    } catch (error) {}
  };

  return (
    <div className="postListComponent">
      {posts?.map((post, index) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostListComponent;
