import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.BASE_URL;

  try {
    const response = await fetch(
      `${BASE_URL}/games?&ordering=-metacritic&page=1&metacritic=90,100&page_size=21&key=${API_KEY}`,
      {
        cache: "force-cache",
        next: { revalidate: 300 },
      },
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Popular games API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch popular games" },
      { status: 500 },
    );
  }
}
