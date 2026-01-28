"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/app/components/SearchBar";

import SearchResults from "../components/SearchResult";

export default function Home() {
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
  };

  return (
    <div>
      <div className="flex justify-center mt-10 ">
        <SearchBar onSearchResults={handleSearchResults} />
      </div>
      <div className="flex justify-center mt-10">
        <SearchResults games={searchResults} />
      </div>
    </div>
  );
}
