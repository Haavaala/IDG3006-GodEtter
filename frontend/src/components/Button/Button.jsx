import { useEffect, useState } from "react";
import "./Button.css";

export default function Button({ type, option, icon, func, children, form }) {
  const [typeClass, setTypeClass] = useState("");

  useEffect(() => {
    if (option === 2) {
      switch (type) {
        case 1:
          setTypeClass("secondary-one");
          break;
        case 2:
          setTypeClass("secondary-two");
          break;
        case 3:
          setTypeClass("secondary-three");
          break;
        default:
          setTypeClass("secondary-one");
          break;
      }
    } else {
      switch (type) {
        case 1:
          setTypeClass("primary-one");
          break;
        case 2:
          setTypeClass("primary-two");
          break;
        case 3:
          setTypeClass("primary-three");
          break;
        default:
          setTypeClass("primary-one");
          break;
      }
    }
  }, [type, option]);

  const returnIcon = () => {
    console.log("Type:" + type)
    switch (type) {
      case 1:
        return <img src="./svg/editicon.svg" alt="Edit icon" />;
      case 2:
        return <img src="./svg/trashicon.svg" alt="Trashcan icon" />;
      case 3:
        return <img src="./svg/plusicon.svg" alt="Plus icon" />;
      default:
        return null;
    }
  };

  return (
    <>
      {form ? (
        <input
          className={"button " + typeClass}
          type="submit"
          value={children}
        />
      ) : (
        <button className={"button " + typeClass} onClick={func}>
          {icon ? <div>{returnIcon()}</div> : null}
          <div>{children}</div>
        </button>
      )}
    </>
  );
}
