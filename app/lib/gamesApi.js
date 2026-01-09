const API_KEY = process.env.NEXT_PUBLIC_RAWG_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_RAWG_BASE_URL;

export const getGames = async (page = 1, pageSize = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&page=${page}&page_size=${pageSize}`
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

export const searchGames = async (query, page = 1, pageSize = 20) => {
  try {
    const response = await fetch(
      `${BASE_URL}/games?key=${API_KEY}&search=${encodeURIComponent(
        query
      )}&page=${page}&page_size=${pageSize}`
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

export { getGames, searchGames, getGameById };
