"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import SideBar from "./SideBar";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResult";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [openSearch, setOpenSearch] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const mobileSearchContainerRef = useRef<HTMLDivElement>(null);

  const handleSearchResults = (results: any[]) => {
    setSearchResults(results);
  };

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }

      if (
        openSearch &&
        mobileSearchContainerRef.current &&
        !mobileSearchContainerRef.current.contains(event.target as Node)
      ) {
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openSearch]);

  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="bg-[var(--background)] text-[var(--primaryText)] min-h-12 flex justify-between md:grid md:grid-cols-3 md:items-center px-4 sticky top-0 z-50">
        <div className="leftSide flex items-center gap-2">
          <span
            className="text-xl mr-3 hover:text-[var(--hover)] cursor-pointer"
            onClick={toggleSidebar}
          >
            <FaBars />
          </span>
          <h1
            className="text-[var(--primaryText)] text-lg cursor-pointer hover:text-[var(--hover)]"
            onClick={goToHome}
          >
            Videogame library
          </h1>
        </div>
        <div
          className="middle hidden md:flex items-center justify-center"
          ref={searchContainerRef}
        >
          <div className="relative">
            <SearchBar onSearchResults={handleSearchResults} />
            <div className="absolute top-full left-0 z-50">
              <SearchResults games={searchResults} />
            </div>
          </div>
        </div>
        <div className="rightSide flex items-center md:justify-end">
          <div className="searchMobileButton md:hidden" onClick={toggleSearch}>
            <FaSearch />
          </div>
          <div
            onClick={toggleDarkMode}
            className="cursor-pointer ml-4 p-2 rounded-full hover:bg-[var(--hoverBackground)] transition-colors duration-200"
            title={
              mounted
                ? theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
                : "Switch theme"
            }
          >
            {mounted && theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </div>
        </div>
      </div>
      {openSearch && (
        <div
          className="searchBarMobile md:hidden flex justify-center"
          ref={mobileSearchContainerRef}
        >
          <div className="relative">
            <SearchBar onSearchResults={handleSearchResults} />
            <div className="absolute top-full left-0 z-50">
              <SearchResults games={searchResults} />
            </div>
          </div>
        </div>
      )}

      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
