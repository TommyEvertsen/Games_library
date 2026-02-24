const cache = new Map();
const CACHE_DURATION = 15 * 60 * 1000;
const MAX_CACHE_SIZE = 100;

const getCachedData = (key) => {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  if (cached) {
    cache.delete(key);
  }
  return null;
};

const setCachedData = (key, data) => {
  if (cache.size >= MAX_CACHE_SIZE) {
    const oldestKey = cache.keys().next().value;
    cache.delete(oldestKey);
  }

  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
};

const clearExpiredCache = () => {
  const now = Date.now();
  for (const [key, value] of cache.entries()) {
    if (now - value.timestamp >= CACHE_DURATION) {
      cache.delete(key);
    }
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
    /* console.log(endDate);
    console.log(data); */
    return data;
  } catch (error) {
    throw error;
  }
};

export const recentGames = async () => {
  try {
    const response = await fetch(`/api/games/recent`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    /* console.log(data); */
    return data;
  } catch (error) {
    throw error;
  }
};

export const highestRatedGames = async () => {
  const cacheKey = "highest-rated-games";

  const cachedData = getCachedData(cacheKey);
  if (cachedData) {
    /*  console.log("Loading highest rated games from cache"); */
    return cachedData;
  }

  try {
    const response = await fetch(`/api/games/highestRated`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    setCachedData(cacheKey, data);
    /*   console.log(data); */
    return data;
  } catch (error) {
    throw error;
  }
};

setInterval(clearExpiredCache, 5 * 60 * 1000);

export {
  searchGames,
  getGameById,
  getMostPopularGames,
  recentGames,
  highestRatedGames,
};
