import React from "react";

const SearchResults = ({ results }) => {

  return (
    <ul className="absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll custom-scrollbar">
        {/* stating 'custom-scrollbar' references the custom-scrollbar class made in index.css */}
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-indigo-200"
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchResults;