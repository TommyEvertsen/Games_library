"use client";

import { getMostPopularGames } from "./lib/gamesApi";
import Card from "./components/Card";

export default function Home() {
  getMostPopularGames();

  return (
    <div className="homeWrapper h-full px-4 lg:ml-16 lg:mr-4">
      <div className="homeGrid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
        <div className="col1 ">
          <Card title="Chrono trigger" />
        </div>
        <div className="col1">
          <Card title="Chrono trigger" text="Gurkemeie" />
        </div>
        <div className="col1">
          <Card title="Chrono trigger" />
        </div>
      </div>
    </div>
  );
}
