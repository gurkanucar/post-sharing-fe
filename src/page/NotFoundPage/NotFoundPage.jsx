import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  let navigate = useNavigate();

  return (
    <div className="wrapper fadeIn">
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        not found !
        <br />
        <h3 onClick={() => navigate("/home")} className="redirect-home">
          home
        </h3>
      </div>
    </div>
  );
};

export default NotFoundPage;
