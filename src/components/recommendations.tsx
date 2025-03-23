"use client";

import { useState } from "react";
import Filter from "../components/filter";
import Cards from "../components/cards";
import type { Genre } from "../services/genreService";
import { fetchMovies } from "../services/recommendationsService";

interface CardType {
  title: string;
  release_date: string;
  imageSrc: string;
}

export default function Recommendations() {
  const [cards, setCards] = useState<CardType[]>([]);

  const loadMovies = async (selectedGenre: Genre | undefined, year: string) => {
    try {
      const data = await fetchMovies(selectedGenre?.id || "", year);

      setCards(() => {
        return data.movies.map((movie) => {
          console.log(movie.imageSrc);
          return {
            title: movie.title,
            release_date: movie.releaseDate,
            imageSrc: movie.imageSrc
          };
        });
      });
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  const handleSubmit = (selectedGenre: Genre | undefined, year: string) => {
    console.log("clicked");
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
