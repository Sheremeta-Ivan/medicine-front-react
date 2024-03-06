import PropTypes from "prop-types";

const OrderForm = ({ formData, handleInputChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Order Form</h2>
      <div className="mb-4">
        <label className="block text-gray-600">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600">Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          className="border p-2 w-full rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded font-semibold text-xl hover:bg-blue-700 transition duration-300 ease-in-out"
      >
        Submit Order
      </button>
    </form>
  );
};

OrderForm.propTypes = {
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default OrderForm;
