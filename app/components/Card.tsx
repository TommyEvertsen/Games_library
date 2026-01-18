import { CardInterface } from "@/app/lib/interface/CardInterface";

export default function Card({ title, icon, text }: CardInterface) {
  return (
    <>
      <div className="cardWrapper ">
        <div className="card rounded-lg border overflow-hidden">
          <div className="cardTop py-1 px-1 text-lg  bg-amber-300 ">
            {title}
          </div>
          <div className="cardContent py-1 px-1 text-base">{text}</div>
        </div>
      </div>
    </>
  );
}
