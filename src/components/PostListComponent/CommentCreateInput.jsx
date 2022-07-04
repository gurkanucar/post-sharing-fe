import { Form, Button } from "react-bootstrap";
import React from "react";
import "./PostListComponent.css";

const CommentCreateInput = (props) => {
  return (
    <div className="createCommentItem p-2">
      <div className="createCommentContent">
        <Form.Control placeholder="your comment.."></Form.Control>
        <Button>></Button>
      </div>
    </div>
  );
};

export default CommentCreateInput;
