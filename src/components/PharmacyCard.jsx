import PropTypes from "prop-types";

const PharmacyCard = ({ pharmacy, onClick }) => (
  <li
    onClick={onClick}
    className=" bg-white border border-gray-200 rounded-lg shadow p-5 my-5 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out "
  >
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-zinc-800">
      {pharmacy.name}
    </h3>
    <p className="mb-3 font-normal text-gray-700">Street: {pharmacy.address}</p>
    <p className="mb-3 font-normal text-gray-700">Contact: {pharmacy.phone}</p>
  </li>
);

PharmacyCard.propTypes = {
  pharmacy: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PharmacyCard;
