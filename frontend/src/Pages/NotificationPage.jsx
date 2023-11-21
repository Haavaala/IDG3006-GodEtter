import React from 'react'
import NotificationContent from '../components/Notification/NotificationContent'
import { useLocation } from 'react-router-dom'
import TopMenu from '../components/TopMenu/TopMenu';

function NotificationPage() {
  const location = useLocation();
  const passedData = location.state;

  return (
    <>
      <TopMenu />
      <NotificationContent data={passedData}></NotificationContent>
    </>
  )
}

export default NotificationPage