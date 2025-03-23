import type { MovieResponse } from "../types/movie";

export async function fetchMovies(genreId: string, year: string): Promise<MovieResponse> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${API_URL}/recommendations?genres=${genreId}&year=${year}&page=1`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }
  return response.json();
}
