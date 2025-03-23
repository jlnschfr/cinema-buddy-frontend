import type { MovieResponse } from "../types/movie";
  
  export async function fetchMovies(genreId: string, year: string): Promise<MovieResponse> {
    const response = await fetch(`http://localhost:3000/recommendations?genres=${genreId}&year=${year}&page=1`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    return response.json();
  }