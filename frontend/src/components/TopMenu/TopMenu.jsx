import React, { useEffect, useState } from "react";
import Notification from "../Notification/Notification";
import Settings from "../Settings/Settings";
import RedDotIcon from '../Icons/RedDotIcon';
import "./topMenu.css";
import { useNavigate } from "react-router-dom";

export default function TopMenu({ data }) {

  if (!data) return null;
  const navigate = useNavigate();
  const [notificationContentOpened, setNotificationContentOpened] = useState(false);
  const isNewItem = data.some(i => {
    const scanningDateString = i.date_added.split(" ")[0];
    const today = new Date();
    const scanningDate = new Date(scanningDateString);
    const timeDifference = today - scanningDate;

    const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;

    return timeDifference <= oneDayInMilliseconds;
  });

  const handleNotificationClick = () => {
    navigate(`/Notifications`, { state: data });
    setNotificationContentOpened(true);
  };

  return (
    <>
      <div className="topMenu">
        {isNewItem ? (
          <RedDotIcon onClick={handleNotificationClick} />
        ) : (
          <Notification onClick={handleNotificationClick} />
        )}
        <Settings />
      </div>
    </>
  );
}
