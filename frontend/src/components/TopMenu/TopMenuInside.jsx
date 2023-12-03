import React, { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import Settings from "../Settings/Settings";
import "./topMenu.css";
import { useNavigate } from "react-router-dom";

export default function TopMenuInside({ settings, notifications }) {
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <div className="topMenu__inside">
      <div className="topMenu__inside--back" onClick={goHome}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 15.9997L12.6667 9.33301M6 15.9997L12.6667 22.6663M6 15.9997L19.3333 15.9997C21.5556 15.9997 26 17.333 26 22.6663"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="topMenu">
        <Notification className="bellIcon" fill={notifications} />
        <Settings fill={settings} />
      </div>
    </div>
  );
}
