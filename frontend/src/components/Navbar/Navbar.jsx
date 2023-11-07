import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            key={0}
            className={activeItem === 0 ? 'active' : ''}
            onClick={() => handleItemClick(0)}
          >
            <Link to="/">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.33325 10.8337C4.33325 6.74815 4.33325 4.7054 5.60246 3.4362C6.87166 2.16699 8.91441 2.16699 12.9999 2.16699C17.0854 2.16699 19.1282 2.16699 20.3974 3.4362C21.6666 4.7054 21.6666 6.74815 21.6666 10.8337V14.0837C21.6666 18.1692 21.6666 20.2119 20.3974 21.4811C19.1282 22.7503 17.0854 22.7503 12.9999 22.7503C8.91441 22.7503 6.87166 22.7503 5.60246 21.4811C4.33325 20.2119 4.33325 18.1692 4.33325 14.0837V10.8337Z" stroke-width="1.5"/>
              <path d="M18.4166 22.75V23.8333H17.3333V22.75M8.66659 22.75V23.8333H7.58325V22.75" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M21.6666 12.458H4.33325" stroke-width="1.5"/>
              <path d="M18.4167 7.58333L18.4167 9.75" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M18.4167 15.1663L18.4167 17.333" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            {activeItem === 0 ? "Kjøleskap" : ''}
            </Link>
          </li>
          <li
            key={1}
            className={activeItem === 1 ? 'active' : ''}
            onClick={() => handleItemClick(1)}
          >
            <Link to="/Recipe">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.06274 15.4452H5.87524C5.87516 15.2871 5.829 15.1326 5.74242 15.0004C5.65583 14.8682 5.53257 14.7641 5.38774 14.7009L5.06274 15.4452ZM20.2294 15.4452L19.9044 14.7009C19.7596 14.7641 19.6363 14.8682 19.5497 15.0004C19.4632 15.1326 19.417 15.2871 19.4169 15.4452H20.2294ZM16.7086 7.22917C16.7086 7.44466 16.7942 7.65132 16.9466 7.80369C17.0989 7.95606 17.3056 8.04167 17.5211 8.04167C17.7366 8.04167 17.9432 7.95606 18.0956 7.80369C18.248 7.65132 18.3336 7.44466 18.3336 7.22917H16.7086ZM6.95858 7.22917C6.95858 7.44466 7.04418 7.65132 7.19655 7.80369C7.34893 7.95606 7.55559 8.04167 7.77108 8.04167C7.98657 8.04167 8.19323 7.95606 8.3456 7.80369C8.49797 7.65132 8.58358 7.44466 8.58358 7.22917H6.95858ZM7.22941 4.25C5.57733 4.25 3.99292 4.90629 2.82472 6.07448C1.65653 7.24268 1.00024 8.82709 1.00024 10.4792H2.62524C2.62524 9.25807 3.11032 8.08698 3.97377 7.22353C4.83722 6.36008 6.00831 5.875 7.22941 5.875V4.25ZM18.0627 5.875C19.2838 5.875 20.4549 6.36008 21.3184 7.22353C22.1818 8.08698 22.6669 9.25807 22.6669 10.4792H24.2919C24.2919 8.82709 23.6356 7.24268 22.4674 6.07448C21.2992 4.90629 19.7148 4.25 18.0627 4.25V5.875ZM15.8961 22.6667H9.39608V24.2917H15.8961V22.6667ZM9.39608 22.6667C8.35174 22.6667 7.64974 22.6645 7.12649 22.5941C6.62708 22.5269 6.41258 22.411 6.27174 22.2691L5.12341 23.4196C5.61633 23.9125 6.23058 24.1129 6.91091 24.205C7.56741 24.2938 8.39724 24.2917 9.39608 24.2917V22.6667ZM4.25024 19.1458C4.25024 20.1447 4.24808 20.9745 4.33691 21.631C4.42791 22.3113 4.62941 22.9256 5.12233 23.4185L6.27174 22.2702C6.13091 22.1293 6.01499 21.9148 5.94674 21.4143C5.87741 20.8922 5.87524 20.1902 5.87524 19.1458H4.25024ZM19.4169 19.1458C19.4169 20.1902 19.4147 20.8922 19.3443 21.4154C19.2772 21.9148 19.1612 22.1293 19.0193 22.2702L20.1698 23.4185C20.6627 22.9256 20.8632 22.3113 20.9552 21.631C21.0441 20.9745 21.0419 20.1447 21.0419 19.1458H19.4169ZM15.8961 24.2917C16.8949 24.2917 17.7247 24.2938 18.3812 24.205C19.0616 24.114 19.6769 23.9125 20.1698 23.4185L19.0204 22.2702C18.8796 22.411 18.6651 22.5269 18.1646 22.5952C17.6424 22.6645 16.9404 22.6667 15.8961 22.6667V24.2917ZM7.22941 5.875C7.46124 5.875 7.68766 5.89233 7.90974 5.92483L8.14699 4.31717C7.84319 4.27235 7.5365 4.2499 7.22941 4.25V5.875ZM12.6461 1C11.4574 1 10.2986 1.37228 9.33235 2.06458C8.36609 2.75687 7.64092 3.7344 7.25866 4.85992L8.79699 5.38208C9.07017 4.57804 9.58831 3.87975 10.2787 3.38526C10.969 2.89076 11.7969 2.6249 12.6461 2.625V1ZM7.25866 4.85992C7.05936 5.4486 6.95798 6.06599 6.95858 6.6875H8.58358C8.58358 6.22925 8.65941 5.7905 8.79808 5.38208L7.25866 4.85992ZM18.0627 4.25C17.7518 4.25 17.4452 4.27275 17.1452 4.31717L17.3835 5.92483C17.6084 5.89163 17.8354 5.87498 18.0627 5.875V4.25ZM12.6461 2.625C13.4951 2.62513 14.3227 2.89109 15.0129 3.38557C15.703 3.88005 16.221 4.57822 16.4941 5.38208L18.0324 4.85992C17.6502 3.73457 16.9252 2.75717 15.9592 2.06489C14.9931 1.37261 13.8346 1.00023 12.6461 1V2.625ZM16.4941 5.38208C16.6327 5.7905 16.7086 6.22925 16.7086 6.6875H18.3336C18.3336 6.04942 18.2274 5.43517 18.0324 4.85992L16.4952 5.38208H16.4941ZM5.87524 19.1458V15.4452H4.25024V19.1458H5.87524ZM5.38774 14.7009C4.56645 14.3423 3.86762 13.7519 3.37693 13.002C2.88624 12.2521 2.625 11.3753 2.62524 10.4792H1.00024C1.00016 11.6914 1.35372 12.8773 2.01758 13.8916C2.68145 14.9058 3.62679 15.7044 4.73774 16.1894L5.38774 14.7009ZM19.4169 15.4452V19.1458H21.0419V15.4452H19.4169ZM22.6669 10.4792C22.6672 11.3753 22.4059 12.2521 21.9152 13.002C21.4245 13.7519 20.7257 14.3423 19.9044 14.7009L20.5544 16.1894C21.6654 15.7044 22.6107 14.9058 23.2746 13.8916C23.9384 12.8773 24.292 11.6914 24.2919 10.4792H22.6669ZM16.7086 6.6875V7.22917H18.3336V6.6875H16.7086ZM6.95858 6.6875V7.22917H8.58358V6.6875H6.95858Z"/>
              <path d="M5.06274 19.1455H20.2294" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            {activeItem === 1 ? 'Oppskrifter' : ''}
            </Link>
          </li>
          <li
            key={2}
            className={activeItem === 2 ? 'active' : ''}
            onClick={() => handleItemClick(2)}
          >
            <Link to="/Grocerylist">
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.9012 2H7.59875C6.34317 2 5.71592 2 5.20892 2.17658C4.73093 2.34608 4.29844 2.62346 3.94503 2.9872C3.59163 3.35094 3.32682 3.79124 3.17117 4.27392C3 4.79608 3 5.44175 3 6.73417V21.9052C3 22.8347 4.06708 23.3287 4.742 22.7112C4.93135 22.5362 5.17969 22.439 5.4375 22.439C5.69531 22.439 5.94365 22.5362 6.133 22.7112L6.65625 23.19C6.98798 23.4968 7.42318 23.6671 7.875 23.6671C8.32682 23.6671 8.76203 23.4968 9.09375 23.19C9.42548 22.8832 9.86068 22.7129 10.3125 22.7129C10.7643 22.7129 11.1995 22.8832 11.5313 23.19C11.863 23.4968 12.2982 23.6671 12.75 23.6671C13.2018 23.6671 13.637 23.4968 13.9688 23.19C14.3005 22.8832 14.7357 22.7129 15.1875 22.7129C15.6393 22.7129 16.0745 22.8832 16.4063 23.19C16.738 23.4968 17.1732 23.6671 17.625 23.6671C18.0768 23.6671 18.512 23.4968 18.8438 23.19L19.367 22.7112C19.5564 22.5362 19.8047 22.439 20.0625 22.439C20.3203 22.439 20.5686 22.5362 20.758 22.7112C21.4329 23.3287 22.5 22.8347 22.5 21.9052V6.73417C22.5 5.44175 22.5 4.795 22.3288 4.275C22.1734 3.79209 21.9087 3.35153 21.5553 2.98759C21.2018 2.62364 20.7692 2.34611 20.2911 2.17658C19.7841 2 19.1568 2 17.9012 2Z" stroke-width="1.5"/>
              <path d="M11.1249 11.7497H18.1666M7.33325 11.7497H7.87492M7.33325 7.95801H7.87492M7.33325 15.5413H7.87492M11.1249 7.95801H18.1666M11.1249 15.5413H18.1666" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            {activeItem === 2 ? 'Handleliste' : ''}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;