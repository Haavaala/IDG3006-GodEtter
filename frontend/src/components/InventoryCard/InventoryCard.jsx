import React, { useRef, useState, useEffect } from "react";
import "./inventoryCard.css";
import NewSticker from "./NewSticker";
import instance from "../../instance";
import EditItem from "../EditItem/EditItem";
import Button from "../Button/Button";

export default function InventoryCard({
  volume,
  title,
  iconSmall,
  iconBig,
  dateBestBefore,
  dateScanned,
  brand,
  allergens,
  barcode,
  datestamp,
  retrieveData,
  edited,
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const dialogRef = useRef();
  const editDialogRef = useRef();

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // Function for toggling the edit dialog
  const toggleEditDialog = () => {
    retrieveData();
    setIsEditDialogOpen(!isEditDialogOpen);
  };

  // Function for toggling the edit dialog and closing the other one
  const toggleEditDialog2 = () => {
    closeDialog();
    setIsEditDialogOpen(!isEditDialogOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isDialogOpen &&
        dialogRef.current &&
        !dialogRef.current.contains(event.target)
      ) {
        closeDialog();
      }
    };

    if (isDialogOpen || isEditDialogOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document
        .querySelectorAll(".disable-pointer-events")
        .forEach((element) => {
          element.style.pointerEvents = "none";
        });
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document
        .querySelectorAll(".disable-pointer-events")
        .forEach((element) => {
          element.style.pointerEvents = "auto";
        });
      document.body.style.overflow = "auto";
    };
  }, [isDialogOpen, isEditDialogOpen]);
  // const dialogRef = useRef(null);

  const device_id = 1001;

  // const openDialog = () => {
  //   dialogRef.current.showModal();
  // };

  //legger bare til slettefunksjonalitet her
  const handleDeleteItem = () => {
    const data = {
      barcode,
      device_id,
      datestamp,
    };
    instance
      .post(`/delete_item.php?barcode=${barcode}`, data)
      .then((response) => {
        console.log(`Du sletta den ${barcode}`, response.data);
        retrieveData();
        closeDialog();

        // setData((prevData) => prevData.filter((item) => item.barcode !== barcode));
      })
      .catch((error) => {
        console.error("Error ved sletting item", error);
      });
  };

  // const closeDialog = () => {
  //   dialogRef.current.close();
  // };

  const formatDate = (date) => {
    date.split(" ")[0];
    const dateObject = new Date(date);

    const dateScannedSplit = dateScanned.split(" ")[0];
    const dateScannedObject = new Date(dateScannedSplit);

    let day = "";
    let month = "";
    let year = "";

    if (isNaN(dateObject)) {
      const twoWeeksLater = new Date(
        dateScannedObject.getTime() + 14 * 24 * 60 * 60 * 1000
      );

      day = twoWeeksLater.getDate().toString().padStart(2, "0");
      month = (twoWeeksLater.getMonth() + 1).toString().padStart(2, "0");
      year = twoWeeksLater.getFullYear();
    } else {
      day = dateObject.getDate().toString().padStart(2, "0");
      month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
      year = dateObject.getFullYear().toString().slice(-2);
    }

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
  };

  const formatTime = (date) => {
    const dateObject = new Date(date);

    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();

    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };

  const setNewSticker = (size) => {
    const scanningDateString = dateScanned.split(" ")[0];

    const today = new Date();
    const scanningDate = new Date(scanningDateString);

    const timeDifference = today - scanningDate; // Difference in milliseconds

    const oneDayInMilliseconds = 1 * 24 * 60 * 60 * 1000;

    if (timeDifference <= oneDayInMilliseconds) {
      return <NewSticker size={size} />;
    }
  };

  const checkBestBeforeDate = () => {
    const dateBestBeforeSplit = dateBestBefore.split(" ")[0];
    const dateBestBeforeObject = new Date(dateBestBeforeSplit);

    const dateScannedSplit = dateScanned.split(" ")[0];
    const dateScannedObject = new Date(dateScannedSplit);

    if (isNaN(dateBestBeforeObject)) {
      const twoWeeksLater = new Date(
        dateScannedObject.getTime() + 14 * 24 * 60 * 60 * 1000
      );

      const today = new Date();
      // return today <= twoWeeksLater ? "#59704B" : "#BD6F4E";
      return today <= twoWeeksLater;
    } else {
      const today = new Date();
      return today < dateBestBeforeObject;
    }
  };

  const setColor = () => {
    if (checkBestBeforeDate) {
      return "#BD6F4E";
    }
  };

  const IconColor = checkBestBeforeDate();

  const handleEditItem = (barcode) => {
    //redirect to the edit page
    history.pushState(`/Edititem/${barcode}`);
  };

  return (
    <>
      <div
        className="inventoryCard__container disable-pointer-events"
        onClick={openDialog}
      >
        {setNewSticker("small")}
        <div className="inventoryCard__firstPartContainer">
          <div className="inventoryCard__icon">
            {iconSmall ? iconSmall : ""}
          </div>
          <div className="inventoryCard__titleBox">
            <p>{title ? title : "Udefinert vare"}</p>
          </div>
        </div>
        <div className="inventoryCard__stroke--horizontal" />
        <div>
          <div className="inventoryCard__details">
            <p className="smallp">{volume}</p>
            <div className="inventoryCard__details--icons">
              <p className={IconColor ? "green" : "red"}>
                {IconColor ? "God" : "Sjekk meg"}
              </p>
            </div>
            <div className="inventoryCard__details--arrow">
              {/* <button onClick={handleSeeMore}>
              <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L7 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div> */}
              <button onClick={openDialog}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_255_963)">
                    <path
                      d="M6 10.0003L1.33333 14.667M1.33333 14.667H5.2381M1.33333 14.667V10.7622"
                      stroke="#1A1A1A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 5.99967L14.6667 1.33301M14.6667 1.33301H10.7619M14.6667 1.33301V5.23777"
                      stroke="#1A1A1A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_255_963">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <dialog ref={dialogRef} className="inventoryDialog" open>
          {setNewSticker("big")}
          <div className="inventoryDialog__firstPartContainer">
            <div className="inventoryDialog__icon">{iconBig}</div>
            <div className="inventoryDialog__titleBox">
              <p>{title ? title : "Udefinert vare"}</p>
              <button onClick={closeDialog}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="black" />
                  <path
                    d="M8.03027 8.46973L15.5303 15.9697"
                    stroke="black"
                    stroke-linecap="round"
                  />
                  <path
                    d="M15.5303 8.46973L8.03027 15.9697"
                    stroke="black"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="inventoryCard__stroke--horizontal" />
          <div className="inventoryDialog__details">
            <div className="grid__twoColumn">
              <p className="smallp">{volume}</p>
              <p className="medium">{brand}</p>
            </div>
            <div>
              <div className="inventoryDialog__details--bestFør">
                <p className={`smallp ${IconColor ? "green" : "red"}`}>
                  {IconColor ? "God!" : "Sjekk meg!"}
                </p>
                <p className="smallp">
                  {isNaN(new Date(dateBestBefore.split(" ")[0])) || edited === 0
                    ? "Estimert best før: "
                    : "Best før: "}
                  {dateBestBefore ? formatDate(dateBestBefore) : "23.11.23"}
                </p>
              </div>
              <div>
                <a
                  className="matvett-link"
                  href="https://www.matvett.no/brukopp-leksikon"
                  target="_blank"
                >
                  <p className="smallp underline">Ofte god etter</p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_257_2111)">
                      <path
                        d="M11 6.99896C10.9855 8.70596 10.8908 9.647 10.2702 10.2676C9.53776 11 8.35894 11 6.0013 11C3.64367 11 2.46485 11 1.73242 10.2676C1 9.53515 1 8.35633 1 5.9987C1 3.64106 1 2.46224 1.73242 1.72982C2.353 1.10924 3.29403 1.01447 5.00104 1"
                        stroke="#1A1A1A"
                        stroke-linecap="round"
                      />
                      <path
                        d="M11 3.5H7C6.21143 3.5 5.69464 3.8358 5.43898 4.05801C5.32073 4.16079 5.26161 4.21218 5.2369 4.2369C5.21218 4.26161 5.16079 4.32073 5.05801 4.43898C4.8358 4.69464 4.5 5.21143 4.5 6V7.5M11 3.5L8.5 1M11 3.5L8.5 6"
                        stroke="#1A1A1A"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_257_2111">
                        <rect width="12" height="12" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <p className="smallp medium">Allergener:</p>
              <p className="smallp">{allergens ? allergens : "Ingen"}</p>
            </div>
          </div>
          <div className="inventoryCard__stroke--horizontal" />
          <div className="inventoryDialog__scannedAndModify">
            <p className="inventoryDialog__scanned">
              Scannet{" "}
              <span className="smallp">
                {formatDate(dateScanned)} kl. {formatTime(dateScanned)}
              </span>
            </p>

            <div className="inventoryDialog__modify">
              <Button
                func={() => {
                  toggleEditDialog2();
                }}
                type={1}
                option={1}
                icon={true}
              >
                Rediger vare
              </Button>
              <Button func={handleDeleteItem} type={2} option={2} icon={true}>Slett vare</Button>
            </div>
          </div>
        </dialog>
      )}

      {isEditDialogOpen && (
        <dialog className="editDialog" ref={editDialogRef} open>
          <EditItem
            barcode={barcode}
            dateScanned={dateScanned}
            toggleEditDialog={toggleEditDialog}
          />
        </dialog>
      )}

      <div
        className={`blur-background ${
          isDialogOpen || isEditDialogOpen ? "" : "hidden"
        }`}
      />
    </>
  );
}
