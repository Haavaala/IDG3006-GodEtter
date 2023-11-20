import React, { useEffect } from "react";
import Notification from "../Notification/Notification";
import Settings from "../Settings/Settings";
import "./topMenu.css";
import { useNavigate, useParams } from "react-router-dom";

export default function TopMenu() {
  const navigate = useNavigate();

  return (
    <>
      <div className="topMenu">
        <Notification
          onClick={() => {
            console.log("HALLØA");
            navigate(`/Notifications`);
          }}
        />
        <Settings />
      </div>
    </>
  );
}
