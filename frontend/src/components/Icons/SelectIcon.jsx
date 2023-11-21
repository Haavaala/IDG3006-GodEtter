import React from 'react';
import './icons.css';
import Dessert from './Dessert';
import Beverage from './Beverage';
import Uncategorized from './Uncategorized';
import Dairy from './Dairy';
import Bakery from './Bakery';
import BabyProducts from './BabyProducts';
import Fish from './Fish';
import Fruit from './Fruit';
import Meat from './Meat';
import PetSupplies from './PetSupplies';
import Snacks from './Snacks';
import Topic from './Topic';

export default function SelectIcon({category, size}) {


    return (
        <>
            {(category === 'Uncategorized')?<Uncategorized size={size} />:''}
            {(category === 'Bakevarer og kjeks')?<Bakery size={size}/>:''}
            {(category === 'Barneprodukter')?<BabyProducts size={size}/>:''}
            {(category === 'Dessert')?<Dessert size={size}/>:''}
            {(category === 'Drikke')?<Beverage size={size}/>:''}
            {(category === 'Dyrevarer')?<PetSupplies size={size}/>:''}
            {(category === 'Fisk og skalldyr')?<Fish size={size}/>:''}
            {(category === 'Frukt og grønt')?<Fruit size={size}/>:''}
            {(category === 'Kjøtt')?<Meat size={size}/>:''}
            {(category === 'Meieri og egg')?<Dairy size={size}/>:''}
            {(category === 'Pålegg')?<Topic size={size}/>:''}
            {(category === 'Snacks og godteri')?<Snacks size={size}/>:''}
        </>
    )
}