import { useState } from "react";
import { useFilterProductContext } from "../../../../GlobalContext/FilterContext";
import { usePurchaseCartContext } from "../../../../GlobalContext/PurchaseCartContext";
import SearchInput from "../../../../components/SearchInput/SearchInput";
import PurchaseTableHead from "../../../../components/Table/PurchaseSearchResultTable/PurchaseTableHead";
import SelectedProductsTableHead from "../../../../components/Table/PurchaseSelectedProductsTable/SelectedProductsTableHead";
import TableFooter from "../../../../components/Table/TableFooter/TableFooter";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import { useProductContext } from "../../../../GlobalContext/ProductContext";
import { useNavigate } from "react-router-dom";
import SimpleLoader from "../../../../components/Loader/SimpleLoader";

const AddProducts = () => {
  const { handleInputChange, filteredProducts } = useFilterProductContext();
  const { purchaseCarts, handleRemoveFromPurchase } = usePurchaseCartContext();
  const { refetchProducts } = useProductContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //single item remove
  const handleRemove = (item) => {
    handleRemoveFromPurchase(item);
  };

  //
  const beforeDiscountPrice =
    purchaseCarts?.length > 0
      ? purchaseCarts
          .reduce(
            (sum, item) =>
              item?.product_price_per_unit * item?.product_quantity + sum,
            0
          )
          .toFixed(2)
      : 0;

  //handle discount
  const [discountPercentValue, setDiscountPercentValue] = useState(0);
  const [discountedAmount, setDiscountedAmount] = useState(0);

  const handleDiscountPercent = (e) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= 0) {
      setDiscountPercentValue(newValue);
    }
  };
  const handleGiveButton = (beforeDiscountPrice, discountPercentValue) => {
    const discount =
      (parseFloat(beforeDiscountPrice) / 100) *
      parseFloat(discountPercentValue);
    setDiscountedAmount(discount.toFixed(2));
  };

  //
  const handlePostInvoice = (
    invoice,
    totalDiscount,
    afterDiscountPrice,
    beforeDiscountPrice
  ) => {
    const invoiceData = [
      {
        invoice,
        totalDiscount,
        afterDiscountPrice,
        beforeDiscountPrice,
      },
    ];

    Swal.fire({
      title: "Are you sure?",
      text: "You want to post this invoice?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, post it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        axios
          .patch(
            `${import.meta.env.VITE_API_URL}/api/increase/products/stock`,
            invoice
          )
          .then((response) => {
            if (response) {
              //
              axios
                .post(
                  `${import.meta.env.VITE_API_URL}/api/add/purchaseInvoice`,
                  invoiceData
                )
                .then((response) => {
                  if (response.data.insertedId) {
                    Swal.fire({
                      icon: "success",
                      title: "Posted",
                      text: `Your invoice has been posted for future use note this id "${response.data.insertedId}"`,
                    });
                    setLoading(false);
                    refetchProducts();
                    navigate(
                      `/dashboard/add-section/add-products/purchase-invoice/${response.data.insertedId}`
                    );
                  }
                })
                .catch((error) => {
                  if (error) {
                    toast.error("Something went wrong.");
                    setLoading(false);
                  }
                });
            }
          })
          .catch((error) => {
            if (error.response && error.response.status === 400) {
              toast.error("Error updating stock");
              setLoading(false);
            } else {
              toast.error("An unexpected error occurred");
              setLoading(false);
            }
          });
      }
    });
  };

  return (
    <>
      {loading ? (
        <div className="text-center pt-16">
          <SimpleLoader />
          <p>Please wait...</p>
        </div>
      ) : (
        <div className="pt-2 sm:pt-4 md:pt-8 px-4">
          <div>
            <SearchInput
              placeholder="Search..."
              handleInputChange={handleInputChange}
            />
          </div>
          <div className="pt-2">
            <PurchaseTableHead filteredProducts={filteredProducts} />
          </div>
          <div className="pt-2">
            <SelectedProductsTableHead
              purchaseCarts={purchaseCarts}
              handleRemove={handleRemove}
            />
          </div>
          <div>
            {purchaseCarts?.length > 0 ? (
              <TableFooter
                beforeDiscountPrice={beforeDiscountPrice}
                afterDiscountPrice={(
                  beforeDiscountPrice - discountedAmount
                ).toFixed(2)}
                discountAmount={discountedAmount}
                handleGiveButton={() =>
                  handleGiveButton(beforeDiscountPrice, discountPercentValue)
                }
                handleDiscountPercent={handleDiscountPercent}
                discountPercentValue={discountPercentValue}
                purchaseButton={true}
                handlePostInvoice={handlePostInvoice}
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default AddProducts;
