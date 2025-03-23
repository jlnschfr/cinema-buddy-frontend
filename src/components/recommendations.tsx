"use client";

import { useState } from "react";
import Filter from "../components/filter";
import Cards from "../components/cards";
import { fetchMovies } from "../services/recommendationsService";
import type { Genre } from "../types/genre";
import type { Movie } from "../types/movie";

export default function Recommendations() {
  const [cards, setCards] = useState<Movie[]>([]);

  const loadMovies = async (selectedGenre: Genre | undefined, year: string) => {
    try {
      const data = await fetchMovies(selectedGenre?.id || "", year);

      setCards(() => {
        return data.movies.map((movie) => {
          return {
            title: movie.title,
            releaseDate: movie.releaseDate,
            imageSrc: movie.imageSrc
          };
        });
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const handleSubmit = (selectedGenre: Genre | undefined, year: string) => {
    if (selectedGenre && year) {
      loadMovies(selectedGenre, year);
    } else {
      console.log("No genre or year selected");
    }
  };

  return (
    <>
      <Filter onSubmit={handleSubmit} />
      <Cards cards={cards} />
    </>
  );
}
