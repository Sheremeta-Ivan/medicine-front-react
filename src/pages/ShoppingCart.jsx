import { useState } from "react";
import useCartStore from "../zustand/useCartStore";
import CartItem from "../components/CartItem";
import OrderForm from "../components/OrderForm";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ShoppingCart = () => {
  const { cartItems, updateCartItemQuantity } = useCartStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleQuantityChange = (itemId, newQuantity) => {
    updateCartItemQuantity(itemId, newQuantity);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      items: cartItems,
      user: formData,
      totalPrice,
    };

    try {
      await axios.post(
        "https://medicine-backend-node.onrender.com/api/order",
        orderData
      );
      toast.success("Your order has been submitted!");
    } catch (error) {
      toast.error("There was an error submitting your order");
    }
  };

  return (
    <div className="container mx-auto p-6 grid grid-cols-2 gap-4">
      <Toaster />

      <div className="border p-4 rounded-xl  border-slate-300">
        {cartItems.length > 0 && (
          <ul>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-4">Total Price</h2>
            <p className="text-gray-600">
              Total Price: {totalPrice.toFixed(2)} ₴
            </p>
          </div>
        )}
      </div>

      <OrderForm
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default ShoppingCart;
