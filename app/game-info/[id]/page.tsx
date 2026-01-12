"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getGameById } from "@/app/lib/gamesApi";
import { Game } from "@/app/lib/interface/GameInterface";

const GameInfoPage = () => {
  const params = useParams();
  const gameId = params.id;
  const [gameData, setGameData] = useState<Game | null>(null);

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
    developers,
  } = gameData || {};

  return (
    <>
      <div className="gameInfoPage mx-10 my-10">
        {gameData ? (
          <>
            <div className="gameInfoWrapper grid grid-cols-2 grid-rows-2 gap-6 text-lg">
              <div className="MainInfo ">
                <h1 className="text-2xl mb-4">{name}</h1>
                <p>Released: {released}</p>
                <p>Metacritic score: {metacritic || "N/A"}</p>
                <p>
                  Developed by:{" "}
                  {developers?.map((developer, index) => (
                    <span key={index}>
                      {developer.name || "Unknown Developer"}
                      {index < developers.length - 1 && ", "}
                    </span>
                  ))}
                </p>

                <div className="description ">
                  <h2 className="text-lg mt-4">Description:</h2>
                  <p className="text-md">{description_raw}</p>
                </div>
              </div>
              <div className="gameImageDiv row-span-2 flex justify-center items-baseline ">
                <img
                  src={background_image}
                  alt={name}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
};

export default GameInfoPage;
