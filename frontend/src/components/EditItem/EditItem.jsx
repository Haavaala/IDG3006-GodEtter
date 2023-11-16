import React from "react";
import "./edititem.css";
import Stroke from "../Stroke/Stroke";
import instance from "../../instance";

function EditItem() {


  return (
    <div className="editItem-modal">
      <h1>Vareføring</h1>
      <Stroke />
      <div className="editItem-form">
      <form action="" >
          <div className="seksjon">
            <label htmlFor="matvare">Matvare</label>
            <input name="matvare" type="text" />
          </div>
          <div className="mengde-div">
            <label htmlFor="mengde">Mengde</label>
            <input name="mengde" type="number" />
            <label htmlFor="mengde-enhet">enhet</label>
            <select id="measurements" name="mengde-enhet">
              <option value="g">g</option>
              <option value="kg">kg</option>
              <option value="mg">mg</option>
              <option value="l">l</option>
              <option value="ml">ml</option>
              <option value="oz">oz</option>
              <option value="lb">lb</option>
            </select>
          </div>
          <div className="seksjon">
            <label htmlFor="allergener">allergener</label>
            <input name="allergener" type="text" />
          </div>
          <input
          type="submit"
          value="Lagre vare"
        />
      </form>
      </div>
    </div>
  );
}

export default EditItem;
