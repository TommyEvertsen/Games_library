import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const API_KEY = process.env.API_KEY;
    const BASE_URL = process.env.BASE_URL;

    if (!API_KEY || !BASE_URL) {
      return NextResponse.json(
        { error: "API configuration missing" },
        { status: 500 },
      );
    }

    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Game details API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch game details" },
      { status: 500 },
    );
  }
}
