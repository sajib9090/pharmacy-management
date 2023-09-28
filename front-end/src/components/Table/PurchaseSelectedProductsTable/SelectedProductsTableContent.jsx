/* eslint-disable react/prop-types */
import { CiSquareRemove } from "react-icons/ci";
const SelectedProductsTableContent = ({
  serial,
  title,
  quantity,
  singlePrice,
  price,
  handleRemove,
}) => {
  return (
    <tr>
      <td className="hidden lg:block lg:border lg:border-white text-left p-3">
        {serial}
      </td>
      <td className="w-[60%] border-2 border-white text-left p-3 capitalize">
        {title}
      </td>
      <td className="w-[17%] border-2 border-white text-center p-3">
        ({quantity} X {singlePrice})
      </td>
      <td className="w-[10%] border-2 border-white text-center p-3">{price}</td>
      <td className="w-[8%] border-2 border-white text-center p-3">
        <CiSquareRemove
          onClick={handleRemove}
          className="h-6 w-6 text-red-500 mx-auto cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default SelectedProductsTableContent;
