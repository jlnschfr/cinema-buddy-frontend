export type Movie = {
    title: string;
    releaseDate: string;
    vote: string;
    imageSrc: string;
  };

  export type MoviesResponse = {
    movies: Movie[];
  };
  
  export async function fetchMovies(genreId: string, year: string): Promise<MoviesResponse> {
    const response = await fetch(`http://localhost:3000/recommendations?genres=${genreId}&year=${year}&page=1`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    return response.json();
  }