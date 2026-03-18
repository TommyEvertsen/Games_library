"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { getConsolesById } from "@/app/lib/gamesApi";
import { Game } from "@/app/lib/interface/GameInterface";

const GameInfoPage = () => {
  const params = useParams();
  const consoleId = params.id;
  const [gameData, setGameData] = useState<Game | null>(null);
  const [hidePlatforms, setHidePlatforms] = useState(true);

  useEffect(() => {
    getConsolesById(consoleId).then((result) => {
      console.log(result);
      setGameData(result);
    });
  }, [consoleId]);
};
