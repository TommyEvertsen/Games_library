export interface Console {
  id: number;
  name: string;
  slug: string;
  image?: string;
  image_background?: string;
  year_end?: number;
  year_start?: number;
  games_count?: number;
  description?: string;
}

export interface ConsolesResponse {
  count: number;
  next?: string;
  previous?: string;
  results: Console[];
}

export interface ConsolesInterface {
  consoles: Console[];
}

export type { Console as ConsoleType };
