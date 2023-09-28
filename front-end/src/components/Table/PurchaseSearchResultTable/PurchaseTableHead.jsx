/* eslint-disable react/prop-types */
import { useState } from "react";
import { useFilterProductContext } from "../../../GlobalContext/FilterContext";
import { usePurchaseCartContext } from "../../../GlobalContext/PurchaseCartContext";
import PurchaseTableContent from "./PurchaseTableContent";

const PurchaseTableHead = ({ filteredProducts }) => {
  const { addPurchasedProducts } = usePurchaseCartContext();
  const { addToDone } = useFilterProductContext();
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handlePurchaseCart = (item, quantity) => {
    addPurchasedProducts(item, quantity);
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
                <PurchaseTableContent
                  key={item?._id}
                  title={item?.title}
                  stock={item?.stock}
                  price={item?.price}
                  handleInputChange={handleInputChange}
                  setInputValue={setInputValue}
                  inputValue={inputValue}
                  handleAddButtonClick={() =>
                    handlePurchaseCart(item, inputValue)
                  }
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

export default PurchaseTableHead;
