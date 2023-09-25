/* eslint-disable react/prop-types */
import SelectedProductsTableContent from "./SelectedProductsTableContent";

const SelectedProductsTableHead = ({ carts, handleRemove }) => {
  return (
    <>
      {carts?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="border-collapse w-full border border-gray-200">
            <thead>
              <tr className="bg-blue-300">
                <th className="hidden lg:block lg:border lg:border-white text-left p-3">
                  Serial
                </th>
                <th className="w-[60%] border-2 border-white text-center p-3">
                  Name
                </th>
                <th className="w-[17%] border-2 border-white text-center p-3"></th>
                <th className="w-[10%] border-2 border-white text-center p-3">
                  Price
                </th>
                <th className="w-[8%] border-2 border-white text-center p-3"></th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((item, index) => (
                <SelectedProductsTableContent
                  key={index}
                  serial={index + 1}
                  title={item?.product_name}
                  price={item?.product_quantity * item?.product_price_per_unit}
                  quantity={item?.product_quantity}
                  singlePrice={item?.product_price_per_unit}
                  handleRemove={() => handleRemove(item)}
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

export default SelectedProductsTableHead;
