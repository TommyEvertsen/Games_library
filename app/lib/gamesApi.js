// Client-side API functions that call our secure API routes
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
    const searchParams = new URLSearchParams({
      page: page.toString(),
      page_size: pageSize.toString(),
    });

    const response = await fetch(`/api/games?${searchParams}`);

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
      search: query,
      page: page.toString(),
      page_size: pageSize.toString(),
      search_precise: precise.toString(),
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
    const searchParams = new URLSearchParams();
    if (endDate) {
      searchParams.append("endDate", endDate);
    }

    const response = await fetch(`/api/games/popular?${searchParams}`);

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

export { getGames, searchGames, getGameById, getMostPopularGames };
