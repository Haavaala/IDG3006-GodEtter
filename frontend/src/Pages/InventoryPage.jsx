import instance from "../instance";
import { useState, useEffect } from "react";
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar";
import Stroke from "../components/Stroke/Stroke";
import Filter from "../components/Filter/Filter";
import TopMenu from "../components/TopMenu/TopMenu";
import Inventory from "../components/Inventory/Inventory";

function InventoryPage() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true)

  const searchedData = data.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );
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
        setLoading(false)
      });
  };
  if (!data) return null;

  if(loading){
    console.log("LASTER");
    return <p>Laster...</p>
  }
  return (
    <>
      <TopMenu />
      <h1 className="text-center">Ditt kjøleskap</h1>
      <Stroke />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Stroke />
      <Filter />
      {/* {searchedData.map((item, index) => (
        <Inventory key={index} title={item.name} />
      ))} */}
      <Inventory/>

      {/* <section className="inventory">
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
      </section> */}
    </>
  );
}

export default InventoryPage;
