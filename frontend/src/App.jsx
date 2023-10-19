import instance from "./instance";
import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    // Set device id
    const deviceId = 1001;

    // Axios POST req til /get_device_inventory.php med deviceId i data
    instance
      .post("/get_device_inventory.php", { device_id: deviceId })
      .then((res) => {
        setData(res.data.data);
      });
  };
  if (!data) return null;

  return (
    <>
      <h1>Fridge:</h1>
      <section className="inventory">
        {data.map((i) => {
          return (
            <div>
              <h3>{i.name != "" ? i.name : "Unknown"}</h3>
              <p>Brand: {i.brand != "" ? i.brand : "Unknown"}</p>
              <p>Amount: {i.quantity}</p>
              <p>Added: {i.date}</p>
              <p>Barcode: {i.barcode}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
