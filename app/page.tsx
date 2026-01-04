"use client";

import Image from "next/image";
import { searchGames } from "@/app/lib/gamesApi";
import Tbutton from "./components/Button";
import { FaSearch, FaGamepad, FaHeart, FaHome } from "react-icons/fa";
import { MdGames, MdFavorite } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { useEffect } from "react";
import SearchBar from "@/app/components/SearchBar";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <SearchBar />
      </div>

      <div className="flex justify-center mt-10">
        <Card title="Chrono trigger" icon="!" text="Bla bla test" />
      </div>
    </div>
  );
}
