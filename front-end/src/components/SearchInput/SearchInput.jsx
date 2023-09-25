/* eslint-disable react/prop-types */
const SearchInput = ({ placeholder, handleInputChange }) => {
  return (
    <input
      type="search"
      className="border-2 border-gray-400 p-2 rounded w-full"
      placeholder={placeholder}
      onChange={handleInputChange}
    />
  );
};

export default SearchInput;
