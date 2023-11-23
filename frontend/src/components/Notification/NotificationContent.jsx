import React, { useEffect, useRef, useState } from "react";
import Stroke from "../Stroke/Stroke";
import "./notificationContent.css";
import EditItem from "../EditItem/EditItem";
import instance from "../../instance";
import Button from "../Button/Button";

function NotificationContent() {
  const deviceId = 1001;

  const [data, setData] = useState([]);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editBarcode, setEditBarcode] = useState("");
  const [editDate, setEditDate] = useState("");

  const editDialogRef = useRef();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    try {
      // Axios POST req til /get_device_inventory.php med deviceId i data
      // Hent kjøleskapet
      await instance
        .post("/get_device_inventory.php", { device_id: deviceId })
        .then((res) => {
          setData(res.data.data);
        });
    } catch (error) {
      console.error("Error in fridge data");
    }
  };

  const handleDeleteItem = (dBarcode, dDatestamp) => {
    const postdata = {
      device_id: deviceId,
      datestamp: dDatestamp,
    };

    instance
      .post(`/delete_item.php?barcode=${dBarcode}`, postdata)
      .then((response) => {
        console.log(
          `You deleted product with barcode: ${dBarcode}`,
          response.data
        );
        retrieveData();
      })
      .catch((error) => {
        console.error("Error ved sletting item", error);
      });
  };

  // Function for toggling the edit dialog
  const toggleEditDialog = () => {
    setIsEditDialogOpen(!isEditDialogOpen);
  };

  if (!data) return null;

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
                    {i.name === "" ? (
                      <>
                        <p>
                          Oops! Vi fant ikke varen som ble scannet og lagt til i
                          Ditt Kjøleskap {i.date_added}, den ble tildelt navn
                          “Udefinert vare”.
                        </p>
                        <div className="notification-bar__buttons">
                          <Button
                            icon={true}
                            type={1}
                            func={() => {
                              setEditBarcode(i.barcode);
                              setEditDate(i.date_added);
                              toggleEditDialog();
                            }}
                          >
                            Registrer varen manuelt
                          </Button>
                          <Button
                            icon={true}
                            type={2}
                            option={2}
                            func={() => {
                              handleDeleteItem(i.barcode, i.date_added);
                            }}
                          >
                            Slett varen
                          </Button>
                        </div>
                      </>
                    ) : (
                      <p>
                        Varen "{i.name}" ble scannet og lagt til i Ditt
                        Kjøleskap {i.date_added}.
                      </p>
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

      {isEditDialogOpen && (
        <dialog className="editDialog" ref={editDialogRef} open>
          <EditItem
            barcode={editBarcode}
            dateScanned={editDate}
            toggleEditDialog={toggleEditDialog}
          />
        </dialog>
      )}
    </>
  );
}

export default NotificationContent;
