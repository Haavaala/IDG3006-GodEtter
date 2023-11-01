import { useState, useEffect } from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import InventoryPage from './Pages/InventoryPage'
import GroceryListPage from './Pages/GroceryListPage'
import RecipePage from './Pages/RecipePage'


function App() {

  return (
    <>
  <Routes>
    <Route path="/" element={<InventoryPage />}/>
    <Route path="/Recipe" element={<GroceryListPage />}/>
    <Route path="/Grocerylist" element={<RecipePage />}/>
  </Routes>
      <Navbar />
    </>
  );
}

export default App;
