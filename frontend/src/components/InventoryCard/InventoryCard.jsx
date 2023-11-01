import React, { useState } from 'react';
import './inventoryCard.css';

export default function InventoryCard({volume="150 g", title="Coop Pizza med store Pepperoni og lasagne og digg", num=1, imgSrc="img.svg"}) {
  const [showMore, setShowMore] = useState(false);

  const handleSeeMore = () => {
    showMore === false ? setShowMore(true) : setShowMore(false);
  }
    return (
      <div className="inventoryCard__container">
        <div className="inventoryCard__firstPartContainer">
          <img src={imgSrc}/>
          <div className="inventoryCard__titleBox">
            <p>
              {title}
            </p>
            <div className="inventoryCard__numberBox smallp">
              <p>
                {num}
              </p>
            </div>
          </div>
        </div>
        <div className="inventoryCard__stroke--horizontal"/>
        <div>
          <div className="inventoryCard__details">
            <p className="smallp">
              {volume}
            </p>
            <div className="inventoryCard__details--icons">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_215_803)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.50008 1.94824C6.76236 1.94824 5.09581 2.63855 3.86706 3.8673C2.6383 5.09606 1.948 6.76261 1.948 8.50033C1.948 10.238 2.6383 11.9046 3.86706 13.1333C5.09581 14.3621 6.76236 15.0524 8.50008 15.0524C10.2378 15.0524 11.9044 14.3621 13.1331 13.1333C14.3619 11.9046 15.0522 10.238 15.0522 8.50033C15.0522 6.76261 14.3619 5.09606 13.1331 3.8673C11.9044 2.63855 10.2378 1.94824 8.50008 1.94824ZM0.885498 8.50033C0.885498 4.29495 4.29471 0.885742 8.50008 0.885742C12.7055 0.885742 16.1147 4.29495 16.1147 8.50033C16.1147 12.7057 12.7055 16.1149 8.50008 16.1149C4.29471 16.1149 0.885498 12.7057 0.885498 8.50033ZM8.50008 5.13574C8.64098 5.13574 8.7761 5.19171 8.87573 5.29134C8.97536 5.39097 9.03133 5.5261 9.03133 5.66699V8.28074L10.6463 9.89574C10.6985 9.94438 10.7404 10.003 10.7694 10.0682C10.7985 10.1334 10.8141 10.2037 10.8153 10.275C10.8166 10.3464 10.8035 10.4172 10.7768 10.4834C10.75 10.5495 10.7103 10.6096 10.6598 10.6601C10.6094 10.7105 10.5493 10.7503 10.4831 10.777C10.417 10.8037 10.3461 10.8168 10.2748 10.8156C10.2035 10.8143 10.1331 10.7987 10.068 10.7697C10.0028 10.7406 9.94413 10.6988 9.8955 10.6466L8.12467 8.87574C8.02501 8.77621 7.96896 8.64117 7.96883 8.50033V5.66699C7.96883 5.5261 8.0248 5.39097 8.12443 5.29134C8.22406 5.19171 8.35919 5.13574 8.50008 5.13574Z" fill="#BD6F4E"/>
                </g>
                <defs>
                  <clipPath id="clip0_215_803">
                    <rect width="17" height="17" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.47795" cy="2.43474" r="1.93474" fill="#1A1A1A" stroke="#1A1A1A"/>
                <path d="M12.5281 1.21777C12.5281 1.21777 13.2401 3.43553 13.9115 4.75988C14.658 6.23226 16.2171 8.30198 16.2171 8.30198C16.2171 8.30198 15.1705 9.13697 14.3726 9.38001C13.6238 9.60811 12.3744 9.53401 12.3744 9.53401M10.3762 14.0001C10.3762 14.0001 9.23944 13.9933 8.5317 13.8461C7.45113 13.6215 6.85013 13.3611 5.91866 12.7681C4.9507 12.1519 4.50879 11.6421 3.76675 10.7661C3.15262 10.041 2.84984 9.59215 2.38337 8.76399C1.86814 7.84926 1.30742 6.29992 1.30742 6.29992M1.30742 6.29992L1 9.38001M1.30742 6.29992L3.61304 7.53196" stroke="#1A1A1A"/>
              </svg>
            </div>
            <div className="inventoryCard__details--arrow">
              {/* <button onClick={handleSeeMore}>
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L7 6L1 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div> */}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_255_963)">
                <path d="M6 10.0003L1.33333 14.667M1.33333 14.667H5.2381M1.33333 14.667V10.7622" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 5.99967L14.6667 1.33301M14.6667 1.33301H10.7619M14.6667 1.33301V5.23777" stroke="#1A1A1A" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_255_963">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          </div>
        </div>
        {showMore ? (
        <div className="inventoryCard__seeMore">
          <p className="smallp">Hei</p>
        </div>
        ) : null}
      </div>
    );
  }
  