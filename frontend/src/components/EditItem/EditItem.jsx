import React, { useEffect, useState } from "react";
import "./edititem.css";
import Stroke from "../Stroke/Stroke";
import instance from "../../instance";
import { useForm } from 'react-hook-form';

function EditItem({device_id,  /* Mangler 'data' og 'categories' her */}) {

  const [data, setData] = useState([]); // Inventory data
  const [allData, setAllData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const retrieveData = async () => {
    try{
    // Hent alle kategorier
    const deviceId = 1001;
    await instance
    .post("/get_categories.php", { device_id: deviceId })
    .then((res) => {
      setCategories(res.data.data);
    });
  } catch (error) {
    console.error("Error fetching data",)
  }
  };

  useEffect(() => {
    retrieveData();
  }, [])

  useEffect(()=>{
    if (categories.length > 0){
      setIsLoading(false);
      console.log(categories);
    }
  },[categories])

const handleFormSubmit = async (data) => {
  try{

    data.device_id = 1001;

    await instance
    .post("/edit_item.php?barcode=123", 
      data
    )
    .then((res) => {
      console.log("SENDTE DATA DIN ...")
      // ! Legg til funksjon for å lukke vinduet + en slags melding "oppdatert"
    });
  
} catch (error) {
  console.error("Error when editing item data",)
}
}

// {playerLoading ? (
//   <ReactLoading type="spinningBubbles" color="#000" />
// ) : (

  return (
    <>
    {isLoading ? <p>Loading</p> : <div className="editItem-modal">
      <h1>Vareføring</h1>
      <Stroke />
      <div className="editItem-form">
      <form onSubmit={handleSubmit((data) => {
        console.log(data)
        handleFormSubmit(data);
      })}>
          <div className="seksjon">
            <label htmlFor="matvare">Matvare</label>
            <input name="matvare" type="text" placeholder={data.name} {...register('name', {required: true})}/>
          </div>
          <div className="seksjon">
            <label htmlFor="brand">Merke</label>
            <input name="brand" type="text" {...register('brand', {required: true})}/>
          </div>
          <div className="seksjon">
            <label htmlFor="bestbefore">Best før</label>
            <input name="dabestbeforete" type="date" {...register('bestbefore', {required: true})}/>
          </div>
          <div className="mengde-div">
            <label htmlFor="mengde">Mengde</label>
            <input name="mengde" type="number" placeholder={data.weight} {...register('weight', {required: true})}/>
            <label htmlFor="mengde-enhet">enhet</label>
            <select id="measurements" name="mengde-enhet" placeholder={data.weight_unit} {...register('weight_unit', {required: true})}>
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
            <label htmlFor="allergener">allergener</label>
            <input name="allergener" type="text" {...register('allergens', {required: true})}/>
          </div>
          <div className="seksjon">
          <label htmlFor="category_id">kategori</label>
          <select name="category_id" id="category_id" {...register('category_id', {required: true})}>
  {categories.map((e) => (
    <option key={e.category_id} value={e.category_id}>{e.name}</option>
  ))}
</select>
          </div>
          <input
          type="submit"
          value="Lagre vare"
        />
      </form>
      </div>
    </div>}
    </>
  );
}

export default EditItem;
