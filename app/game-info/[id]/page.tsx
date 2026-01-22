"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getGameById } from "@/app/lib/gamesApi";
import { Game } from "@/app/lib/interface/GameInterface";

const GameInfoPage = () => {
  const params = useParams();
  const gameId = params.id;
  const [gameData, setGameData] = useState<Game | null>(null);
  const [hidePlatforms, setHidePlatforms] = useState(true);

  useEffect(() => {
    getGameById(gameId).then((result) => {
      console.log(result);
      setGameData(result);
    });
  }, [gameId]);

  const {
    id,
    name,
    background_image,
    description_raw,
    released,
    metacritic,
    metacritic_platforms,
    developers,
  } = gameData || {};

  return (
    <>
      <div className="gameInfoPage mx-10 my-10 h-full">
        {gameData ? (
          <>
            <div className="gameInfoWrapper grid grid-cols-2 grid-rows-2 gap-8 text-lg">
              <div className="MainInfo border border-solid row-span-2">
                <h1 className="text-2xl mb-2  ">{name}</h1>
                <p>Released: {released}</p>
                <p>
                  Metacritic score: {metacritic || "N/A"}
                  {!hidePlatforms
                    ? metacritic_platforms?.map(
                        (platformData: any, index: number) => (
                          <span key={index} className="block ml-4">
                            -{" "}
                            {platformData.platform?.name || "Unknown Platform"}:{" "}
                            {platformData.metascore}
                          </span>
                        ),
                      ) || ""
                    : ""}
                </p>
                <p>
                  Developed by: {developers?.[0]?.name || "Unknown Developer"}
                </p>

                <div className="description mt-4 border border-dashed">
                  <h2 className="text-lg ">Description:</h2>
                  <p className="text-base mt-1">{description_raw}</p>
                </div>

                <div className="rawg-attribution mt-4 text-sm text-gray-600">
                  <p>
                    Game information provided by{" "}
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
              </div>

              <div className="gameImageDiv row-span-2 flex justify-center items-baseline  max-h-140 border border-solid">
                <img
                  src={background_image}
                  alt={name}
                  className="rounded-lg object-contain h-full w-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="loadingScreen flex justify-center mt-16 text-3xl">
              <svg
                className="mr-3 size-5 animate-spin ..."
                viewBox="0 0 24 24"
              ></svg>
              <h1>Loading game information...</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GameInfoPage;
