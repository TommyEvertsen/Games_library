import { TbuttonInterface } from "@/app/lib/interface/TbuttonInterface";

export default function Tbutton({
  text,
  icon,
  disabled,
  variant,
  onClick,
}: TbuttonInterface) {
  const getVariantClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-white border-2 border-black transition-color duration-400 ease-in-out hover:bg-blue-400 hover:text-white";
      case "warning":
        return "bg-white border-2 border-black transition-color duration-400 ease-in-out hover:bg-yellow-600 hover:text-white ";
      case "secondary":
        return "bg-white border-2 border-black transition-color duration-400 ease-in-out hover:bg-green-600 hover:text-white ";
      case "danger":
        return "bg-white border-2 border-black transition-color duration-400 ease-in-out hover:bg-red-600 hover:text-white ";
      case "close":
        return "transition-color duration-400 ease-in-out hover:bg-red-600 hover:text-white";
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-md font-medium 
        flex items-center gap-2 justify-center
        ${getVariantClasses(variant || "primary")}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
