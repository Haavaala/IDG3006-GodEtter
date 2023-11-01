import React from 'react';
import Notification from '../Notification/Notification';
import Settings from '../Settings/Settings';
import './topMenu.css';

export default function TopMenu() {
    return (
        <>
        <div className='topMenu'>
            <Notification />
            <Settings />
        </div>
        </>
    )
}