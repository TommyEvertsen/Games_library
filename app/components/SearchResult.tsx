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
        <div className="searchResultsBox bg-[var(--background)] border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg max-h-96 overflow-y-auto">
          {games.length > 0 ? (
            <>
              <ul className="space-y-2">
                {games.map((game, index) => (
                  <li
                    key={game.id || index}
                    className="border-b border-gray-100 dark:border-gray-600 last:border-b-0 p-4 w-64 flex gap-4 cursor-pointer hover:bg-[var(--hoverBackground)] transition-colors duration-200"
                    onClick={() => goToGame(game.id)}
                  >
                    {/*  <div className="shrink-0">
                      <img
                        src={game.background_image}
                        alt={game.name || "Game image"}
                        width={120}
                        height={80}
                        className="rounded-md object-cover"
                      />
                    </div> */}

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{game.name}</h3>

                      <p className="">Released: {game.released}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="rawg-attribution mt-4 text-sm ">
                {/* <p>
                  Results by{" "}
                  <a
                    href="https://rawg.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    RAWG
                  </a>
                </p> */}
                <div className="">
                  <h1>Results {games.length}</h1>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500"></p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;
