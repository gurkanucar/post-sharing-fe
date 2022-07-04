import React from "react";

import "./CreatePostComponent.css";

import { Container, Form, Button, Image } from "react-bootstrap";
const CreatePostComponent = () => {
  return (
    <div className="createPostComponent">
      <Form className="createPostComponent__form">
        <Form.Group className="mb-3 text-start">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" placeholder="..." />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Post!
        </Button>
      </Form>
    </div>
  );
};

export default CreatePostComponent;
