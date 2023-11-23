import instance from "../instance";
import { useState, useEffect } from "react";
import "../App.css";
import Searchbar from "../components/Searchbar/Searchbar";
import Stroke from "../components/Stroke/Stroke";
import TopMenu from "../components/TopMenu/TopMenu";
import Inventory from "../components/Inventory/Inventory";

function InventoryPage() {
  const [data, setData] = useState([]); // Inventory data
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]); // Categories

  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const [initialFetch, setInitialFetch] = useState(false);


  // Set device id
  const deviceId = 1001;

  useEffect(() => {
    if (!initialFetch) {
      retrieveAllData();
      setInitialFetch(true);
    }

    // Hente data hvert 10 sekund
    const dataInterval = setInterval(() => {
      console.log("Refresh done");
      retrieveData();
    }, 10000);

    // Clean up intervalet når componentet unmountes
    return () => clearInterval(dataInterval);
  }, []);

  useEffect(() => {
    if (searchInput != "") {
      setData(
        allData.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    } else {
      setData(allData);
    }
    // console.log(data);
    // console.log(searchInput);
  }, [searchInput]);

  const retrieveData = async () => {
    try {
      // Axios POST req til /get_device_inventory.php med deviceId i data
      // Hent kjøleskapet
      await instance
        .post("/get_device_inventory.php", { device_id: deviceId })
        .then((res) => {
          setData(res.data.data);
          setAllData(res.data.data);
        });
    } catch (error) {
      console.error("Error in fridge data");
    }
  };

  const retrieveAllData = async () => {
    try {
      // Retrieve fridge data
      await retrieveData();

      // Hent alle kategorier
      await instance
        .post("/get_categories.php", { device_id: deviceId })
        .then((res) => {
          // setCategories(res.data.data);

          const fetchedCategories = res.data.data;

          const updatedCategories = [
            ...fetchedCategories.slice(1),
            fetchedCategories[0],
          ];

          setCategories(updatedCategories);
        });
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    if (data && categories) {
      setLoading(false);
    }
  }, [data, categories]);

  if (!data) return null;

  if (loading) {
    console.log("LASTER");
    return <p>Laster...</p>;
  }
  return (
    <>
      <TopMenu data={data} />
      <h1 className="text-center">Ditt kjøleskap</h1>
      <Stroke />
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Stroke />
      <Inventory
        data={data}
        categories={categories}
        search={searchInput}
        retrieveData={retrieveData}
      />
    </>
  );
}

export default InventoryPage;
