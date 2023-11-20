import React from "react";
import Stroke from "../Stroke/Stroke";
import "./notificationContent.css";
function NotificationContent() {
  return (
    <>
      <div className="all_notifications">
        <h1>Varsler</h1>
        <Stroke />
        <div className="success_scan">
          <p>
            Varen "Navn fra scanningen" ble scannet og lagt til i Ditt kjøleskap
            "dato, 12.12.2222" kl "12.11"
          </p>
        </div>
        <Stroke />
        <div className="input_needed"></div>
        <p>
          Oops! Vi fant ikke varen som ble scannet og lagt til i Ditt Kjøleskap
          13.10.23 kl. 13:04, den ble tildelt navn “Ukategorisert vare”.
        </p>
        <button>Rediger Varen</button>
        <button>Slett varen</button>
        <Stroke />
      </div>
    </>
  );
}

export default NotificationContent;
