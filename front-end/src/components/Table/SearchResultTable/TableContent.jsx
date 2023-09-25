/* eslint-disable react/prop-types */
const TableContent = ({
  title,
  stock,
  price,
  isButton,
  isInput,
  inputValue,
  handleInputChange,
  handleAddButtonClick,
}) => {
  return (
    <tr>
      <td className="w-[54%] border-2 border-white text-left p-3 uppercase">
        {title}
      </td>
      <td className="w-[12%] border-2 border-white text-center p-3">{stock}</td>
      <td className="w-[12%] border-2 border-white text-center p-3">{price}</td>
      <td className="w-[12%] border-2 border-white text-center p-3">
        {isInput ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            type="number"
            className="w-[60px] py-1 rounded"
          />
        ) : (
          ""
        )}
      </td>
      <td className="w-[10%] border-2 border-white text-center p-3">
        {isButton ? (
          <button
            onClick={handleAddButtonClick}
            className="bg-blue-400 px-2 py-1 text-white rounded hover:bg-opacity-80 duration-500"
          >
            Add
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default TableContent;
