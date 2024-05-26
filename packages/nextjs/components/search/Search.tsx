import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search: React.FC = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-72 px-4 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-blue-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none h-5 w-5 text-gray-400">
        <AiOutlineSearch />
      </div>
    </div>
  );
};

export default Search;
