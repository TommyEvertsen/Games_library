import { TbuttonInterface } from "@/app/lib/interface/TbuttonInterface";

export default function Tbutton({
  text,
  icon,
  disabled = false,
}: TbuttonInterface) {
  return (
    <button
      className={`
        px-4 py-2 rounded-md font-medium transition-colors duration-200
        flex items-center gap-2 justify-center
        bg-blue-500 hover:bg-blue-600 text-white
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
