import React, { useEffect, useState } from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserByUsername } from "../../api/apiCalls";
import CreatePostComponent from "../../components/CreatePostComponent/CreatePostComponent";
import PostListComponent from "../../components/PostListComponent/PostListComponent";
import { login } from "../../store/auth";

import "./LoginPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userCredientals, setUserCredientals] = useState({
    username: "",
    password: "",
  });

  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await getUserByUsername(userCredientals.username);
    const user = res.data;
    if (user != undefined) {
      dispatch(login({ user }));
      console.log(user);
    }
    navigate("/home");
  };

  return (
    <Container className="loginPage">
  
      {/* <CreatePostComponent />
      <Form className="formLogin" onSubmit={loginHandler}>
        <Form.Group className="mb-3 text-start" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            required
            value={userCredientals.username}
            onChange={(e) =>
              setUserCredientals({
                ...userCredientals,
                username: e.target.value,
              })
            }
            placeholder="Enter username"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </div>
        <br />
      </Form> */}
    </Container>
  );
};

export default LoginPage;
