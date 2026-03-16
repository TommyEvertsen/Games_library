import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = process.env.BASE_URL;

  try {
    const response = await fetch(`${BASE_URL}/platforms?key=${API_KEY}`, {
      cache: "force-cache",
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Game consoles error:", error);
    return NextResponse.json(
      { error: "Failed to fetch consoles" },
      { status: 500 },
    );
  }
}
