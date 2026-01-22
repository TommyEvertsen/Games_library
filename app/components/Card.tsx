import { CardInterface } from "@/app/lib/interface/CardInterface";

export default function Card({ title, icon, text }: CardInterface) {
  return (
    <>
      <div className="cardWrapper ">
        <div className="card rounded-lg border overflow-hidden">
          <div className="cardTop py-1 px-2 text-lg  bg-gray-800 text-white ">
            {title}
          </div>
          <div className="cardContent py-1 px-2 text-base">{text}</div>
        </div>
      </div>
    </>
  );
}
