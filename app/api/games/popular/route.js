import { NextResponse } from "next/server";

const API_KEY = process.env.RAWG_API_KEY;
const BASE_URL = process.env.RAWG_BASE_URL;

export async function GET(request) {
  // Debug: Log all environment variables (remove this after debugging)
  console.log("Environment variables check:");
  console.log("API_KEY exists:", !!API_KEY);
  console.log("BASE_URL exists:", !!BASE_URL);
  console.log("All env keys:", Object.keys(process.env).filter(key => key.includes('RAWG')));
  
  if (!API_KEY || !BASE_URL) {
    return NextResponse.json(
      { 
        error: "Missing environment variables",
        debug: {
          hasApiKey: !!API_KEY,
          hasBaseUrl: !!BASE_URL,
          envKeys: Object.keys(process.env).filter(key => key.includes('RAWG'))
        }
      },
      { status: 500 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const endDate =
      searchParams.get("endDate") || new Date().toISOString().split("T")[0];

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
