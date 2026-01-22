"use client";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const goToSearch = () => {
    router.push("/game-search");
  };

  const links = [
    {
      title: "Home",
      onclick: goToHome,
      icon: FaHome,
    },
    {
      title: "Search game",
      onclick: goToSearch,
      icon: FaGamepad,
    },
  ];

  return (
    <>
      {isOpen && (
        <div className="openedSideBarWrapper fixed top-12 left-0 bottom-0 w-42 z-50 transition ease-in duration-300">
          <div className="openedSideBar w-full h-full bg-slate-800 opacity-95  ">
            <div className="">
              <nav>
                <h2 className="text-gray-100 lg:text-lg flex justify-center py-2 border-b ">
                  Menu
                </h2>
                <ul className="text-white lg:text-lg py-1">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className="py-1 px-2 rounded cursor-pointer  hover:text-blue-400 flex items-center gap-2"
                      onClick={link.onclick}
                    >
                      <link.icon />
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
      {!isOpen && (
        <div className="unopenedSideBarWrapper fixed top-12 left-0 bottom-0 w-12 z-50  bg-slate-800 opacity-95  ">
          <div className="unopenedSidebar w-full h-full ">
            <nav className="flex justify-center pt-2 text-xl text-white">
              <ul>
                {links.map((link, index) => (
                  <li
                    key={index}
                    onClick={link.onclick}
                    className="py-1.5 hover:text-blue-400  cursor-pointer"
                  >
                    <link.icon />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
