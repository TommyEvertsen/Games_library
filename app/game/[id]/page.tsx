interface GameInfoPageProps {
  params: {
    id: string;
  };
}

const GameInfoPage = ({ params }: GameInfoPageProps) => {
  const gameId = params.id;

  return (
    <>
      <div className="gameInfoPageWrapper">
        <h1>Game Info Page</h1>
        <p>Game ID: {gameId}</p>
        <p>Here you can fetch and display specific game information!</p>
      </div>
    </>
  );
};

export default GameInfoPage;
