export default function Footer() {
  return (
    <footer className="bg-(--background) text-(primaryText) py-4 mt-auto h-16">
      <div className=" mx-auto flex flex-col items-center gap-2 text-sm">
        <p className="text-center">
          Developed by{" "}
          <a
            href="https://tommyevertsen.github.io/About_me"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 "
          >
            Tommy Evertsen
          </a>
        </p>
        <p className="text-xs text-gray-400">
          Game data by{" "}
          <a
            href="  https://rawg.io/"
            target="_blank"
            rel="noopener norefferer"
            className="text-blue-400 hover:text-blue-300 "
          >
            RAWG Video Games Database
          </a>
        </p>
      </div>
    </footer>
  );
}
