import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PostItem } from "../Posts";

const InputSearch = ({ data, placeholder, filteredData, setFilteredData }) => {
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.description.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="px-10">
      <div className="bg-white border border-gray-400 rounded-md px-3">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center px-2">
            <FaSearch />
          </span>
          <input
            className="py-2 text-sm rounded-md pl-10 focus:outline-none w-full"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            autoComplete="off"
          />
        </div>
      </div>
      <p className="font-semibold text-sm mt-2">
        {filteredData.length} results found
      </p>
      {filteredData.length != 0 && (
        <div className="">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} className="my-2 p-2">
                <PostItem post={value} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default InputSearch;
