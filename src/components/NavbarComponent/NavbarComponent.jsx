import React, { useEffect, useState } from "react";
import { NavLink, Toast } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { add, removeFromToastList } from "../../store/deliveredNotifs";
import { useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
  const user = useSelector((state) => state.auth.value.user);
  const allDeliveredNotifs = useSelector(
    (state) => state.deliveredNotifs.value.notifs
  );

  const notifToastList = useSelector(
    (state) => state.deliveredNotifs.value.notifToastList
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let url = "http://localhost:8080/push-notifications/" + user.id;
    const sse = new EventSource(url);

    sse.addEventListener("user-list-event", (event) => {
      const data = JSON.parse(event.data);
      dispatch(add({ newNotifs: data }));
    });

    sse.onerror = () => {
      sse.close();
    };
    return () => {
      sse.close();
    };
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Post Sharing</Navbar.Brand>
        <div className="d-flex ">
          <NavLink>
            <Button onClick={() => navigate("/home")} variant="dark">
              Home
            </Button>
          </NavLink>
          <NavLink>
            <Button onClick={() => navigate("/notif")} variant="primary">
              Notifications
              <Badge style={{ marginLeft: 15 }} bg="dark">
                {allDeliveredNotifs.length}
              </Badge>
            </Button>
          </NavLink>
        </div>
      </Container>
      <div
        style={{
          position: "absolute",
          zIndex: 99,
          top: 80,
          right: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {notifToastList.map((x, index) => (
          <Toast
            style={{
              color: "white",
              fontSize: "20px",
              borderRadius: 8,
              backgroundColor: "#2E68FF",
            }}
            key={x.id}
            autohide={true}
            delay={3500}
            onClose={() => {
              dispatch(removeFromToastList({ notif: x }));
            }}
          >
            <Toast.Body>{x.content}</Toast.Body>
          </Toast>
        ))}
      </div>
    </Navbar>
  );
};
