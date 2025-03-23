import type { GenreResponse } from "../types/genre";

export async function fetchGenres(): Promise<GenreResponse> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${API_URL}/genres`);
  if (!response.ok) {
    throw new Error("Failed to fetch genres");
  }
  return response.json();
}
