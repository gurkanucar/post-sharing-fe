import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CommentCreateInput from "./CommentCreateInput";
import CommentItem from "./CommentItem";

import "./PostListComponent.css";

const PostListItem = (props) => {
  const { user, content, likedUsers, comments } = props.post;

  const [showComments, setShowComments] = useState(false);

  return (
    <div className="postItem">
      <div className="postItem__user">
        <img className="profile__image" src={user.profileImageUrl} />
        <span>{user.username}</span>
      </div>

      <div className="content">{content}</div>
      <hr></hr>

      <div className="postItem__actions">
        <Button size="sm" variant="dark">
          Like
        </Button>
        <Button size="sm" onClick={() => setShowComments(!showComments)}>
          Comment
        </Button>
      </div>
      {showComments && (
        <div>
          <div className="commentList">
            {comments?.map((x) => (
              <CommentItem comment={x} key={x.id} />
            ))}
          </div>
          <br />
          <CommentCreateInput />
        </div>
      )}
    </div>
  );
};

export default PostListItem;
