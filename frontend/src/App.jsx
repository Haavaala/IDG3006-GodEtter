import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import InventoryPage from "./Pages/InventoryPage";
import GroceryListPage from "./Pages/GroceryListPage";
import RecipePage from "./Pages/RecipePage";
import ItemEditPage from "./Pages/ItemEditPage";
import NotificationPage from "./Pages/NotificationPage";
import TopMenu from "./components/TopMenu/TopMenu";

function App() {
  return (
<>
  <Routes>
    <Route path="/">
      <Route index element={<InventoryPage />} />
      <Route path="/Notifications" element={<NotificationPage />} />
    </Route>

    <Route path="/Recipe" element={<RecipePage />} />
    <Route
      path="/Edititem/:barcode/:dateScanned"
      element={<ItemEditPage />}
    />

    <Route path="/Grocerylist" element={<GroceryListPage />} />
  </Routes>
  <Navbar />
  <div className="bottom-space"></div>
</>
  );
}

export default App;
