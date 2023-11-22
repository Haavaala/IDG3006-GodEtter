import React, { useEffect, useState } from "react";
import "./edititem.css";
import instance from "../../instance";
import { useForm } from "react-hook-form";

function EditItem({barcode, dateScanned, toggleEditDialog}) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const retrieveData = async () => {
    try {
      // Retrieve all categories again, this allows us to not have to pass the categories prop down so much.
      const deviceId = 1001;
      await instance
        .post("/get_categories.php", { device_id: deviceId })
        .then((res) => {
          setCategories(res.data.data);
        });
    } catch (error) {
      console.error("Error fetching data");
      toggleEditDialog();
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      console.log(categories);
    }
  }, [categories]);


  //fetch specific item 
  const fetchSpecificItem = async () => {
    const device_id = 1001;
    try {
      const res = await instance.post(`/get_item.php?barcode=${barcode}`, {
        device_id: device_id,
        datestamp: dateScanned,
      });
  
      const itemData = res.data.data[0];
      setData(itemData);

      const date = new Date(itemData.date_bestbefore);
      
      // Format the date so JavaScript understands (tulling)
      const formatDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();

      const defaultValues = {
        name: itemData.name,
        brand: itemData.brand,
        date_bestbefore: formatDate,
        weight: itemData.weight,
        weight_unit: itemData.weight_unit,
        allergens: itemData.allergens,
        category_id: itemData.category_id,
      };
  
      reset(defaultValues);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching item details", error);
    }
  };
  

  useEffect(() => {
    fetchSpecificItem();
  }, [barcode]);

  //post new item-information to the specific item
  const handleFormSubmit = async (data) => {
    try {
      data.device_id = 1001;
      data.datestamp = dateScanned;
      await instance
        .post(
          `/edit_item.php?barcode=${barcode}`,
          data
        )
        .then((res) => {
          console.log("SENDTE DATA DIN ...");
          toggleEditDialog();
        });
    } catch (error) {
      console.error("Error when editing item data");
    }
  };

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : data ? (
        <div className="editItem-modal">
          <h1>Vareføring</h1>
          {/* <Stroke /> */}
          <div className="editItem-form">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                handleFormSubmit(data);
              })}
            >
              <div className="seksjon">
                <label htmlFor="matvare">Matvare</label>
                <input
                  name="matvare"
                  type="text"
                  {...register("name", { required: true })}
                />
              </div>
              <div className="seksjon">
                <label htmlFor="brand">Merke</label>
                <input
                  name="brand"
                  type="text"
                  {...register("brand", { required: true })}
                />
              </div>
              <div className="seksjon">
                <label htmlFor="bestbefore">Best før</label>
                <input
                  name="bestbefore"
                  type="date"
                  {...register("date_bestbefore", { required: true })}
                />
              </div>
              <div className="mengde-div">
                <label htmlFor="mengde">Mengde</label>
                <input
                  name="mengde"
                  type="number"
                  placeholder={data.weight}
                  {...register("weight", { required: true })}
                />
                <label htmlFor="mengde-enhet">Enhet</label>
                <select
                  id="measurements"
                  name="mengde-enhet"
                  placeholder={data.weight_unit}
                  {...register("weight_unit", { required: true })}
                >
                  <option value="g">g</option>
                  <option value="kg">kg</option>
                  <option value="mg">mg</option>
                  <option value="l">l</option>
                  <option value="ml">ml</option>
                  <option value="oz">oz</option>
                  <option value="lb">lb</option>
                </select>
              </div>
              <div className="seksjon">
                <label htmlFor="allergener">Allergener</label>
                <input
                  name="allergener"
                  type="text"
                  {...register("allergens", { required: true })}
                />
              </div>
              <div className="seksjon">
                <label htmlFor="category_id">Kategori</label>
                <select
                  name="category_id"
                  id="category_id"
                  {...register("category_id", { required: true })}
                >
                  {categories.map((e) => (
                    <option key={e.category_id} value={e.category_id}>
                      {e.name}
                    </option>
                  ))}
                </select>
              </div>
              <input type="submit" value="Lagre vare" />
              <button className="avbryt" onClick={toggleEditDialog}>Avbryt</button>
            </form>
          </div>
        </div>
         ) : null}
      
    </>
  );
                  }

export default EditItem;
