import React from "react";
import NotificationContent from "../components/Notification/NotificationContent";
import { useLocation } from "react-router-dom";
import TopMenuInside from "../components/TopMenu/TopMenuInside";

function NotificationPage() {
  const location = useLocation();
  const passedData = location.state;

  return (
    <>
      <TopMenuInside notifications />
      <NotificationContent data={passedData}></NotificationContent>
    </>
  );
}

export default NotificationPage;
