"use client";
import { useRouter } from "next/navigation";
import { FaHome } from "react-icons/fa";

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideBar = ({ isOpen, setIsOpen }: SideBarProps) => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  const links = [
    {
      title: "Home",
      onclick: goToHome,
      icon: FaHome,
    },
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-42 z-50">
          <div className="w-full h-full bg-gray-100 border-r">
            <div className="">
              <nav>
                <ul className="">
                  {links.map((link, index) => (
                    <li
                      key={index}
                      className="px-2 py-2 rounded cursor-pointer hover:bg-blue-300 flex items-center gap-2"
                    >
                      <FaHome />
                      <span>{link.title}</span>
                    </li>
                  ))}
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
