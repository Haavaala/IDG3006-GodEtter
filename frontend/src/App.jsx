import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = () => {
    axios.get(import.meta.env.VITE_API_URL).then((res) => {
      setData(res.data.data);
      console.log(data);
    });
  };
  if (!data) return null;

  return (
    <>
      <h1>Fridge:</h1>
      {data.map((i) => {
        return (
          <div>
            <h3>{i.name != "" ? i.name : "Unknown"}</h3>
            <p>Brand: {i.brand != "" ? i.brand : "Unknown"}</p>
            <p>Amount: {i.amount}</p>
            <p>Added: {i.date}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
