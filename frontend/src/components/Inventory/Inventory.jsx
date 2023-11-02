import React, { useState } from 'react';
import './inventory.css';
import InventoryCategory from '../InventoryCategory/InventoryCategory';

export default function Inventory() {

    return (
        <>
        {/* Skal egt hente ut kategorier, loope igjennom og lage InventoryCategory for hver kategori */}
        <InventoryCategory category={'Frysevarer'} />
        <InventoryCategory category={'Meieri'} />
        </>
    )
}