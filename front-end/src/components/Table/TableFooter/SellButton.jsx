/* eslint-disable react/prop-types */
const SellButton = ({ handleSellInvoice }) => {
  return (
    <div>
      <button
        onClick={handleSellInvoice}
        className="bg-blue-600 text-white py-1 px-4 rounded hover:bg-black duration-500"
      >
        Make Invoice
      </button>
    </div>
  );
};

export default SellButton;
