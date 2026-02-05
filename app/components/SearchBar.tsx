"use client";

import Tbutton from "./Tbutton";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { searchGames } from "@/app/lib/gamesApi";

interface SearchBarProps {
  onSearchResults?: (results: any[]) => void;
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value || "");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    searchGames(searchText)
      .then((result) => {
        if (result.results && result.results.length > 0) {
          if (onSearchResults) {
            onSearchResults(result.results);
          }
        } else {
          if (onSearchResults) {
            onSearchResults([]);
          }
        }
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  };

  return (
    <>
      <div className="searchBarWrapper ">
        <div className="searchBar flex gap-2 h-8 ">
          <input
            type="text"
            placeholder="Search"
            className="searchBar border rounded-md w-64  px-2 "
            value={searchText || ""}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <span>
            <Tbutton variant="primary" text="Go" onClick={handleSearch} />
          </span>
        </div>
      </div>
    </>
  );
}
