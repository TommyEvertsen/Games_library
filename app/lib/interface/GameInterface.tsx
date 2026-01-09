interface Game {
  id: number;
  name: string;
  background_image?: string;
  released?: string;
  rating?: number;
  metacritic?: number;
  platforms?: Array<{
    platform: {
      name: string;
    };
  }>;
}

export interface GameInterface {
  games: Game[];
}

export type { Game };
