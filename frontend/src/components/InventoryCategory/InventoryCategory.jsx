import React from 'react';
import instance from "../../instance";
import { useState, useEffect } from "react";
import './inventoryCategory.css';
import InventoryCard from '../InventoryCard/InventoryCard';
import Stroke from '../Stroke/Stroke';
import Dessert from '../Icons/Dessert';

export default function InventoryCategory({category, category_id}) {
    const [data, setData] = useState();

    useEffect(() => {
        retrieveInventoryByCategory();
    }, []);

    const retrieveInventoryByCategory = () => {
      // Set device id
      const deviceId = 1001;
  
      // Axios POST req til /get_device_inventory.php med deviceId i data
      instance
        .post(`/get_device_inventory.php?category=${category_id}`, { device_id: deviceId })
        .then((res) => {
          setData(res.data.data);
        });
    };
    if (!data) return null;

    return (
        <>
        <Stroke />
        <h2>{category}</h2>
        <Stroke />

        {/* Skal egt hente fra database utifra kategori
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <InventoryCard volume="150 g" title="Coop Pizza med stor og sterk Pepperoni og lasagne og digg" num="3" imgSrc="img.svg" />
            <InventoryCard volume="5 kg" title="Fryste Kyllingkjøttboller" num="1" imgSrc="img.svg" />
            <InventoryCard volume="2 kg" title="Bringebær Fryste" num="1" imgSrc="img.svg" newSticker={true} />
        </div> */}

        {/* volume="150 g", title="Coop Pizza med store Pepperoni og lasagne og digg", num=1, icon=<Dessert />, store="Coop", date="19.02.24", newSticker */}

        {/* Skal egt hente fra database utifra kategori */}
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {data.map((i) => {
          return (
            <InventoryCard 
            volume={i.weight + " " + i.weight_unit} 
            title={i.name}
            num={i.quantity} 
            icon={<Dessert />}
            dateBestBefore={i.date_bestbefore}
            dateScanned={i.date_added}
            allergens={i.allergens}
            brand={i.brand}
            barcode={i.barcode}
            />
          );
          })}
        </div>

        {/* {data.map((i) => {
          return (
            <div>
              <h3>{i.name != "" ? i.name : "Unknown"}</h3>
              <p>Brand: {i.brand != "" ? i.brand : "Unknown"}</p>
              <p>Amount: {i.quantity}</p>
              <p>Added: {i.date}</p>
              <p>Barcode: {i.barcode}</p>
            </div>
          );
        })} */}
        </>
    )
}
