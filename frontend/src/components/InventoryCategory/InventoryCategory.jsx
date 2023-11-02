import React from 'react';
import './inventoryCategory.css';
import InventoryCard from '../InventoryCard/InventoryCard';
import Stroke from '../Stroke/Stroke';

export default function InventoryCategory({category}) {

    return (
        <>
        <Stroke />
        <h2>{category}</h2>
        <Stroke />

        {/* Skal egt hente fra database utifra kategori */}
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            <InventoryCard volume="150 g" title="Coop Pizza med stor og sterk Pepperoni og lasagne og digg" num="3" imgSrc="img.svg" />
            <InventoryCard volume="5 kg" title="Fryste Kyllingkjøttboller" num="1" imgSrc="img.svg" />
            <InventoryCard volume="2 kg" title="Bringebær Fryste" num="1" imgSrc="img.svg" />
        </div>
        </>
    )
}