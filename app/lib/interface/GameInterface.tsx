interface Game {
  id: number;
  name: string;
  background_image?: string;
  released?: string;
  rating?: number;
  description_raw?: string;
  metacritic?: number;
  developers?: Array<{
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background?: string;
  }>;
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
