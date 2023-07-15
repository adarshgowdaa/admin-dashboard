import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="flex justify-end items-center mb-3 mt-3 mr-3">
      <div className="flex items-center">
        <div className="flex space-x-1">
          <input
            type="text"
            id="search"
            className="block w-full px-4 py-2 text-red-600 bg-white border rounded-full focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            value={searchTerm}
            onChange={onSearch}
          />
          <button className="px-4 text-white bg-red-600 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
