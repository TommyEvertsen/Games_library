import { CardInterface } from "@/app/lib/interface/CardInterface";
import Image from "next/image";

export default function Card({
  title,
  icon,
  text,
  image,
  metacritic,
  onClick,
}: CardInterface) {
  return (
    <>
      <div className="cardWrapper">
        <div
          className="card rounded-lg border border-gray-200 dark:border-gray-600 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          onClick={onClick}
        >
          <div className="cardTop py-2 px-3 text-lg font-semibold bg-(--accent2) text-white">
            {title}
          </div>

          {image ? (
            <div className="cardImage">
              <img
                src={image}
                alt={title || "image"}
                className="w-full h-54 md:h-62 object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden",
                  );
                }}
              />
            </div>
          ) : (
            <div className="cardImagePlaceholder bg-gray-200 dark:bg-gray-700 w-full h-54 md:h-62 flex items-center justify-center">
              <div className="text-center text-gray-500 dark:text-gray-400">
                <div className="text-4xl mb-2">🎮</div>
                <div className="text-sm">No Image Available</div>
              </div>
            </div>
          )}

          {metacritic && (
            <div className="cardContent py-3 px-3 text-base bg-(--background) text-(--foreground)">
              Metacritic: {metacritic}
            </div>
          )}

          {text && (
            <div className="cardContent py-3 px-3 text-base bg-(--background) text-(--foreground)">
              Total games: {text}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
