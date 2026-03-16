"use client";

import { useEffect, useState } from "react";
import { gameConsoles } from "../lib/gamesApi";
import { Console } from "../lib/interface/Consoles";
import Card from "../components/Card";

const ConsolePage = () => {
  const [consoles, setConsoles] = useState<Console[]>([]);

  useEffect(() => {
    const fetchConsoles = async () => {
      try {
        const result = await gameConsoles();
        if (result && result.results) {
          setConsoles(result.results);
        } else if (Array.isArray(result)) {
          setConsoles(result);
        } else {
          console.log("Unexpected console data format:", result);
          setConsoles([]);
        }
      } catch (err) {
        console.log("Error fetching consoles:", err);
      }
    };

    fetchConsoles();
  }, []);

  return (
    <>
      <div className="consolePageWrapper h-full px-4 lg:ml-16 lg:mr-4">
        <h1 className="flex justify-center mt-6 text-3xl mb-8">
          Videogame consoles
        </h1>
        {consoles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {consoles.map((console) => (
              <div
                key={console.id}
                className="bg-(--background)  rounded-lg  overflow-hidden "
              >
                <Card
                  title={console.name}
                  image={console.image_background}
                  text={console.games_count?.toString()}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="loadingScreen flex flex-col items-center justify-center mt-16">
              <h1 className="text-xl text-gray-600 dark:text-gray-400">
                Loading console information...
              </h1>
              <div className="loading-spinner mb-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ConsolePage;
