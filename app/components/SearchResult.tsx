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
      {games.length > 0 && (
        <div className="searchResultsWrapper">
          <div className="searchResultsBox bg-[var(--background)] border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg max-h-96 w-64 overflow-y-auto overflow-x-hidden">
            <ul className="space-y-2">
              {games.map((game, index) => (
                <li
                  key={game.id || index}
                  className="border-b border-gray-100 dark:border-gray-600 last:border-b-0 p-4 w-64 flex gap-4 cursor-pointer hover:bg-[var(--hoverBackground)] transition-colors duration-200"
                  onClick={() => goToGame(game.id)}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    goToGame(game.id);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      goToGame(game.id);
                    }
                  }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{game.name}</h3>

                    <p className="">Released: {game.released}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rawg-attribution mt-4 text-sm ">
              <div className="">
                <h1>Results {games.length}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchResults;
