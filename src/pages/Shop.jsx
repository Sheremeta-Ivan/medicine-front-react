import { useState, useEffect } from "react";
import axios from "axios";
import PharmacyCard from "../components/PharmacyCard";
import MedicineCard from "../components/MedicineCard";
import useCartStore from "../zustand/useCartStore";

const Shop = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get(
          "https://medicine-backend-node.onrender.com/api/store"
        );
        const data = response.data;
        const extractedPharmacies = data.stores.map((store) => ({
          id: store._id,
          name: store.name,
          address: store.address,
          phone: store.phone,
        }));
        setPharmacies(extractedPharmacies);
      } catch (error) {
        console.error("Помилка при отриманні списку аптек:", error);
      }
    };

    fetchPharmacies();
  }, []);

  const handlePharmacyClick = async (pharmacyId) => {
    try {
      const response = await axios.get(
        `https://medicine-backend-node.onrender.com/api/medicine/${pharmacyId}`
      );
      const data = response.data;
      const extractedMedicines = data.medicine.map((store) => ({
        id: store._id,
        name: store.name,
        count: store.count,
        image: store.image,
        price: store.price,
      }));
      setMedicines(extractedMedicines);
    } catch (error) {
      console.error("Помилка при отриманні списку ліків:", error);
    }
  };

  const handleAddToCart = (medicine) => {
    addToCart(medicine);
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-2 gap-4">
      <div className="border p-4 rounded-xl  border-slate-300">
        <h2 className="mb-4 text-3xl font-bold">Shops:</h2>
        <ul>
          {pharmacies.map((pharmacy) => (
            <PharmacyCard
              key={pharmacy.id}
              pharmacy={pharmacy}
              onClick={() => handlePharmacyClick(pharmacy.id)}
            />
          ))}
        </ul>
      </div>

      {medicines.length > 0 && (
        <ul className="border p-4 rounded-xl  border-slate-300">
          {medicines.map((medicine) => (
            <MedicineCard
              key={medicine.id}
              medicine={medicine}
              onAddToCart={() => handleAddToCart(medicine)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shop;
