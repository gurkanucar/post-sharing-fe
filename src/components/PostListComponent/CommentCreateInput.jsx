import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import "./PostListComponent.css";
import { IoIosSend } from "react-icons/io";
import { addComment } from "../../api/apiCalls";
const CommentCreateInput = (props) => {
  const { postId, activeUser } = props;

  const [newComment, setNewComment] = useState("");

  const createCommentFunction = async (e) => {
    e.preventDefault();
    if (newComment != "" && newComment != undefined) {
      const obj = {
        post: { id: postId },
        comment: {
          content: newComment,
          user: { id: activeUser.id, username: activeUser.username },
        },
      };
      await addComment(obj);
      await setNewComment("");
    }
  };

  return (
    <div className="createCommentItem">
      <form onSubmit={createCommentFunction} className="createCommentContent">
        <input
          required
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
          className="createCommentComponent__input"
          placeholder="your comment.."
        />
        <button className="createCommentComponent__button" type="submit">
          <IoIosSend />
        </button>
      </form>
    </div>
  );
};

export default CommentCreateInput;
