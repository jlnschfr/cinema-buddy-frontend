"use client";

import { useState } from "react";
import Filter from "../components/filter";
import MovieCards from "./movieCards";
import { fetchMovies } from "../services/recommendationsService";
import type { Genre } from "../types/genre";
import type { Movie } from "../types/movie";

export default function Recommendations() {
  const [movieCards, setMovieCards] = useState<Movie[]>([]);

  const loadMovies = async (selectedGenre: Genre, selectedYear: string) => {
    try {
      const data = await fetchMovies(selectedGenre.id, selectedYear);

      setMovieCards(() => {
        return data.movies.map((movie) => {
          return {
            title: movie.title,
            releaseDate: movie.releaseDate,
            imageSrc: movie.imageSrc,
          };
        });
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const handleSubmit = (selectedGenre: Genre, selectedYear: string) => {
    loadMovies(selectedGenre, selectedYear);
  };

  return (
    <>
      <Filter onSubmit={handleSubmit} />
      <MovieCards movies={movieCards} />
    </>
  );
}
