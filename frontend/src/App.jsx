import { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import InventoryPage from './Pages/InventoryPage'
import GroceryListPage from './Pages/GroceryListPage'
import RecipePage from './Pages/RecipePage'
import ItemEditPage from "./Pages/ItemEditPage";
import NotificationPage from './Pages/NotificationPage'
import TopMenu from "./components/TopMenu/TopMenu";


function App() {

  return (
    <>
    <TopMenu />
  <Routes>
    <Route path="/" element={<InventoryPage />}/>
    <Route path="/Recipe" element={<RecipePage />}/>
    <Route path="/Edititem/:barcode/:dateScanned" element={<ItemEditPage />}/> 
    <Route path="/Notifications" element={<NotificationPage />}/>

    <Route path="/Grocerylist" element={<GroceryListPage />}/>
  </Routes>
      <Navbar />
    </>
  );
}

export default App;
