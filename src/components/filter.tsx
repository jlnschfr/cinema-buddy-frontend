"use client";

import { useState, useEffect } from "react";
import { fetchGenres } from "../services/genreService";
import type { Genre, GenreResponse } from "../types/genre";

interface FilterProps {
  onSubmit: (selectedGenre: Genre | undefined, year: string) => void;
}

export default function Filter({ onSubmit }: FilterProps) {
  const [selectedGenre, setSelectedGenre] = useState<Genre>();
  const [genres, setGenres] = useState<GenreResponse>();
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    const loadGenres = async () => {
      try {
        const data = await fetchGenres();
        setGenres(data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    loadGenres();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const genre = {
      id: event.currentTarget.dataset.genreId || "",
      name: event.currentTarget.textContent || "",
    };
    setSelectedGenre(genre);
  };

  const handleSubmit = () => {
    onSubmit(selectedGenre, year);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const liElements = genres?.genres.map((genre) => (
    <li key={genre.id} data-genre-id={genre.id} onClick={handleClick}>
      <a>{genre.name}</a>
    </li>
  ));

  return (
    <div className="filter">
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn mb-1 ">
          {selectedGenre?.name || "Select Genre"}
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {liElements}
        </ul>
      </div>
      <input onChange={handleYearChange} type="text" placeholder="Select year" className="input" value={year} />
      <button onClick={handleSubmit} className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}
