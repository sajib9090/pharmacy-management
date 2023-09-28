/* eslint-disable react/prop-types */
import { useState } from "react";
import TableContent from "./TableContent";
import { useSellCartContext } from "../../../GlobalContext/SellCartContext";
import { useFilterProductContext } from "../../../GlobalContext/FilterContext";

const TableHead = ({ filteredProducts }) => {
  const { handleAddToBill } = useSellCartContext();
  const { addToDone } = useFilterProductContext();
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSellCart = (item, quantity) => {
    handleAddToBill(item, quantity);
    addToDone();
    setInputValue(1);
  };

  return (
    <>
      {filteredProducts?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="border-collapse w-full border border-gray-200">
            <thead>
              <tr className="bg-blue-300">
                <th className="w-[54%] border-2 border-white text-left p-3">
                  Name
                </th>
                <th className="w-[12%] border-2 border-white text-center p-3">
                  Stock
                </th>
                <th className="w-[12%] border-2 border-white text-center p-3">
                  Price
                </th>
                <th className="w-[12%] border-2 border-white text-center p-3">
                  Quantity
                </th>
                <th className="w-[10%] border-2 border-white text-center p-3"></th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts?.map((item) => (
                <TableContent
                  key={item?._id}
                  title={item?.title}
                  stock={item?.stock}
                  price={item?.price}
                  handleInputChange={handleInputChange}
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                  handleAddButtonClick={() => handleSellCart(item, inputValue)}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default TableHead;
