export type Genre = {
    id: string;
    name: string;
  };

  export type GenreResponse = {
    genres: Genre[];
  };
  
  export async function fetchGenres(): Promise<GenreResponse> {
    const response = await fetch("http://localhost:3000/genres");
    if (!response.ok) {
      throw new Error("Failed to fetch genres");
    }
    return response.json();
  }