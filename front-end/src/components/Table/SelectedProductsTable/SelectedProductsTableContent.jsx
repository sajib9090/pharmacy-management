/* eslint-disable react/prop-types */
const SelectedProductsTableContent = ({ serial, title, price }) => {
  return (
    <tr>
      <td className="hidden lg:block lg:border lg:border-white text-left p-3">
        {serial}
      </td>
      <td className="w-[60%] border-2 border-white text-left p-3">{title}</td>
      <td className="w-[17%] border-2 border-white text-center p-3"></td>
      <td className="w-[10%] border-2 border-white text-center p-3">{price}</td>
      <td className="w-[8%] border-2 border-white text-center p-3"></td>
    </tr>
  );
};

export default SelectedProductsTableContent;
