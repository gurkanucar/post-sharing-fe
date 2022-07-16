import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../api/apiCalls";
import PostListItem from "./PostListItem";

import "./PostListComponent.css";
import { Spinner } from "react-bootstrap";

const PostListComponent = (props) => {
  const { posts, activeUser } = props;

  return (
    <div className="postListComponent">
      {posts.length > 0 ? (
        posts
          .sort((a, b) => new Date(b.created) - new Date(a.created))
          .map((post, index) => (
            <PostListItem key={post.id} post={post} activeUser={activeUser} />
          ))
      ) : (
        <h1 style={{ marginTop: 50 }}>Loading...</h1>
      )}
    </div>
  );
};

export default PostListComponent;
