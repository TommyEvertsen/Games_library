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

  const { name, background_image } = gameData || {};

  return (
    <>
      <div className="gameInfoPage mx-10 my-10">
        {gameData ? (
          <>
            <div>
              <h1>{name}</h1>
            </div>
            <div className="shrink-0">
              <img
                src={background_image}
                alt={name}
                width={120}
                height={80}
                className="rounded-md object-cover"
              />
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
