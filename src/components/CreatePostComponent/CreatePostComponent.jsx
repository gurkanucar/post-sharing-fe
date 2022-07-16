import React, { useState } from "react";

import "./CreatePostComponent.css";

import { IoIosSend } from "react-icons/io";

import { Container, Form, Button, Image } from "react-bootstrap";
import { createPost } from "../../api/apiCalls";
const CreatePostComponent = (props) => {
  const { content, setContent, createPostFunction } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    createPostFunction();
  };

  return (
    <div className="createPostComponent">
      <form onSubmit={onSubmit} className="createPostComponent__form">
        <input
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="type something.."
          className="createPostComponent__input"
        />
        <button className="createPostComponent__button" type="submit">
          <IoIosSend /> Send
        </button>
      </form>
    </div>
  );
};

export default CreatePostComponent;
