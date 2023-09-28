/* eslint-disable react/prop-types */
const PurchaseButton = ({ handlePostInvoice }) => {
  return (
    <div>
      <button
        onClick={handlePostInvoice}
        className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-black duration-500"
      >
        Post Invoice
      </button>
    </div>
  );
};

export default PurchaseButton;
