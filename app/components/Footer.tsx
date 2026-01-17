export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 mt-auto">
      <div className=" mx-auto flex flex-col items-center gap-2 text-sm">
        <p className="text-center">
          Game data provided by{" "}
          <a
            href="https://rawg.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            RAWG Video Games Database
          </a>
        </p>
        <p className="text-xs text-gray-400">
          © 2024 Videogame Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
