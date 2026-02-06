const cache = new Map();
const CACHE_DURATION = 15 * 60 * 1000;

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
};

const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

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
      query: query,
      page: page,
      page_size: pageSize,
      precise: precise.toString(),
    });

    const response = await fetch(`/api/games/search?${searchParams}`);

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
    const response = await fetch(`/api/games/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getMostPopularGames = async (endDate) => {
  const cacheKey = `popular-games-${endDate}`;

  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    console.log("Loading popular games from cache");
    return cachedData;
  }

  try {
    const response = await fetch(`/api/games/popular?endDate=${endDate}`, {
      cache: "force-cache",
      next: { revalidate: 300 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    setCachedData(cacheKey, data);
    console.log("Popular games fetched from API and cached");

    return data;
  } catch (error) {
    throw error;
  }
};

export async function getPopularGames(endDate) {
  const res = fetch(
    `${BASE_URL}/games?dates=2023-01-01,${endDate}&ordering=-metacritic&metacritic=70,100&page_size=9&key=${API_KEY}`,
  );
  const data = await res.json();
  return { props: { games: data } };
}

export { getGames, searchGames, getGameById, getMostPopularGames };
