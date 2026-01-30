import { CardInterface } from "@/app/lib/interface/CardInterface";

export default function Card({ title, icon, text }: CardInterface) {
  return (
    <>
      <div className="cardWrapper">
        <div className="card rounded-lg border  overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
          <div className="cardTop py-2 px-3 text-lg font-semibold bg-(--accent2) text-(textPrimary)">
            {title}
          </div>
          <div className="cardContent py-3 px-3 text-base bg-(--background) text-(--foreground) border-t border-(--accent2)">
            {text}
          </div>
        </div>
      </div>
    </>
  );
}
