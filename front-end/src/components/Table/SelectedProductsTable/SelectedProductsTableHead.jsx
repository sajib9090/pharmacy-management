import SelectedProductsTableContent from "./SelectedProductsTableContent";

const SelectedProductsTableHead = () => {
  return (
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
          <SelectedProductsTableContent
            serial={"1"}
            title={"Sergel 20 mg"}
            price={"1200"}
          />
        </tbody>
      </table>
    </div>
  );
};

export default SelectedProductsTableHead;
