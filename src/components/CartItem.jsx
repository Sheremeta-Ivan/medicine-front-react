import PropTypes from "prop-types";
import useCartStore from "../zustand/useCartStore";

const CartItem = ({ item, handleQuantityChange }) => {
  const { removeFromCart } = useCartStore();
  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };
  return (
    <li
      key={item.id}
      className=" bg-white border border-gray-200 rounded-lg shadow p-5 my-5 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out "
    >
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <div className="flex justify-between items-center">
        <img
          src={item.image}
          alt="medicine item"
          className="w-[250px]  mx-auto mt-2"
        />
        <div className="mx-8">
          <p className="text-gray-600">Price: {item.price}</p>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            className="border p-2 text-center w-16 my-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
          />
          <button
            onClick={handleRemoveFromCart}
            className="ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300 ease-in-out"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleQuantityChange: PropTypes.func.isRequired,
};
export default CartItem;
