"use client";
import { useRouter } from "next/navigation";
import { FaHome, FaStar, FaClock, FaGamepad } from "react-icons/fa";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  const router = useRouter();

  const goToHome = () => {
    setIsOpen(false);
    router.push("/");
  };

  const goToRecentGames = () => {
    setIsOpen(false);
    router.push("/recent");
  };

  const goToHighesRatedGames = () => {
    setIsOpen(false);
    router.push("/highestRatedGames");
  };

  const goToConsoles = () => {
    setIsOpen(false);
    router.push("/consoles");
  };

  const links = [
    {
      title: "Home",
      onclick: goToHome,
      icon: FaHome,
    },
    {
      title: "Recent",
      onclick: goToRecentGames,
      icon: FaClock,
    },
    {
      title: "Highest rated",
      onclick: goToHighesRatedGames,
      icon: FaStar,
    },
    {
      title: "Consoles",
      onclick: goToConsoles,
      icon: FaGamepad,
    },
  ];

  return (
    <>
      {isOpen && (
        <div className="openedSideBarWrapper fixed top-12 left-0 bottom-0 w-42 z-99 border-r border-t glass">
          <div className="openedSideBar w-full h-full    ">
            <div className="">
              <nav>
                <ul className="text-[var(--primaryText)] lg:text-lg py-1">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className="py-1.5 px-2 rounded-lg cursor-pointer  hover:text-[var(--hover)] hover:bg-[var(--hoverBackgroundText)] flex items-center gap-2"
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
        <div className="unopenedSideBarWrapper fixed top-12 left-0 bottom-0 w-12 z-50  bg-[var(--background)]  opacity-95 invisible lg:visible ">
          <div className="unopenedSidebar w-full h-full ">
            <nav className="flex justify-center pt-2 text-xl text-[var(--primaryText)]">
              <ul>
                {links.map((link, index) => (
                  <li
                    key={index}
                    onClick={link.onclick}
                    className="py-2 hover:text-[var(--hover)]  cursor-pointer flex-col"
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
