const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_RAWG_BASE_URL;

export const getGames = async (page = 1, pageSize = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchGames = async (
  query,
  page = 1,
  pageSize = 10,
  precise = true,
) => {
  try {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      search: query,
      page: page,
      page_size: pageSize,
      search_precise: precise,
      ordering: "-relevance",
    });

    const response = await fetch(`${BASE_URL}/games?${searchParams}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getGameById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMostPopularGames = async () => {
  const today = new Date().toISOString().slice(0, 10);
  try {
    const response = await fetch(
      `${BASE_URL}/games?dates=2023-01-01,${today}&ordering=-metacritic&metacritic=70,100&page_size=6&key=${API_KEY}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export { getGames, searchGames, getGameById, getMostPopularGames };
