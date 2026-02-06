import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const page = searchParams.get("page") || "1";
    const pageSize = searchParams.get("page_size") || "10";
    const precise = searchParams.get("precise") === "true";

    if (!query) {
      return NextResponse.json(
        { error: "Search query is required" },
        { status: 400 },
      );
    }

    const API_KEY = process.env.API_KEY;
    const BASE_URL = process.env.BASE_URL;

    if (!API_KEY || !BASE_URL) {
      return NextResponse.json(
        { error: "API configuration missing" },
        { status: 500 },
      );
    }

    const apiSearchParams = new URLSearchParams({
      key: API_KEY,
      search: query,
      page: page,
      page_size: pageSize,
      search_precise: precise.toString(),
      ordering: "-relevance",
    });

    const response = await fetch(`${BASE_URL}/games?${apiSearchParams}`);

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
