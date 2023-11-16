import React from 'react';
import './icons.css';
import Dessert from './Dessert';
import Beverage from './Beverage';
import Uncategorized from './Uncategorized';
import Dairy from './Dairy';

export default function SelectIcon({category, size}) {


    return (
        <>
            {(category === 'Uncategorized')?<Uncategorized size={size} />:''}
            {(category === 'Dessert')?<Dessert size={size}/>:''}
            {(category === 'Drikke')?<Beverage size={size}/>:''}
            {(category === 'Meieri og egg')?<Dairy size={size}/>:''}
        </>
    )
}