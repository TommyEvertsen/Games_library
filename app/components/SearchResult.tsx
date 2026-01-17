"use client";

import { useRouter } from "next/navigation";
import { GameInterface } from "../lib/interface/GameInterface";

const SearchResults = ({ games }: GameInterface) => {
  const router = useRouter();

  const goToGame = (id: number) => {
    router.push(`/game-info/${id}`);
  };

  return (
    <>
      <div className="searchResultsWrapper">
        <div className="searchResultsBox">
          {games.length > 0 ? (
            <>
              <div>
                <h1>Results {games.length}</h1>
              </div>
              <ul className="space-y-2">
                {games.map((game, index) => (
                  <li
                    key={game.id || index}
                    className="border p-4 rounded-md w-full bg-gray-50 flex gap-4 hover:bg-amber-300 cursor-pointer"
                    onClick={() => goToGame(game.id)}
                  >
                    <div className="shrink-0">
                      <img
                        src={game.background_image}
                        alt={game.name || "Game image"}
                        width={120}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{game.name}</h3>

                      <p className="text-gray-600">Released: {game.released}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="rawg-attribution mt-4 text-sm text-gray-600 text-center">
                <p>
                  Results by{" "}
                  <a
                    href="https://rawg.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    RAWG
                  </a>
                </p>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Try searching for something</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
