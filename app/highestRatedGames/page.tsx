"use client";

import { useEffect, useState } from "react";
import { highestRatedGames, recentGames } from "../lib/gamesApi";
import { Game } from "../lib/interface/GameInterface";
import Card from "../components/Card";
import { useRouter } from "next/navigation";

export default function HighestRatedGames() {
  const router = useRouter();

  const goToGame = (id: number) => {
    router.push(`/game-info/${id}`);
  };
  const [gameData, setGameData] = useState<Game[]>([]);

  useEffect(() => {
    highestRatedGames().then((result) => {
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
    <>
      <div className="newGamesWrapper h-full px-4 lg:ml-16 lg:mr-4 ">
        <h1 className="flex justify-center mt-6 text-3xl">
          Highest rated games
        </h1>
        {gameData.length > 0 ? (
          <div className="homeGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {gameData.map((game) => (
              <div key={game.id} className="col1 cursor-pointer">
                <Card
                  title={game.name}
                  image={game.background_image}
                  metacritic={game.metacritic}
                  onClick={() => goToGame(game.id)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="loadingScreen flex flex-col items-center justify-center mt-16">
            <h1 className="text-xl text-gray-600 dark:text-gray-400">
              Loading highes rated games...
            </h1>
            <div className="loading-spinner mb-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
