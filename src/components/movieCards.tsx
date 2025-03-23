"use client";

import MovieCard from "./movieCard";
import type { Movie } from "../types/movie";

interface MovieCardsProps {
  movies?: Movie[];
}

export default function MovieCards({ movies = [] }: MovieCardsProps) {
  const movieCards = movies.map((movie) => (
    <MovieCard key={movie.title} title={movie.title} releaseDate={movie.releaseDate} imageSrc={movie.imageSrc} vote={movie.vote} />
  ));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {movieCards}
      </div>
    </>
  );
}
