"use client";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const goToSearch = () => {
    router.push("game-search");
  };

  const goToHome = () => {
    router.push("/");
  };

  const links = [
    {
      title: "Search",
      onclick: goToSearch,
    },
    {
      title: "test2",
    },
  ];

  return (
    <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 min-h-16 flex px-4 items-center relative">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎮</span>
        <h1 className="text-white text-lg cursor-pointer" onClick={goToHome}>
          Videogame library
        </h1>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-3 items-center ">
        {links.map((link, index) => (
          <p
            key={index}
            className="text-white cursor-pointer hover:text-amber-400 transition-colors"
            onClick={link.onclick}
          >
            {link.title}
          </p>
        ))}
      </div>
    </div>
  );
}
