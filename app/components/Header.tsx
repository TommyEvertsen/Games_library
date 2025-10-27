export default function Header() {
  const links = [
    {
      title: "Test",
    },
    {
      title: "test2",
    },
  ];

  return (
    <div className="bg-indigo-500 shadow-lg shadow-indigo-500/50 min-h-16 flex px-4 items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl">🎮</span>
        <h1 className="text-white text-lg">Videogame library</h1>
      </div>
      {/* <div className="flex gap-6  justify-center">
        {links.map((link, index) => (
          <span
            key={index}
            className="text-white hover:text-indigo-200 cursor-pointer transition-colors"
          >
            {link.title}
          </span>
        ))}
      </div> */}
    </div>
  );
}
