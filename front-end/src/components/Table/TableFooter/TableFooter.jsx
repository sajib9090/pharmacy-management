import { usePurchaseCartContext } from "../../../GlobalContext/PurchaseCartContext";
import { useSellCartContext } from "../../../GlobalContext/SellCartContext";
import PurchaseButton from "./PurchaseButton";
import SellButton from "./SellButton";

/* eslint-disable react/prop-types */
const TableFooter = ({
  beforeDiscountPrice,
  afterDiscountPrice,
  discountAmount,
  handleDiscountPercent,
  discountPercentValue,
  handleGiveButton,
  sellButton,
  purchaseButton,
  handlePostInvoice,
  handleSellInvoice,
}) => {
  const { purchaseCarts } = usePurchaseCartContext();
  const { carts } = useSellCartContext();
  return (
    <div className="max-w-sm bg-blue-100 ml-auto shadow-xl space-y-4 py-6 px-4 rounded-b">
      <div className="flex items-center justify-between">
        <p>Total Price:</p>
        <p>{beforeDiscountPrice}</p>
      </div>
      <div className="flex items-center justify-between">
        <p>
          Discount:
          <input
            value={discountPercentValue}
            onChange={handleDiscountPercent}
            type="number"
            className="w-[20%] px-2"
          />
          <button
            onClick={handleGiveButton}
            className="bg-gray-800 text-white px-2"
          >
            give
          </button>
          <span className="px-2">{discountPercentValue}%</span>
        </p>
        <p>{discountAmount}</p>
      </div>
      <div className="flex items-center justify-between font-bold">
        <p>Grand Total:</p>
        <p>{afterDiscountPrice}</p>
      </div>
      <div className="border-b-[3px] border-black"></div>
      <div className="text-right">
        {sellButton ? (
          <SellButton
            handleSellInvoice={() =>
              handleSellInvoice(
                carts,
                parseFloat(beforeDiscountPrice),
                parseFloat(afterDiscountPrice),
                parseFloat(discountAmount)
              )
            }
          />
        ) : null}
        {purchaseButton ? (
          <PurchaseButton
            handlePostInvoice={() =>
              handlePostInvoice(
                purchaseCarts,
                parseFloat(beforeDiscountPrice) -
                  parseFloat(afterDiscountPrice),
                parseFloat(afterDiscountPrice),
                parseFloat(beforeDiscountPrice)
              )
            }
          />
        ) : null}
      </div>
    </div>
  );
};

export default TableFooter;
