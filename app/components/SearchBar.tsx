"use client";

import Tbutton from "@/app/components/Button";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { searchGames } from "@/app/lib/gamesApi";

export default function SearchBar() {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value || "");
  };

  const handleSearch = () => {
    console.log("Searching for:", searchText);

    searchGames(searchText)
      .then((result) => {
        console.log("Games API Result:", result);
        if (result.results && result.results.length > 0) {
          console.log("First game info:", result.results[0]);
        } else {
          console.log("No games found");
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  return (
    <>
      <div className="searchBarWrapper">
        <div className="searchBar flex justify-baseline gap-2">
          <input
            type="text"
            placeholder="Enter name of the game"
            className="searchBar border-2 rounded-md  px-2 py-1"
            value={searchText || ""}
            onChange={handleInputChange}
          />
          <span>
            <Tbutton
              variant="primary"
              text="Search"
              icon={<FaSearch />}
              onClick={handleSearch}
            />
          </span>
        </div>
      </div>
    </>
  );
}
