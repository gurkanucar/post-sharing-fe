import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../api/apiCalls";
import PostListItem from "./PostListItem";

import "./PostListComponent.css";

const PostListComponent = (props) => {
  const { posts, activeUser } = props;

  return (
    <div className="postListComponent">
      {posts
        .sort((a, b) => new Date(b.created) - new Date(a.created))
        .map((post, index) => (
          <PostListItem key={post.id} post={post} activeUser={activeUser} />
        ))}
    </div>
  );
};

export default PostListComponent;
