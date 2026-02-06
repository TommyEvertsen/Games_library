import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const endDate =
      searchParams.get("endDate") || new Date().toISOString().split("T")[0];

    const API_KEY = process.env.API_KEY;
    const BASE_URL = process.env.BASE_URL;

    if (!API_KEY || !BASE_URL) {
      return NextResponse.json(
        { error: "API configuration missing" },
        { status: 500 },
      );
    }

    const response = await fetch(
      `${BASE_URL}/games?dates=2023-01-01,${endDate}&ordering=-metacritic&metacritic=70,100&page_size=9&key=${API_KEY}`,
      {
        cache: "force-cache",
        next: { revalidate: 300 },
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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
