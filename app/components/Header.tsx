"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

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
      <div className="bg-(--background) text-(--primaryText) min-h-12 flex justify-between px-4 sticky top-0 z-50 ">
        <div className="flex items-center gap-2 ">
          <span
            className="text-xl mr-3 hover:text-(--hover) cursor-pointer"
            onClick={toggleSidebar}
          >
            {<FaBars />}
          </span>
          <h1
            className="text-(--primaryText) text-lg cursor-pointer hover:text-(--hover)"
            onClick={goToHome}
          >
            Videogame library
          </h1>
        </div>
        <div className="rightSide flex items-center ">
          <div
            onClick={toggleDarkMode}
            className="cursor-pointer ml-4 p-2 rounded-full hover:bg-(--hoverBackground) transition-colors duration-200"
            title={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </div>
        </div>
      </div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
