import { Button } from "react-bootstrap";
import React from "react";
import { FaTrash } from "react-icons/fa";
import "./PostListComponent.css";
import { removeComment } from "../../api/apiCalls";

const CommentItem = (props) => {
  const { activeUser, comment, postId, updateComments } = props;
  const { content, user } = comment;

  const onDeleteClick = async () => {
    await removeComment({ post: { id: postId }, comment: { ...comment } });
    updateComments();
  };

  return (
    <div className="commentItem">
      <div className="comment_content">
        <img className="comment__profile__image" src={user.profileImageUrl} />
        <span className="comment__username">{user.username}:</span>
        <span>{content}</span>
      </div>
      {activeUser.username == user.username && (
        <div className="comment__actions" onClick={onDeleteClick}>
          <FaTrash />
        </div>
      )}
    </div>
  );
};

export default CommentItem;
