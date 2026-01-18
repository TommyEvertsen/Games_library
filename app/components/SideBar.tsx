"use client";
import { useState } from "react";
import Tbutton from "./Tbutton";
import { FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-16 left-0 z-[1001]">
        <Tbutton
          text="Menu"
          variant="close"
          icon={<FaTimes />}
          onClick={toggleSidebar}
        />
      </div>

      {isOpen && (
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-48 z-50">
          <div className="w-full h-full bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-600">
            <div className="pt-12">
              <nav>
                <ul className="space-y-2 px-4">
                  <li>
                    <a
                      href="/"
                      className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/game-search"
                      className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Search Games
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
