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
    metacritic_url,
    metacritic_platforms,
    developers,
  } = gameData || {};

  const goToMetacritic = (url: string | undefined) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <div className="gameInfoPage px-2 lg:ml-16 lg:mr-4 my-10 h-full">
        {gameData ? (
          <>
            <div className="gameInfoWrapper grid lg:grid-cols-2 grid-rows-2 gap-8 text-lg ">
              <div className="gameInfo  row-span-2 ">
                <div className="mainInfo  px-2 rounded-xl flex gap-3">
                  <div
                    className="criticScore  bg-[var(--accent1)] text-[var(--accentText)] rounded-lg w-24 flex flex-col justify-center   items-center  hover:opacity-85 transition-opacity cursor-pointer"
                    onClick={() => goToMetacritic(metacritic_url)}
                  >
                    <p className="text-2xl font-bold">{metacritic || "N/A"} </p>
                    <p className="text-sm j">Metacritic</p>
                  </div>
                  <div>
                    <h1 className="text-2xl mb-2  ">{name}</h1>
                    <p>Released: {released}</p>

                    <p>
                      Developed by:{" "}
                      {developers?.[0]?.name || "Unknown Developer"}
                    </p>
                  </div>
                </div>

                <div className="description mt-4 px-2">
                  <h2 className="text-lg ">Description:</h2>
                  <p className="text-base mt-1">{description_raw}</p>
                </div>

                <div className="rawg-attribution mt-4 text-sm text-gray-600 px-2">
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

              <div className="gameImageDiv row-span-2 rounded-lg flex justify-center items-baseline  max-h-120 ">
                <img
                  src={background_image}
                  alt={name}
                  className="rounded-lg h-full"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="loadingScreen flex justify-center mt-16 text-3xl">
              <h1>Loading game information...</h1>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default GameInfoPage;
