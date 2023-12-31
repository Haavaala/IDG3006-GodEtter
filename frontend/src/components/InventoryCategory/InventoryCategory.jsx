import React from 'react';
import './inventoryCategory.css';
import InventoryCard from '../InventoryCard/InventoryCard';
import Stroke from '../Stroke/Stroke';
import SelectIcon from '../Icons/SelectIcon';

export default function InventoryCategory({ category, data, retrieveData }) {
  if (!category && !data) return null; // Sjekker om category og data ikke eksisterer, hvis saa - ikkje gjoer naake.

  return (
    <>
      <Stroke />
      <h2>{category}</h2>
      <Stroke />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.length > 0 ? (
          data.map((i) => {
            return (
              <InventoryCard
                volume={i.weight + " " + i.weight_unit}
                title={i.name}
                num={i.quantity}
                iconSmall={<SelectIcon size="small" category={category} />}
                iconBig={<SelectIcon size="big" category={category} />}
                dateBestBefore={i.date_bestbefore}
                dateScanned={i.date_added}
                allergens={i.allergens}
                brand={i.brand}
                barcode={i.barcode}
                datestamp={i.date_added}
                retrieveData={retrieveData}
                edited={i.edited}
              />
            );
          })
        ) : (
          <p> Du har ingen varer i denne kategorien i ditt kjøleskap. </p>
        )}
      </div>
    </>
  );
}
