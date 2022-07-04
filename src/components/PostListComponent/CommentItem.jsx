import { Button } from "react-bootstrap";
import React from "react";

import "./PostListComponent.css";

const CommentItem = (props) => {
  const { content, user } = props.comment;

  return (
    <div className="commentItem">
      <div className="comment">
        <div className="comment_content">
          <img className="comment__profile__image" src={user.profileImageUrl} />
          <span>{user.username}:</span>
        </div>
        <span>{content}</span>
      </div>
      <div className="comment__actions" size="sm">
        X
      </div>
    </div>
  );
};

export default CommentItem;
