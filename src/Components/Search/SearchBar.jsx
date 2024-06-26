import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm !== "") {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form className="relative w-full md:w-80 lg:w-96 " onSubmit={handleSubmit}>
      <input
        className="w-full py-1 px-4 border text-indigo-950 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        type="search"
        placeholder="Search"
        name="searchTerm"
        onChange={handleChange}
        value={searchTerm}
      />
      <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-red-600 hover:bg-red-500 hover:text-white  rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
          />
        </svg>
      </button>
    </form>
  );
}

export default SearchBar;
