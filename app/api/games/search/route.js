import { NextResponse } from "next/server";

const API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = process.env.RAWG_BASE_URL;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("search");
    const page = searchParams.get("page") || "1";
    const pageSize = searchParams.get("page_size") || "10";
    const precise = searchParams.get("search_precise") || "true";

    if (!query) {
      return NextResponse.json(
        { error: "Search query is required" },
        { status: 400 },
      );
    }

    const searchUrlParams = new URLSearchParams({
      key: API_KEY,
      search: query,
      page: page,
      page_size: pageSize,
      search_precise: precise,
      ordering: "-relevance",
    });

    const response = await fetch(`${BASE_URL}/games?${searchUrlParams}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Search API error:", error);
    return NextResponse.json(
      { error: "Failed to search games" },
      { status: 500 },
    );
  }
}
