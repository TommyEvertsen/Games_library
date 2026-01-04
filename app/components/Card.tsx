import { CardInterface } from "@/app/lib/interface/CardInterface";

export default function Card({ title, icon, text }: CardInterface) {
  return (
    <>
      <div className="cardWrapper">
        <div className="card border-2 border-b-gray-900 w-360 h-36">
          <div className="cardTop flex justify-baseline bg-purple-300 pl-1">
            {title}
          </div>
          <div className="cardContent pl-1 bg-yellow-50">{text}</div>
        </div>
      </div>
    </>
  );
}
