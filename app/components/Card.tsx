import { CardInterface } from "@/app/lib/interface/CardInterface";

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

          {image && (
            <div className="cardImage">
              <img
                src={image}
                alt={title || "image"}
                className="w-full h-54 object-cover"
              />
            </div>
          )}

          {metacritic && (
            <div className="cardContent py-3 px-3 text-base bg-(--background) text-(--foreground)">
              Metacritic: {metacritic}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
