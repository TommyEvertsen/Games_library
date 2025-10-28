import Image from "next/image";
import { searchGames } from "@/app/lib/gamesApi";
import Tbutton from "./components/Button";
import { FaSearch, FaGamepad, FaHeart, FaHome } from "react-icons/fa";
import { MdGames, MdFavorite } from "react-icons/md";
import { IoGameController } from "react-icons/io5";

console.log(searchGames("final fantasy"));
console.log("test");

export default function Home() {
  return (
    <div className="flex justify-center mt-10 gap-4">
      <h1 className="text-xl text-white">Home</h1>
      <Tbutton text="Search" variant="primary" icon={<FaSearch />} />
      <Tbutton text="Games" variant="secondary" icon={<MdGames />} />
      <Tbutton text="Play" variant="warning" icon={<IoGameController />} />
      <Tbutton text="Favorite" variant="danger" icon={<FaHeart />} />
    </div>
  );
}
