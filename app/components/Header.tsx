"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SideBar from "./SideBar";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const goToHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="bg-gray-800 text-white min-h-16 flex px-4 items-center relative">
        <div className="flex items-center gap-2">
          <span
            className="text-xl mr-3 hover:text-blue-300 cursor-pointer"
            onClick={toggleSidebar}
          >
            {<FaBars />}
          </span>
          <h1
            className="text-white text-lg cursor-pointer hover:text-blue-300"
            onClick={goToHome}
          >
            Videogame library
          </h1>
        </div>
      </div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
