import { useFilterProductContext } from "../../GlobalContext/FilterContext";
import { useSellCartContext } from "../../GlobalContext/SellCartContext";
import SearchInput from "../../components/SearchInput/SearchInput";
import TableHead from "../../components/Table/SearchResultTable/TableHead";
import SelectedProductsTableHead from "../../components/Table/SelectedProductsTable/SelectedProductsTableHead";

const Sell = () => {
  const { handleInputChange, filteredProducts } = useFilterProductContext();
  const { carts, itemRemove } = useSellCartContext();

  const handleRemove = (item) => {
    itemRemove(item);
  };

  return (
    <div className="max-w-5xl mx-auto pt-6 bg-gray-100 min-h-screen shadow-2xl px-4">
      {/* search bar */}
      <div>
        <SearchInput
          placeholder={"সার্চ করুন..."}
          handleInputChange={handleInputChange}
        />
      </div>
      {/* search result table bar */}
      <div className="mt-6">
        <TableHead filteredProducts={filteredProducts} />
      </div>
      <div className="mt-4">
        <SelectedProductsTableHead carts={carts} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default Sell;
