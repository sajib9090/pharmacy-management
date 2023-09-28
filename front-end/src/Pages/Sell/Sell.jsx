import { useState } from "react";
import { useFilterProductContext } from "../../GlobalContext/FilterContext";
import { useSellCartContext } from "../../GlobalContext/SellCartContext";
import SearchInput from "../../components/SearchInput/SearchInput";
import TableHead from "../../components/Table/SellSearchResultTable/TableHead";
import SelectedProductsTableHead from "../../components/Table/SellSelectedProductsTable/SelectedProductsTableHead";
import TableFooter from "../../components/Table/TableFooter/TableFooter";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../../GlobalContext/ProductContext";
import SimpleLoader from "../../components/Loader/SimpleLoader";

const Sell = () => {
  const { handleInputChange, filteredProducts } = useFilterProductContext();
  const { carts, itemRemove } = useSellCartContext();
  const { refetchProducts } = useProductContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRemove = (item) => {
    itemRemove(item);
  };

  const beforeDiscountPrice =
    carts?.length > 0
      ? carts
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
  const handleSellInvoice = async (
    soldProducts,
    totalPrice,
    discountedPrice,
    totalDiscount
  ) => {
    const invoiceData = [
      {
        soldProducts,
        totalPrice,
        discountedPrice,
        totalDiscount,
      },
    ];

    const confirmationResult = await Swal.fire({
      title: "Are you sure?",
      text: "You want to sell those items?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sell it!",
    });

    if (confirmationResult.isConfirmed) {
      setLoading(true);

      try {
        const decreaseStockResponse = await axios.patch(
          `${import.meta.env.VITE_API_URL}/api/decrease/products/stock`,
          soldProducts
        );

        if (decreaseStockResponse) {
          const addInvoiceResponse = await axios.post(
            `${import.meta.env.VITE_API_URL}/api/add/soldInvoice`,
            invoiceData
          );

          if (addInvoiceResponse.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: `Your sold invoice has been created for future use note this id "${addInvoiceResponse.data.insertedId}"`,
            });
            navigate(`/sell/invoice/${addInvoiceResponse.data.insertedId}`);
            refetchProducts();
            setLoading(false);
          }
        }
      } catch (error) {
        if (error) {
          toast.error(error.message || "Something went wrong");
          setLoading(false);
        }
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-6 bg-gray-100 min-h-screen shadow-2xl px-4">
      {/* search bar */}
      <div>
        <SearchInput
          placeholder={"Search..."}
          handleInputChange={handleInputChange}
        />
      </div>
      {/* search result table bar */}
      {loading ? (
        <div className="text-center pt-16">
          <SimpleLoader />
          <p>Please wait...</p>
        </div>
      ) : (
        <>
          <div className="mt-6">
            <TableHead filteredProducts={filteredProducts} />
          </div>
          <div className="mt-4">
            <SelectedProductsTableHead
              carts={carts}
              handleRemove={handleRemove}
            />
          </div>
          <div>
            {carts?.length > 0 ? (
              <TableFooter
                afterDiscountPrice={(
                  beforeDiscountPrice - discountedAmount
                ).toFixed(2)}
                discountAmount={discountedAmount}
                beforeDiscountPrice={beforeDiscountPrice}
                handleDiscountPercent={handleDiscountPercent}
                discountPercentValue={discountPercentValue}
                handleGiveButton={() =>
                  handleGiveButton(beforeDiscountPrice, discountPercentValue)
                }
                sellButton={true}
                handleSellInvoice={handleSellInvoice}
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Sell;
