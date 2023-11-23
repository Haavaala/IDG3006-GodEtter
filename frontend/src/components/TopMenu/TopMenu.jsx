import React, { useState } from "react";
import Notification from "../Notification/Notification";
import Settings from "../Settings/Settings";
import "./topMenu.css";
import { useNavigate } from "react-router-dom";

export default function TopMenu({ data }) {

  if (!data) return null;

  const navigate = useNavigate();
  const [setNotificationContentOpened] = useState(false);

  const isNewItem = data.some(i => {
    const scanningDateString = i.date_added.split(" ")[0];
    const today = new Date();
    const scanningDate = new Date(scanningDateString);
    const timeDifference = today - scanningDate;

    const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;

    return timeDifference <= oneDayInMilliseconds;
  });

  const handleNotificationClick = () => {
    navigate("/notifications")
    setNotificationContentOpened(true);
  };



  // const today = new Date().toISOString().split('T')[0]; // Format: 'YYYY-MM-DD'
  const filteredData = data.filter(obj => {
    const scanningDateString = obj.date_added.split(" ")[0];
    const today = new Date();
    const scanningDate = new Date(scanningDateString);
    const timeDifference = today - scanningDate;

    const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;
    
    return timeDifference <= oneDayInMilliseconds;
  });

  console.log('filterData',filteredData)

  const dotColor = filteredData.some(obj => obj.name == null || obj.name == '')?'#BD6F4E':'#6B8F55';

  return (
    <>
      <div className="topMenu">
        {isNewItem ? (
          <Notification className="bellIcon" onClick={handleNotificationClick} dotColor={dotColor} />
        ) : (
          <Notification className="bellIcon" onClick={handleNotificationClick} />
        )}
        <Settings />
      </div>
    </>
  );
}
