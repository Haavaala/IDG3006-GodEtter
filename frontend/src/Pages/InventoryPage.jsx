import instance from "../instance";
import { useState, useEffect } from "react";
import '../App.css';
import InventoryCard from '../components/InventoryCard/InventoryCard';
import Searchbar from '../components/Searchbar/Searchbar';
import Stroke from '../components/Stroke/Stroke';
import Filter from '../components/Filter/Filter';
import TopMenu from "../components/TopMenu/TopMenu";


function InventoryPage() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

//filter the item by names and check if the search words are the same as item name
  const filteredData = data.filter((item) =>
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
      });
  };
  if (!data) return null;

  return (
    <>
      <TopMenu />
      <h1 className="text-center">Ditt kjøleskap</h1>
      <Stroke />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Stroke />
      <Filter />
      <Stroke />
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

<div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredData.map((item, index) => (
          <InventoryCard
            key={index}
            title={item.name}
          />
        ))}
        {/* <InventoryCard title="Coop Pizza med store Pepperoni" />
        <InventoryCard title="Coop Pizza" /> */}
      </div>

    </>
  );
}

export default InventoryPage;
