"use client";

import { getMostPopularGames } from "./lib/gamesApi";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import { Game } from "@/app/lib/interface/GameInterface";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [gameData, setGameData] = useState<Game[]>([]);

  const router = useRouter();

  const goToGame = (id: number) => {
    router.push(`/game-info/${id}`);
  };

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10);

    getMostPopularGames(today).then((result) => {
      console.log(result);

      if (result && result.results) {
        setGameData(result.results);
      } else if (Array.isArray(result)) {
        setGameData(result);
      } else {
        console.error("Something wrong", result);
        setGameData([]);
      }
    });
  }, []);

  return (
    <div className="homeWrapper h-full px-4 lg:ml-16 lg:mr-4 cursor-pointer">
      <div className="homeGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {gameData.map((game) => (
          <div key={game.id} className="col1">
            <Card
              title={game.name}
              image={game.background_image}
              metacritic={game.metacritic}
              onClick={() => goToGame(game.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
