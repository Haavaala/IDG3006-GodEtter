import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import InventoryPage from "./Pages/InventoryPage";
import GroceryListPage from "./Pages/GroceryListPage";
import RecipePage from "./Pages/RecipePage";
import NotificationPage from "./Pages/NotificationPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<InventoryPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
        </Route>

        <Route path="/recipe" element={<RecipePage />} />

        <Route path="/grocerylist" element={<GroceryListPage />} />
      </Routes>
      <Navbar />
      <div className="bottom-space"></div>
    </>
  );
}

export default App;
