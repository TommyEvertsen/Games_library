import { NextResponse } from "next/server";

const API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = process.env.RAWG_BASE_URL;

export async function GET(request, { params }) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { error: "Game ID is required" },
        { status: 400 },
      );
    }

    const response = await fetch(`${BASE_URL}/games/${id}?key=${API_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Game detail API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch game details" },
      { status: 500 },
    );
  }
}
