import React, { useEffect, useState } from "react";
import Stroke from "../Stroke/Stroke";
import "./notificationContent.css";
import instance from "../../instance";
import { useNavigate } from "react-router-dom";

function NotificationContent({data}) {
  if(!data) return null
  console.log(data)

  const navigate = useNavigate();
  
  const [message, setMessage] = useState()
  //legge det som er data i en egen usestate for varsler så det er mulig å slette varsler og ha de nyeste varslene og når det er ny varsel skal det indikeres med tegn i bjella
  //hver message kan ha en egen "ny" som er true eller false - en som er for om den er relevant eller ikke


  const formatDate = (date) => {
    date.split(" ")[0];
    const dateObject = new Date(date);
    
    const dateScannedSplit = dateScanned.split(" ")[0];
    const dateScannedObject = new Date(dateScannedSplit);

    let day = "";
    let month = "";
    let year = "";

    if (isNaN(dateObject)) {
      const twoWeeksLater = new Date(dateScannedObject.getTime() + 14 * 24 * 60 * 60 * 1000);

      day = twoWeeksLater.getDate().toString().padStart(2, '0');
      month = (twoWeeksLater.getMonth() + 1).toString().padStart(2, '0'); 
      year = twoWeeksLater.getFullYear();
    } else {
      day = dateObject.getDate().toString().padStart(2, "0");
      month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      year = dateObject.getFullYear().toString().slice(-2);
    }

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  // const checkDate = (date, name) => {
  //   const scanningDateString = date.split(" ")[0];

  //   const today = new Date();
  //   const scanningDate = new Date(scanningDateString);

  //   const timeDifference = today - scanningDate; // Difference in milliseconds

  //   const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;

  //   if (timeDifference <= oneDayInMilliseconds) {
  //     return (
  //     <>
  //       <div>
  //       {(name === '')?<p>Oops! Varen “{name}” ble scannet og lagt til i Ditt Kjøleskap {date}.</p>:<p>Varen “{name}” ble scannet og lagt til i Ditt Kjøleskap {date}.</p>}
  //       {(name === '')?<button>Hei</button>:''}
        
  //       </div>
  //       <Stroke />
  //     </>
  //   )
  // }
  // };

  return (
    <>
      <div className="all_notifications">
        <h1>Varsler</h1>
        <Stroke />
        {data && data.length > 0 ? (
          data.map((i) => {
            const scanningDateString = i.date_added.split(" ")[0];
            const today = new Date();
            const scanningDate = new Date(scanningDateString);
            const timeDifference = today - scanningDate;

            const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;

            if (timeDifference <= oneDayInMilliseconds) {
              return (
                <>
                  <div className="notification-bar">
                    {i.name === '' ? (
                      <>
                        <p>Oops! Vi fant ikke varen som ble scannet og lagt til i Ditt Kjøleskap {i.date_added}, den ble tildelt navn “Udefinert vare”.</p>
                        <button  onClick={() =>{
                      navigate(`/Edititem/${i.barcode}/${i.date_added}`)
                    }} className="edit_button--notification">Rediger vare</button>
                        <button className="delete_button--notification">Slett vare</button>
                      </>
                    ) : (
                      <p>Varen "{i.name}" ble scannet og lagt til i Ditt Kjøleskap {i.date_added}.</p>
                    )}
                  </div>
                  <Stroke />
                </>
              );
            }
          })
        ) : (
          <p> Du har ingen varer nylig lagt inn i ditt kjøleskap. </p>
        )}
      </div>
    </>
  );
}

export default NotificationContent;
