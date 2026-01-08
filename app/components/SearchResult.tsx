import { SearchResultsInterface } from "../lib/interface/SearchResultsInterface";

const SearchResults = ({ games }: SearchResultsInterface) => {
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
                    className="border p-4 rounded-md w-full bg-gray-50 flex gap-4 hover:bg-amber-300"
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

                      {/* <p className="text-gray-600">
                      Metacritic score: {game.metacritic || "NA"}
                    </p> */}

                      {/*  <p className="text-gray-600">
                      Platforms:{" "}
                      {game.platforms
                        .map((p: any) => p.platform.name)
                        .join(", ")}
                    </p> */}
                    </div>
                  </li>
                ))}
              </ul>
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
