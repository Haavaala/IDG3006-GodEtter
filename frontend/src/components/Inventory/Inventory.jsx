import { useState, useEffect } from "react";
import './inventory.css';
import InventoryCategory from '../InventoryCategory/InventoryCategory';
import instance from "../../instance";

export default function Inventory() {
    const [categories, setCategories] = useState();

    useEffect(() => {
        retrieveCategory();
    }, []);

    const retrieveCategory = () => {
        // Set device id
        const deviceId = 1001;
  
        // Axios POST req til /get_device_inventory.php med deviceId i data
        instance
            .post("/get_categories.php", { device_id: deviceId })
            .then((res) => {
                setCategories(res.data.data);
            });
    }
    if (!categories) return null;
  
    return (
        <>
        {/* Skal egt hente ut kategorier, loope igjennom og lage InventoryCategory for hver kategori */}
        {categories.map((i) => {
            console.log()
            if (i.category_id === 1) return
            else {
                return <InventoryCategory category={i.name} category_id={i.category_id} />
            }
        })}
        
        <InventoryCategory category={categories[0].name} category_id={categories[0].category_id} />
        </>
    )
}