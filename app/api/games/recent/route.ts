import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const API_KEY = process.env.API_KEY;
    const BASE_URL = process.env.BASE_URL;

    const endDate = new Date().toISOString().split("T")[0];

    if (!API_KEY || !BASE_URL) {
      return NextResponse.json(
        { error: "API configuration missing" },
        { status: 500 },
      );
    }

    const response = await fetch(
      `${BASE_URL}/games?&dates=2026-01-01,${endDate}&page=1&page_size=12&key=${API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Newly released games API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch newly released games" },
      { status: 500 },
    );
  }
}
