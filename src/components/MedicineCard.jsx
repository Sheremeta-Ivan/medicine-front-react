import PropTypes from "prop-types";

const MedicineCard = ({ medicine, onAddToCart }) => (
  <li className=" bg-white border border-gray-200 rounded-lg shadow p-5 my-5 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out ">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {medicine.name}
        </h3>
        <p className="mb-3 font-normal text-gray-700">
          Price: {medicine.price}
        </p>
        <p className="mb-3 font-normal text-gray-700">
          Count: {medicine.count}
        </p>
      </div>
      <button
        onClick={onAddToCart}
        className="bg-emerald-500 text-white px-4 py-2 rounded text-l font-semibold hover:bg-emerald-600 transition duration-300 ease-in-out"
      >
        Add to Cart
      </button>
    </div>
    <img
      src={medicine.image}
      alt="medicine image"
      className="w-[250px]  mx-auto mt-2"
    />
  </li>
);

MedicineCard.propTypes = {
  medicine: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default MedicineCard;
