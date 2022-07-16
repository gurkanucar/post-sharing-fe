import React, { useEffect, useState } from "react";
import { changeNotifStatusToRead, getAllNotifs } from "../../api/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import "./NotifPage.css";
import { clear } from "../../store/deliveredNotifs";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { AiFillLeftCircle } from "react-icons/ai";

export const NotifPage = () => {
  const user = useSelector((state) => state.auth.value.user);

  const [notifications, setNotifications] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(clear());
    const data = await (await getAllNotifs(user.id)).data;
    setNotifications(data);
  };

  const readNotif = async (id) => {
    await changeNotifStatusToRead(id);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="notif__page">
      <div className="top">
        <AiFillLeftCircle
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
          size={35}
        />
        <h1>Notif Page</h1>
      </div>
      <div className="notif__list">
        {notifications.map((x) => (
          <div
            key={x.id}
            className="notif__item"
            style={{
              backgroundColor: x.read == false ? "#2E68FF" : "white",
              color: x.read == false ? "#fff" : "#2E68FF",
            }}
          >
            <span>{x.content}</span>
            <Button onClick={() => readNotif(x.id)} variant="dark" size="sm">
              Read
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
